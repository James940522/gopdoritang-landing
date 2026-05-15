import { createHmac, randomUUID } from 'crypto';
import { companyInfo, formatContactPhone, type ContactFormValues } from '../model';

export type ContactNotificationResult = {
  status: 'sent';
  provider: 'solapi';
  messageId?: string;
  groupId?: string;
};

type SolapiSendResponse = {
  messageId?: string;
  groupId?: string;
};

function readRequiredEnv(name: 'SOLAPI_API_KEY' | 'SOLAPI_API_SECRET' | 'SMS_TO' | 'SMS_FROM') {
  const value = process.env[name]?.trim();

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

function normalizePhone(input: string) {
  return input.replace(/[^\d]/g, '');
}

function createSolapiAuthHeader(apiKey: string, apiSecret: string) {
  const date = new Date().toISOString();
  const salt = randomUUID();
  const signature = createHmac('sha256', apiSecret)
    .update(date + salt)
    .digest('hex');

  return `HMAC-SHA256 apiKey=${apiKey}, date=${date}, salt=${salt}, signature=${signature}`;
}

function createSmsText(values: ContactFormValues) {
  const phone = normalizePhone(formatContactPhone(values));
  const source = values.referralSources.length > 0 ? values.referralSources.join(', ') : '-';
  const domain = values.domain?.trim() || '-';
  const inquiryDetail = values.inquiryDetail.trim() || '-';

  return `[${companyInfo.brandName} 창업문의]
성함: ${values.name.trim()}
연락처: ${phone}
창업 희망 지역: ${values.desiredRegion.trim()}
예상 창업 비용: ${values.expectedBudget.trim()}
방문 유입 경로: ${source}
접수 도메인: ${domain}

문의 내용:
${inquiryDetail}`.slice(0, 1000);
}

export async function sendContactNotification(
  values: ContactFormValues,
): Promise<ContactNotificationResult> {
  const apiKey = readRequiredEnv('SOLAPI_API_KEY');
  const apiSecret = readRequiredEnv('SOLAPI_API_SECRET');
  const to = normalizePhone(readRequiredEnv('SMS_TO'));
  const from = normalizePhone(readRequiredEnv('SMS_FROM'));

  const response = await fetch('https://api.solapi.com/messages/v4/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: createSolapiAuthHeader(apiKey, apiSecret),
    },
    body: JSON.stringify({
      message: {
        to,
        from,
        text: createSmsText(values),
      },
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('[contact-form] Solapi send failed', errorText);
    throw new Error(`Solapi send failed with ${response.status}`);
  }

  const result = (await response.json().catch(() => null)) as SolapiSendResponse | null;

  return {
    status: 'sent',
    provider: 'solapi',
    messageId: result?.messageId,
    groupId: result?.groupId,
  };
}
