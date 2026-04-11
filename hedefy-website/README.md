# Hedefy Scaffolding Website

A modern, responsive website for Hedefy Scaffolding with advanced features including lead generation, WhatsApp automation, AI chatbot, and admin dashboard.

## 🚀 Features

### Frontend
- **Responsive Design**: Mobile-first approach, works perfectly on all devices
- **Modern UI**: Built with Next.js and TailwindCSS
- **Smooth Animations**: Framer Motion integration for engaging interactions
- **Fast Performance**: Optimized for speed and SEO
- **Accessibility**: WCAG compliant

### Pages
1. **Home Page**: Hero section, company intro, services overview, featured projects
2. **About Us**: Company overview, mission, vision, core values
3. **Services**: 8 comprehensive scaffolding services with details
4. **Portfolio**: Project gallery with filtering and case studies
5. **Contact**: Contact form, location map, business hours
6. **Admin Dashboard**: Analytics and management interface

### Features
- ✅ WhatsApp automation with pre-filled messages
- ✅ 24/7 AI chatbot for customer support
- ✅ Contact form with email & WhatsApp notifications
- ✅ Admin dashboard for managing inquiries
- ✅ Fully responsive design
- ✅ SEO optimized
- ✅ Performance optimized

## 🛠️ Tech Stack

```
Frontend: Next.js 14, React 18, TailwindCSS, TypeScript
Backend: Node.js, Next.js API Routes
Database: Supabase (PostgreSQL)
AI: OpenAI API for chatbot
Messaging: WhatsApp Business API
Hosting: Vercel
```

## 📋 Project Structure

```
hedefy-website/
├── pages/
│   ├── _app.tsx                 # App wrapper
│   ├── _document.tsx            # HTML document
│   ├── index.tsx                # Home page
│   ├── about.tsx                # About page
│   ├── services.tsx             # Services page
│   ├── portfolio.tsx            # Portfolio page
│   ├── contact.tsx              # Contact page
│   ├── privacy.tsx              # Privacy policy
│   ├── terms.tsx                # Terms of service
│   ├── admin/
│   │   └── index.tsx            # Admin dashboard
│   └── api/
│       ├── contact.ts           # Contact form API
│       ├── chatbot.ts           # Chatbot API
│       ├── inquiries.ts         # Inquiries API
│       └── admin/
│           ├── inquiries.ts     # Admin inquiries API
│           ├── statistics.ts    # Dashboard stats API
│           └── messages.ts      # Admin messages API
├── components/
│   ├── Layout.tsx               # Main layout
│   ├── Header.tsx               # Navigation header
│   ├── Footer.tsx               # Footer
│   ├── Button.tsx               # Reusable button
│   ├── ServiceCard.tsx          # Service card component
│   ├── ProjectCard.tsx          # Project card component
│   ├── FormField.tsx            # Form input component
│   ├── SectionHeader.tsx        # Section title component
│   ├── WhatsAppButton.tsx       # WhatsApp button
│   └── ChatBot.tsx              # AI chatbot widget
├── utils/
│   ├── api.ts                   # API client
│   └── helpers.ts               # Helper functions
├── config/
│   └── database.ts              # Database config
├── database/
│   └── schema.sql               # Database schema
├── public/                      # Static assets
├── styles/
│   └── globals.css              # Global styles
├── package.json                 # Dependencies
├── tsconfig.json                # TypeScript config
├── next.config.js               # Next.js config
├── tailwind.config.js           # TailwindCSS config
└── postcss.config.js            # PostCSS config
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm/yarn
- Python 3.8+ (for virtual environment)

### Installation

1. **Set up Python virtual environment:**
```bash
cd "Hedefy Scaffolding Contracting"
python -m venv .venv
.\.venv\Scripts\Activate.ps1  # On Windows PowerShell
```

2. **Navigate to project directory:**
```bash
cd hedefy-website
```

3. **Install dependencies:**
```bash
npm install
```

4. **Configure environment variables:**
```bash
# Create .env.local file
cp .env.local.example .env.local
```

Fill in your configuration:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
NEXT_PUBLIC_OPENAI_API_KEY=your_openai_key
WHATSAPP_NUMBER=+971504529978
ADMIN_EMAIL=admin@hedefy.ae
```

5. **Run development server:**
```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

## 🌐 Deployment

### Deploy to Vercel

1. **Push to GitHub:**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Connect to Vercel:**
- Go to https://vercel.com
- Import the repository
- Add environment variables
- Deploy

### Deploy to Other Platforms

**Build static export:**
```bash
npm run build
npm run export
```

## 🔧 Configuration

### Environment Variables

Create `.env.local`:
```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

# OpenAI
NEXT_PUBLIC_OPENAI_API_KEY=

# WhatsApp
WHATSAPP_NUMBER=+971504529978
WHATSAPP_BUSINESS_ACCOUNT_ID=
WHATSAPP_ACCESS_TOKEN=

# Email
ADMIN_EMAIL=admin@hedefy.ae
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=
SMTP_PASSWORD=

# Site
NEXT_PUBLIC_SITE_URL=
```

### Database Setup

1. Create Supabase project
2. Run database schema:
```sql
-- Execute queries from database/schema.sql
```

3. Set up Row Level Security (RLS) policies

## 📱 Features Implementation

### WhatsApp Automation
- Pre-filled messages
- Auto-reply with FAQ responses
- Admin notifications
- Lead tracking

### AI Chatbot
- FAQ knowledge base
- Project qualification
- Lead collection
- Conversation history

### Contact Form
- Email notifications to admin
- WhatsApp notifications
- User confirmation
- Auto-reply

### Admin Dashboard
- Inquiry management
- Lead tracking
- Conversation monitoring
- Analytics

## 🎨 Customization

### Colors
Edit `tailwind.config.js`:
```js
colors: {
  primary: {
    dark: '#001a4d',      // Dark Blue
    light: '#003d99',
    lighter: '#0052cc',
  },
  accent: '#ffd700',      // Safety Yellow
}
```

### Content
Update text in respective page components in `/pages` directory.

### Images
Replace placeholder images in:
- Hero sections
- Project cards
- About sections

## 📊 Performance Optimization

- ✅ Image optimization
- ✅ Code splitting
- ✅ CSS minification
- ✅ API route compression
- ✅ Caching strategies

## 🔒 Security

- SSL/TLS encryption
- API key protection
- CORS configuration
- Input validation
- XSS prevention
- CSRF protection

## 📈 SEO

- Meta tags and descriptions
- Sitemap generation
- Structured data
- Mobile optimization
- Page speed optimization

## 🤝 Support

For issues and questions:
- Email: info@hedefy-scaff.com
- Phone: +971 50-4529978
- WhatsApp: Message us directly

## 📄 License

© 2024 Hedefy Scaffolding. All rights reserved.

## 📝 Notes

- Update WhatsApp number in components
- Configure email service (Gmail/SendGrid)
- Set up OpenAI API key
- Configure Supabase database
- Add custom domain
- Set up SSL certificate
- Configure analytics

---

**Version**: 1.0.0  
**Last Updated**: April 2024
