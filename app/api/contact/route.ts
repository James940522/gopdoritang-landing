import { NextResponse } from 'next/server';
import { contactFormSchema } from '@features/contact-form/model';
import { sendContactNotification } from '@features/contact-form/server/send-contact-notification';

export const runtime = 'nodejs';

const RATE_LIMIT_WINDOW = 60 * 1000;
const RATE_LIMIT_MAX = 3;
const rateLimitMap = new Map<string, number[]>();

function getClientIp(request: Request) {
  const forwarded = request.headers.get('x-forwarded-for');

  if (forwarded) {
    return forwarded.split(',')[0]?.trim() || 'unknown';
  }

  return request.headers.get('x-real-ip')?.trim() || 'unknown';
}

function checkRateLimit(ip: string) {
  const now = Date.now();
  const requests = rateLimitMap.get(ip) ?? [];
  const recentRequests = requests.filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW);

  if (recentRequests.length >= RATE_LIMIT_MAX) {
    return false;
  }

  recentRequests.push(now);
  rateLimitMap.set(ip, recentRequests);

  if (rateLimitMap.size > 1000) {
    rateLimitMap.forEach((timestamps, key) => {
      if (timestamps.every((timestamp) => now - timestamp > RATE_LIMIT_WINDOW)) {
        rateLimitMap.delete(key);
      }
    });
  }

  return true;
}

export async function POST(request: Request) {
  try {
    const clientIp = getClientIp(request);

    if (!checkRateLimit(clientIp)) {
      return NextResponse.json(
        {
          ok: false,
          error: 'TOO_MANY_REQUESTS',
          message: '너무 많은 요청입니다. 잠시 후 다시 시도해 주세요.',
        },
        { status: 429 },
      );
    }

    const payload = await request.json().catch(() => null);
    const parsed = contactFormSchema.safeParse(payload);

    if (!parsed.success) {
      const firstIssue = parsed.error.issues[0];

      return NextResponse.json(
        {
          ok: false,
          error: 'INVALID_INPUT',
          message: firstIssue?.message ?? '입력 내용을 다시 확인해 주세요.',
          issues: parsed.error.issues,
        },
        { status: 400 },
      );
    }

    const values = parsed.data;

    if (values.hp?.trim()) {
      return NextResponse.json({
        ok: true,
        message: '문의가 접수되었습니다. 담당자가 확인 후 빠르게 연락드리겠습니다.',
      });
    }

    const notification = await sendContactNotification(values);

    return NextResponse.json({
      ok: true,
      notification,
      message: '문의가 접수되었습니다. 담당자가 확인 후 빠르게 연락드리겠습니다.',
    });
  } catch (error) {
    console.error('[contact-form] submit failed', error);

    return NextResponse.json(
      {
        ok: false,
        message: '문의 접수 중 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.',
      },
      { status: 500 },
    );
  }
}
