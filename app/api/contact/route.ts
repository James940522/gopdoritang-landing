import { NextResponse } from 'next/server';
import { ZodError } from 'zod';
import { contactFormSchema } from '@features/contact-form/model';
import { sendContactNotification } from '@features/contact-form/server/send-contact-notification';

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const values = contactFormSchema.parse(payload);
    const notification = await sendContactNotification(values);

    return NextResponse.json({
      ok: true,
      notification,
      message: '문의가 접수되었습니다. 담당자가 확인 후 빠르게 연락드리겠습니다.',
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          ok: false,
          message: error.issues[0]?.message ?? '입력 내용을 다시 확인해 주세요.',
          issues: error.issues,
        },
        { status: 400 },
      );
    }

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
