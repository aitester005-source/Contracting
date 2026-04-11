# 📁 Project Structure Guide

## Complete File Organization

```
Hedefy Scaffolding Contracting/
└── hedefy-website/                          # Main Project Root
    │
    ├── 📄 Core Configuration
    │   ├── package.json                     # Dependencies & scripts
    │   ├── tsconfig.json                    # TypeScript config
    │   ├── next.config.js                   # Next.js config
    │   ├── next.config.ts                   # Extended Next config
    │   ├── tailwind.config.js               # Tailwind theme
    │   ├── postcss.config.js                # PostCSS config
    │   ├── vercel.json                      # Vercel deployment config
    │   ├── .gitignore                       # Git ignore patterns
    │   ├── .env.local                       # Environment variables (SECRET!)
    │   └── .env.local.example               # Environment template
    │
    ├── 📄 Documentation (Read First!)
    │   ├── START_HERE.md                    # 👈 Begin here!
    │   ├── PROJECT_SUMMARY.md               # Complete overview
    │   ├── README.md                        # Technical details
    │   ├── SETUP_GUIDE.md                   # Installation guide
    │   └── LAUNCH_CHECKLIST.md              # Pre-launch verification
    │
    ├── 📁 pages/                            # Website Pages & APIs
    │   ├── _app.tsx                         # App wrapper (RTL context)
    │   ├── _document.tsx                    # HTML document template
    │   │
    │   ├── 🏠 Main Pages
    │   ├── index.tsx                        # Home page
    │   ├── about.tsx                        # About us page
    │   ├── services.tsx                     # Services page
    │   ├── portfolio.tsx                    # Portfolio page
    │   ├── contact.tsx                      # Contact page
    │   ├── privacy.tsx                      # Privacy policy
    │   ├── terms.tsx                        # Terms of service
    │   │
    │   ├── 🔧 API Routes
    │   ├── api/
    │   │   ├── contact.ts                   # Contact form API
    │   │   ├── chatbot.ts                   # Chatbot API
    │   │   ├── inquiries.ts                 # Inquiry API
    │   │   │
    │   │   └── admin/
    │   │       ├── inquiries.ts             # Admin inquiries API
    │   │       ├── statistics.ts            # Dashboard stats API
    │   │       └── messages.ts              # Chat messages API
    │   │
    │   └── 🔐 Admin
    │       └── admin/
    │           └── index.tsx                # Admin dashboard
    │
    ├── 📁 components/                       # Reusable Components
    │   ├── Layout.tsx                       # Main layout wrapper
    │   ├── Header.tsx                       # Navigation header
    │   ├── Footer.tsx                       # Page footer
    │   │
    │   ├── 🎨 UI Components
    │   ├── Button.tsx                       # Button (3 variants)
    │   ├── FormField.tsx                    # Form input field
    │   ├── SectionHeader.tsx                # Section title
    │   │
    │   ├── 📋 Feature Components
    │   ├── ServiceCard.tsx                  # Service showcase card
    │   ├── ProjectCard.tsx                  # Portfolio project card
    │   │
    │   └── 🤖 Interactive
    │       ├── WhatsAppButton.tsx           # WhatsApp floating button
    │       └── ChatBot.tsx                  # AI chatbot widget
    │
    ├── 📁 utils/                            # Utility Functions
    │   ├── api.ts                           # API client & services
    │   ├── helpers.ts                       # Helper functions
    │   ├── whatsapp.ts                      # WhatsApp integration
    │   ├── email.ts                         # Email service
    │   ├── supabase.ts                      # Supabase queries
    │   └── icons.ts                         # Icon imports
    │
    ├── 📁 config/                           # Configuration
    │   └── database.ts                      # Database constants
    │
    ├── 📁 database/                         # Database
    │   └── schema.sql                       # SQL schema (5 tables)
    │
    ├── 📁 styles/                           # Stylesheets
    │   └── globals.css                      # Global styles & utilities
    │
    └── 📁 public/                           # Static Assets
        └── (images, fonts, etc.)
```

---

## 🗂️ File Count Summary

| Category | Count | Files |
|----------|-------|-------|
| **Pages** | 7 | Home, About, Services, Portfolio, Contact, Privacy, Terms |
| **API Routes** | 6 | Contact, Chatbot, Inquiries, + 3 Admin |
| **Components** | 11 | Layout, Header, Footer, Button, Cards, etc. |
| **Utilities** | 6 | API, Helpers, WhatsApp, Email, Supabase, Icons |
| **Configuration** | 10 | Next, Tailwind, TypeScript, Vercel, etc. |
| **Documentation** | 5 | README, SETUP, LAUNCH, START, PROJECT_SUMMARY |
| **Database** | 1 | Schema with 5 tables |
| **Styles** | 1 | Global CSS |
| **Total** | **47+** | Files & Directories |

---

## 🔍 Finding Specific Features

### Contact/Lead Generation
```
pages/contact.tsx              # Contact page with form
pages/api/contact.ts           # Form submission API
utils/email.ts                 # Email notifications
utils/whatsapp.ts              # WhatsApp notifications
components/FormField.tsx       # Form inputs
```

### AI Chatbot
```
components/ChatBot.tsx         # Chatbot UI widget
pages/api/chatbot.ts           # Chatbot API logic
config/database.ts             # FAQ keywords
```

### WhatsApp Automation
```
components/WhatsAppButton.tsx  # Floating button
utils/whatsapp.ts              # API integration
pages/api/contact.ts           # Notification trigger
```

### Admin Dashboard
```
pages/admin/index.tsx          # Dashboard page
pages/api/admin/*              # Admin APIs
utils/api.ts                   # Admin API calls
```

### Portfolio
```
pages/portfolio.tsx            # Portfolio page
components/ProjectCard.tsx     # Project cards
database/schema.sql            # Projects table
```

### Services
```
pages/services.tsx             # Services page
components/ServiceCard.tsx     # Service cards
config/database.ts             # Service types
```

---

## 📋 When to Edit These Files

### I Want to Change...

**Site Title & Colors**
→ Edit `tailwind.config.js`

**Company Information**
→ Edit `components/Footer.tsx` and relevant pages

**Phone/Email**
→ Search across all files for "+971" or "info@hedefy.ae"

**Service Descriptions**
→ Edit `pages/services.tsx` and `components/ServiceCard`

**Project Portfolio**
→ Edit `pages/portfolio.tsx` and `components/ProjectCard`

**Homepage Content**
→ Edit `pages/index.tsx`

**Forms**
→ Edit `components/FormField.tsx` and relevant page forms

**API Behavior**
→ Edit files in `pages/api/` directory

**Database Structure**
→ Edit `database/schema.sql`

**Styling**
→ Edit `components/*.tsx` or `styles/globals.css`

**Email Templates**
→ Edit `utils/email.ts`

**Admin Features**
→ Edit `pages/admin/index.tsx` and `pages/api/admin/*`

---

## 🚀 Development Workflow

### Adding a New Page

1. Create file: `pages/newpage.tsx`
2. Import Layout: `import Layout from '@/components/Layout'`
3. Add page content
4. Export component

### Adding a New Component

1. Create file: `components/NewComponent.tsx`
2. Export React component
3. Import where needed
4. Use `import NewComponent from '@/components/NewComponent'`

### Adding a New API

1. Create file: `pages/api/newapi.ts`
2. Export handler: `export default function handler()`
3. Handle GET/POST/etc
4. Call from frontend using `fetch()` or `apiClient`

### Adding a New Utility

1. Create file: `utils/newutil.ts`
2. Export functions
3. Import where needed

---

## 🔐 Security-Sensitive Files

⚠️ **Keep these PRIVATE:**
- `.env.local` - Contains API keys (Never commit!)
- `.env.*.local` - Environment variables
- Database credentials

✅ **Safe to commit:**
- All other files
- `.env.local.example` - Template only

---

## 📞 Quick Navigation

| I Want To... | Go To... |
|---|---|
| Edit homepage | `pages/index.tsx` |
| Edit colors | `tailwind.config.js` |
| Add new page | `pages/newpage.tsx` |
| Add new component | `components/NewComp.tsx` |
| Add new API | `pages/api/newapi.ts` |
| Change contact info | `components/Footer.tsx` |
| Edit services | `pages/services.tsx` |
| Edit portfolio | `pages/portfolio.tsx` |
| Admin dashboard | `pages/admin/index.tsx` |
| Database queries | `utils/supabase.ts` |
| Email templates | `utils/email.ts` |
| WhatsApp setup | `utils/whatsapp.ts` |
| Global styles | `styles/globals.css` |
| Dependencies | `package.json` |

---

## 🎨 Component Hierarchy

```
Layout (components/Layout.tsx)
├── Header (components/Header.tsx)
├── Main Content (pages/*.tsx)
│   ├── SectionHeader (components/SectionHeader.tsx)
│   ├── ServiceCard (components/ServiceCard.tsx)
│   ├── ProjectCard (components/ProjectCard.tsx)
│   ├── Button (components/Button.tsx)
│   └── FormField (components/FormField.tsx)
├── Footer (components/Footer.tsx)
├── WhatsAppButton (components/WhatsAppButton.tsx)
└── ChatBot (components/ChatBot.tsx)
```

---

## 💾 Key Configuration Files

| File | Purpose |
|------|---------|
| `package.json` | Project dependencies & scripts |
| `tsconfig.json` | TypeScript configuration |
| `tailwind.config.js` | Color scheme & theme |
| `next.config.js` | Build & runtime settings |
| `vercel.json` | Deployment configuration |
| `.env.local` | Secret credentials |

---

## 📊 File Sizes (Approximate)

| Directory | Size |
|-----------|------|
| pages/ | ~15 KB |
| components/ | ~20 KB |
| utils/ | ~12 KB |
| database/ | ~3 KB |
| config/ | ~2 KB |
| styles/ | ~5 KB |
| **Total** | **~57 KB** |

---

## 🚀 Common Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Export static site
npm run export
```

---

## ✅ Verification Checklist

Before deployment, verify:

- [ ] All files in `pages/` are properly named
- [ ] All components in `components/` export default
- [ ] All API routes in `pages/api/` have handler
- [ ] `.env.local` has all required variables
- [ ] No errors in `npm run build`
- [ ] Website works with `npm run dev`
- [ ] All images loaded correctly
- [ ] Forms submit successfully

---

## 📚 Related Documentation

See also:
- **START_HERE.md** - Quick start guide
- **PROJECT_SUMMARY.md** - Overview of what was built
- **SETUP_GUIDE.md** - Installation instructions
- **README.md** - Technical documentation

---

**Ready to explore? Pick your starting point above! 🚀**
