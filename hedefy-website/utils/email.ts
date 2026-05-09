// Email Service Integration
// Install: npm install nodemailer

import nodemailer from 'nodemailer';

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

// Create transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function sendEmail(options: EmailOptions): Promise<boolean> {
  try {
    const info = await transporter.sendMail({
      from: `Hedefy Scaffolding Contracting Co. LLC <${process.env.SMTP_USER}>`,
      to: options.to,
      subject: options.subject,
      text: options.text,
      html: options.html,
    });

    console.log('Email sent:', info.messageId);
    return true;
  } catch (error) {
    console.error('Email error:', error);
    return false;
  }
}

export function getContactFormTemplate(data: {
  name: string;
  company?: string;
  phone: string;
  email: string;
  projectDetails: string;
}): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #001a4d; border-bottom: 3px solid #ffd700; padding-bottom: 10px;">
        New Inquiry from Hedefy Website
      </h2>
      
      <div style="background-color: #f5f5f5; padding: 20px; margin: 20px 0; border-radius: 5px;">
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Company:</strong> ${data.company || 'N/A'}</p>
        <p><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>
        <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
      </div>
      
      <div style="background-color: #f9f9f9; padding: 20px; margin: 20px 0; border-left: 4px solid #ffd700;">
        <h3 style="color: #001a4d; margin-top: 0;">Project Details</h3>
        <p style="white-space: pre-wrap; color: #333;">${data.projectDetails}</p>
      </div>
      
      <div style="background-color: #001a4d; color: white; padding: 20px; border-radius: 5px; text-align: center; margin-top: 20px;">
        <p style="margin: 0;">Respond quickly to convert this lead</p>
        <p style="margin: 10px 0 0 0; font-size: 12px;">Received: ${new Date().toLocaleString()}</p>
      </div>
    </div>
  `;
}

export function getConfirmationTemplate(data: { name: string }): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #001a4d 0%, #0052cc 100%); color: white; padding: 40px; text-align: center; border-radius: 5px 5px 0 0;">
        <h1 style="margin: 0; font-size: 28px;">Thank You, ${data.name}!</h1>
        <p style="margin: 10px 0 0 0; font-size: 16px;">We received your inquiry</p>
      </div>
      
      <div style="background-color: #f5f5f5; padding: 40px; border-radius: 0 0 5px 5px;">
        <p style="color: #333; font-size: 16px; line-height: 1.6;">
          Thank you for contacting Hedefy Scaffolding Contracting Co. LLC. We appreciate your interest in our services.
        </p>
        
        <p style="color: #333; font-size: 16px; line-height: 1.6;">
          Our team has received your inquiry and will review your project requirements. 
          We will contact you within <strong>24 hours</strong> with detailed information and a customized quote.
        </p>
        
        <div style="background-color: white; border-left: 4px solid #ffd700; padding: 20px; margin: 20px 0; border-radius: 3px;">
          <h3 style="color: #001a4d; margin-top: 0;">In the meantime:</h3>
          <ul style="color: #333; line-height: 1.8;">
            <li>Chat with our AI assistant for quick answers</li>
            <li>Message us on WhatsApp for urgent matters</li>
            <li>Call us at <a href="tel:0504529978" style="color: #0052cc; text-decoration: none;">050-4529978</a></li>
          </ul>
        </div>
        
        <p style="color: #666; font-size: 14px; margin-top: 30px;">
          Best regards,<br>
          <strong>Hedefy Scaffolding Contracting Co. LLC Team</strong>
        </p>
      </div>
    </div>
  `;
}

export function getChatbotInquiryTemplate(data: {
  name: string;
  phone: string;
  projectType: string;
  location: string;
  projectDetails: string;
}): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #001a4d; border-bottom: 3px solid #ffd700; padding-bottom: 10px;">
        New Chatbot Inquiry
      </h2>
      
      <div style="background-color: #f5f5f5; padding: 20px; margin: 20px 0; border-radius: 5px;">
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>
        <p><strong>Project Type:</strong> ${data.projectType}</p>
        <p><strong>Location:</strong> ${data.location}</p>
      </div>
      
      <div style="background-color: #f9f9f9; padding: 20px; margin: 20px 0; border-left: 4px solid #ffd700;">
        <h3 style="color: #001a4d; margin-top: 0;">Project Details</h3>
        <p style="color: #333;">${data.projectDetails}</p>
      </div>
    </div>
  `;
}
