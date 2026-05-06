const dotenv = require('dotenv');
dotenv.config({ path: '.env.local' });
const nodemailer = require('nodemailer');
const { google } = require('googleapis');

async function testSMTP() {
  console.log('Testing SMTP...');
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  try {
    await transporter.verify();
    console.log('✅ SMTP connection successful!');
    
    // Attempt sending a test email
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL,
      subject: 'Test Email from Node',
      text: 'This is a test email.',
    });
    console.log('✅ Test email sent!');
  } catch (err) {
    console.error('❌ SMTP Error:', err.message);
  }
}

async function testSheets() {
  console.log('Testing Google Sheets...');
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Sheet1!A:F', // Adjust if your sheet name differs
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [
            new Date().toISOString(),
            "System Test",
            "N/A",
            "N/A",
            "test@example.com",
            "Test Details"
          ],
        ],
      },
    });
    console.log('✅ Successfully saved to Google Sheets!');
  } catch (err) {
    console.error('❌ Sheets Error:', err.message);
  }
}

async function run() {
  await testSMTP();
  await testSheets();
}

run();
