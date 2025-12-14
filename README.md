# Portfolio - Damjan Savić

Personal portfolio website showcasing my work as an **AI & Automation Specialist** based in Germany.

**Live:** [damjan-savic.com](https://damjan-savic.com)

## Current Role

**Process Automation Specialist** @ Everlast Consulting GmbH (since Dec 2024)
- Developing AI agents with n8n and Zapier
- Building web scraping solutions
- RecroBot Voice Interview Platform
- Migration from Power Automate to n8n

## Tech Stack

### Frontend
- **React 18** - UI Framework with Suspense & Lazy Loading
- **TypeScript** - Type-safe development
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first styling with custom design tokens
- **Framer Motion** - Animations & page transitions

### Content & Internationalization
- **MDX** - Markdown + JSX for blog posts and project pages
- **i18next** - Multi-language support (German, English, Serbian)
- **react-helmet-async** - SEO meta tags & structured data

### Backend & Services
- **Supabase** - Database & Authentication
- **Google Analytics 4** - Privacy-compliant analytics with cookie consent

### PWA & Performance
- **Workbox** - Service Worker & caching strategies
- **vite-plugin-pwa** - Progressive Web App functionality
- **Code Splitting** - Vendor chunks for React, MDX, i18n, UI libraries

### Testing & Quality
- **Vitest** - Unit testing
- **Testing Library** - React component testing
- **ESLint** - Code linting

## Featured Project: RecroBot

**AI Voice Interview Platform** - [recrobot.site](https://recrobot.site)

Production Voice-AI platform for automated HR interviews built with:
- TypeScript / Next.js 14
- Vapi Voice AI
- WebSocket for real-time communication
- Supabase (PostgreSQL)

**Demo:** Enter "AI-Manager" as position to test

## Features

- **Multi-language support** - DE/EN/SR with automatic language detection
- **Progressive Web App** - Installable, offline-capable
- **SEO optimized** - Structured data (Schema.org), sitemap generation
- **Responsive Design** - Mobile-first approach
- **Cookie Consent** - GDPR-compliant with granular category control
- **Blog System** - MDX-based with frontmatter support
- **Portfolio Gallery** - Dynamic project showcase with filtering
- **Contact Form** - Integrated with backend services

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with Hero, Experience, Skills, Projects, FAQ |
| `/about` | Detailed profile, skills matrix, workflow, journey |
| `/portfolio` | Project gallery with category filters |
| `/portfolio/:slug` | Individual project detail pages |
| `/blog` | Blog post listing |
| `/blog/:slug` | Individual blog posts |
| `/contact` | Contact form & info |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |
| `/imprint` | Legal imprint |

## Project Structure

```
src/
├── components/      # Reusable UI components
├── hooks/           # Custom React hooks
├── i18n/            # Translations (de, en, sr)
├── pages/           # Page components
│   ├── home/
│   ├── about/
│   ├── portfolio/
│   │   └── projects/   # MDX project files
│   ├── blog/
│   └── contact/
├── styles/          # Global styles
├── utils/           # Helper functions
├── routes.tsx       # Route definitions
└── App.tsx          # Root component
```

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Run tests
npm test

# Preview production build
npm run preview
```

## Key Technologies Used

**Languages:** TypeScript, Python, MDX

**AI & Automation:** GPT-4 API, Claude API, Vapi Voice AI, n8n, Zapier

**Frontend:** React, Next.js, Tailwind CSS, Framer Motion, Lucide Icons

**Backend:** Supabase (PostgreSQL, Auth), WebSocket

**Build Tools:** Vite, PostCSS, Terser

**Testing:** Vitest, Testing Library, JSDOM

**DevOps:** ESLint, Git, PWA/Service Workers, Vercel, Docker

## Contact

- **Email:** info@damjan-savic.com
- **Phone:** +49 175 695 0979
- **LinkedIn:** [linkedin.com/in/damjan-savic](https://www.linkedin.com/in/damjan-savi%C4%87-720288127/)

---

Built with React + TypeScript + Vite
