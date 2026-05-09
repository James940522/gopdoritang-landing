import { companyInfo, formatContactPhone, type ContactFormValues } from '../model';

export type ContactNotificationResult =
  | {
      status: 'sent';
      provider: 'webhook';
    }
  | {
      status: 'skipped';
      reason: 'missing-webhook-url';
    };

export async function sendContactNotification(
  values: ContactFormValues,
): Promise<ContactNotificationResult> {
  const webhookUrl = process.env.CONTACT_SMS_WEBHOOK_URL;

  if (!webhookUrl) {
    console.info('[contact-form] SMS webhook is not configured.', {
      brand: companyInfo.brandName,
      name: values.name,
      phone: formatContactPhone(values),
      desiredRegion: values.desiredRegion,
    });

    return {
      status: 'skipped',
      reason: 'missing-webhook-url',
    };
  }

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(process.env.CONTACT_SMS_WEBHOOK_SECRET
        ? { Authorization: `Bearer ${process.env.CONTACT_SMS_WEBHOOK_SECRET}` }
        : {}),
    },
    body: JSON.stringify({
      brand: companyInfo.brandName,
      company: companyInfo.companyName,
      name: values.name,
      phone: formatContactPhone(values),
      desiredRegion: values.desiredRegion,
      expectedBudget: values.expectedBudget,
      inquiryDetail: values.inquiryDetail,
      referralSources: values.referralSources,
      submittedAt: new Date().toISOString(),
    }),
  });

  if (!response.ok) {
    throw new Error(`SMS webhook failed with ${response.status}`);
  }

  return {
    status: 'sent',
    provider: 'webhook',
  };
}
