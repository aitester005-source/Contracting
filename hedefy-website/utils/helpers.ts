// Email sending utility
export const sendEmail = async (
  to: string,
  subject: string,
  html: string
) => {
  // TODO: Implement using nodemailer or SendGrid
  console.log(`Email to ${to}: ${subject}`);
};

// WhatsApp sending utility
export const sendWhatsApp = async (
  phoneNumber: string,
  message: string
) => {
  // TODO: Implement using WhatsApp Business API
  console.log(`WhatsApp to ${phoneNumber}: ${message}`);
};

// Format phone number
export const formatPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }
  return phone;
};

// Format date
export const formatDate = (date: Date): string => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
