// WhatsApp API Integration
// Install: npm install whatsapp-web.js

import axios from 'axios';

const WHATSAPP_API_URL = 'https://graph.instagram.com/v18.0';

interface WhatsAppMessage {
  phoneNumber: string;
  message: string;
  templateName?: string;
}

export async function sendWhatsAppMessage(
  data: WhatsAppMessage
): Promise<boolean> {
  try {
    const payload = {
      messaging_product: 'whatsapp',
      recipient_type: 'individual',
      to: data.phoneNumber,
      type: 'text',
      text: {
        preview_url: true,
        body: data.message,
      },
    };

    const response = await axios.post(
      `${WHATSAPP_API_URL}/${process.env.WHATSAPP_BUSINESS_ACCOUNT_ID}/messages`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${process.env.WHATSAPP_ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    );

    console.log('WhatsApp message sent:', response.data);
    return true;
  } catch (error) {
    console.error('WhatsApp error:', error);
    return false;
  }
}

export async function sendAutoReply(phoneNumber: string): Promise<void> {
  const autoReplyMessage = `
Thank you for contacting Hedefy Scaffolding Contracting Co. LLC.
Our team will respond shortly.

For urgent projects please share:
• Location
• Project details
• Timeline

Thank you!
  `.trim();

  await sendWhatsAppMessage({
    phoneNumber,
    message: autoReplyMessage,
  });
}

export function formatPhoneNumber(phone: string): string {
  // Remove any non-digit characters
  const cleaned = phone.replace(/\D/g, '');
  
  // Add country code if not present
  if (!cleaned.startsWith('971')) {
    return `971${cleaned}`;
  }
  
  return cleaned;
}
