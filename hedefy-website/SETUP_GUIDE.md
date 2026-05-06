# Hedefy Scaffolding Website - Installation & Setup Guide

## 🎯 Quick Start Guide

### Step 1: System Setup

**On Windows (PowerShell):**
```powershell
# Navigate to the project
cd "c:\Users\999327\AI\Hedefy Scaffolding Contracting"

# Create virtual environment
python -m venv .venv

# Activate virtual environment
.\.venv\Scripts\Activate.ps1

# Navigate to website project
cd hedefy-website
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install all required packages:
- Next.js 14
- React 18
- TailwindCSS
- Axios (API client)
- React-hot-toast (notifications)
- React-icons (icon library)
- Zustand (state management)
- Framer Motion (animations)

### Step 3: Configure Environment Variables

Create `.env.local` file in the `hedefy-website` directory:

```bash
# Supabase Database
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here

# OpenAI API (for AI Chatbot)
NEXT_PUBLIC_OPENAI_API_KEY=sk-your-openai-api-key

# WhatsApp Business
WHATSAPP_NUMBER=971529885372
WHATSAPP_BUSINESS_ACCOUNT_ID=your-business-account-id
WHATSAPP_ACCESS_TOKEN=your-access-token

# Email Service (Gmail with App Password)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password

# Admin
ADMIN_API_KEY=your-admin-secret-key
ADMIN_EMAIL=admin@hedefy.ae

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Step 4: Set Up Supabase Database

1. **Create Supabase Account:**
   - Go to https://supabase.com
   - Create a new project
   - Copy your URL and anon key

2. **Create Database Schema:**
   - Go to SQL Editor in Supabase
   - Copy content from `database/schema.sql`
   - Execute all queries

3. **Enable Row Level Security (RLS):**
   - For each table, enable RLS policies
   - Configure public access for reading
   - Restrict insert/update to authenticated users

### Step 5: Set Up External Services

#### Gmail SMTP (for emails)
1. Enable 2-Factor Authentication on Gmail
2. Create App Password
3. Copy password to SMTP_PASSWORD

#### OpenAI API (for chatbot)
1. Go to https://platform.openai.com
2. Create API key
3. Add to NEXT_PUBLIC_OPENAI_API_KEY

#### WhatsApp Business API
1. Register WhatsApp Business Account
2. Get Business Account ID
3. Generate Access Token
4. Update in .env.local

### Step 6: Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` - you should see the website!

## 📱 Admin Dashboard

Access admin panel at `http://localhost:3000/admin`

**Default credentials needed** (set up your own admin key in .env.local)

Features:
- View all customer inquiries
- Monitor WhatsApp leads
- Check chatbot conversations
- View dashboard statistics

## 🔧 Database Schema Tables

### inquiries
```sql
- id: unique identifier
- name: customer name
- company: company name
- phone: contact phone
- email: contact email
- project_details: project description
- status: new/contacted/converted/rejected
- created_at: submission timestamp
```

### chatbot_messages
```sql
- id: unique identifier
- conversation_id: group related messages
- sender: 'user' or 'bot'
- message: message content
- status: active/archived
- created_at: timestamp
```

### whatsapp_leads
```sql
- id: unique identifier
- phone_number: WhatsApp number
- name: customer name
- message: inquiry message
- status: new/contacted/converted
- created_at: timestamp
```

### projects
```sql
- id: unique identifier
- title: project name
- location: project location
- description: project details
- category: residential/commercial/industrial/religious/event
- image_url: project image
- status: active/completed/archived
```

## 🚀 Deployment to Vercel

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/hedefy-website.git
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to https://vercel.com
2. Click "New Project"
3. Import GitHub repository
4. Add environment variables
5. Deploy!

### Step 3: Custom Domain

1. In Vercel project settings
2. Add custom domain
3. Update DNS records at registrar
4. SSL certificate auto-configured

## 🔐 Security Checklist

- [ ] Change admin API key to something secure
- [ ] Enable HTTPS (automatic on Vercel)
- [ ] Configure CORS if API on different domain
- [ ] Set database RLS policies
- [ ] Use environment variables for all secrets
- [ ] Enable email verification
- [ ] Rate limit API endpoints
- [ ] Add CAPTCHA to contact form
- [ ] Encrypt sensitive data
- [ ] Regular security audits

## 📊 Analytics Setup

### Google Analytics
1. Create Google Analytics account
2. Add tracking ID to next.config.js
3. Use next/amp for AMP support

### Vercel Analytics
- Automatically included with Vercel hosting
- Monitor performance metrics
- Track user interactions

## 🐛 Troubleshooting

### Issue: "Cannot find module 'next'"
**Solution:** Run `npm install`

### Issue: "WhatsApp API error"
**Solution:** Check access token and account ID in .env.local

### Issue: "Database connection error"
**Solution:** Verify Supabase URL and key in .env.local

### Issue: "Email not sending"
**Solution:** 
- Check Gmail app password
- Enable "Less secure app access"
- Verify SMTP credentials

### Issue: "Chatbot not responding"
**Solution:** 
- Check OpenAI API key
- Verify API quota/billing
- Check internet connection

## 📞 Support & Maintenance

### Regular Tasks
- Monitor error logs
- Update dependencies monthly
- Backup database weekly
- Check security vulnerabilities
- Review analytics

### Update Dependencies
```bash
npm update
npm audit
npm audit fix
```

### Database Maintenance
- Monitor query performance
- Clean up old records
- Update indexes
- Analyze queries

## 📈 Performance Optimization

- Image optimization: Use next/image
- Code splitting: Automatic with Next.js
- Caching: Configure in next.config.js
- GZIP compression: Automatic on Vercel
- CSS minification: Automatic

## 🎨 Customization

### Update Colors
Edit `tailwind.config.js`:
```js
colors: {
  primary: {
    dark: '#001a4d',    // Change Dark Blue
  },
  accent: '#ffd700',    // Change Safety Yellow
}
```

### Update Content
Edit relevant page files in `/pages` directory

### Update Logo/Images
Replace images in `/public` directory

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [React Documentation](https://react.dev)

## 🎉 Congratulations!

Your Hedefy Scaffolding website is now ready to go live! 

Next steps:
1. Test all features thoroughly
2. Update business information
3. Configure analytics
4. Set up monitoring
5. Launch and promote!

---

**Support:** info@hedefy-scaff.com  
**Emergency:** +971 52 988 5372  
**WhatsApp:** Available 24/7
