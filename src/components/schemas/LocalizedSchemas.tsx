import React from 'react';
import { useTranslation } from 'react-i18next';

export function LocalizedPersonSchema() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://damjan-savic.com/#person",
    "name": currentLanguage === 'sr' ? "Дамјан Савић" : "Damjan Savić",
    "alternateName": currentLanguage === 'sr' ? ["Damjan Savić", "Damjan Savic"] : "Damjan Savic",
    "jobTitle": currentLanguage === 'de' ?
      ["AI & Automation Specialist", "Process Automation Specialist", "Fullstack Entwickler"] :
      currentLanguage === 'sr' ?
      ["AI & Automation Specialist", "Specijalist za automatizaciju procesa", "Fullstack Developer"] :
      ["AI & Automation Specialist", "Process Automation Specialist", "Fullstack Developer"],
    "description": currentLanguage === 'de' ?
      "Damjan Savić ist AI & Automation Specialist. Spezialisiert auf KI-Agenten, Voice AI mit Vapi, Prozessautomatisierung mit n8n und Zapier. Entwickelt produktive Automatisierungslösungen und Voice-AI-Plattformen." :
      currentLanguage === 'sr' ?
      "Дамјан Савић је AI & Automation Specialist. Специјализован за AI агенте, Voice AI са Vapi, аутоматизацију процеса са n8n и Zapier. Развија продуктивна решења за аутоматизацију и Voice AI платформе." :
      "Damjan Savić is an AI & Automation Specialist. Specialized in AI agents, Voice AI with Vapi, process automation with n8n and Zapier. Building production automation solutions and Voice AI platforms.",
    "url": "https://damjan-savic.com",
    "image": [
      {
        "@type": "ImageObject",
        "url": "https://damjan-savic.com/portrait.jpg",
        "caption": currentLanguage === 'sr' ? "Дамјан Савић портрет" : "Damjan Savić Portrait"
      },
      {
        "@type": "ImageObject", 
        "url": "https://damjan-savic.com/logo.png",
        "caption": currentLanguage === 'sr' ? "Дамјан Савић лого" : "Damjan Savić Logo"
      }
    ],
    "logo": "https://damjan-savic.com/logo.png",
    "email": "info@damjan-savic.com",
    "telephone": "+49-XXX-XXXXXXX",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "info@damjan-savic.com",
      "contactType": currentLanguage === 'de' ? "Geschäftsanfragen" : 
                      currentLanguage === 'sr' ? "Пословни упити" : 
                      "Business Inquiries",
      "availableLanguage": ["de", "en", "sr"],
      "areaServed": ["DE", "EU"],
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    },
    "sameAs": [
      "https://github.com/damjansavic",
      "https://linkedin.com/in/damjansavic",
      "https://twitter.com/damjansavic",
      "https://stackoverflow.com/users/damjansavic"
    ],
    "knowsAbout": currentLanguage === 'de' ? [
      "KI-Agenten Entwicklung",
      "Voice AI (Vapi)",
      "Prozessautomatisierung (n8n, Zapier)",
      "GPT-4 & Claude API Integration",
      "Python Entwicklung",
      "TypeScript & React",
      "Next.js",
      "Web Scraping",
      "WebSocket & Echtzeit-Anwendungen",
      "Supabase & PostgreSQL",
      "Backend Entwicklung",
      "Frontend Entwicklung",
      "Full Stack Entwicklung",
      "Docker",
      "Vercel Deployment"
    ] : currentLanguage === 'sr' ? [
      "Развој AI агената",
      "Voice AI (Vapi)",
      "Аутоматизација процеса (n8n, Zapier)",
      "GPT-4 & Claude API интеграција",
      "Python развој",
      "TypeScript & React",
      "Next.js",
      "Web Scraping",
      "WebSocket & real-time апликације",
      "Supabase & PostgreSQL",
      "Backend развој",
      "Frontend развој",
      "Full Stack развој",
      "Docker",
      "Vercel Deployment"
    ] : [
      "AI Agents Development",
      "Voice AI (Vapi)",
      "Process Automation (n8n, Zapier)",
      "GPT-4 & Claude API Integration",
      "Python Development",
      "TypeScript & React",
      "Next.js",
      "Web Scraping",
      "WebSocket & Real-time Applications",
      "Supabase & PostgreSQL",
      "Backend Development",
      "Frontend Development",
      "Full Stack Development",
      "Docker",
      "Vercel Deployment"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": currentLanguage === 'sr' ? "Келн" : currentLanguage === 'de' ? "Köln" : "Cologne",
      "addressRegion": currentLanguage === 'sr' ? "Северна Рајна-Вестфалија" : currentLanguage === 'de' ? "Nordrhein-Westfalen" : "North Rhine-Westphalia",
      "addressCountry": currentLanguage === 'sr' ? "Немачка" : currentLanguage === 'de' ? "DE" : "Germany"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Everlast Consulting GmbH",
      "description": currentLanguage === 'de' ?
        "Prozessautomatisierung und KI-Lösungen" :
        currentLanguage === 'sr' ?
        "Аутоматизација процеса и AI решења" :
        "Process Automation and AI Solutions",
      "url": "https://everlast-consulting.de"
    },
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": currentLanguage === 'sr' ? "Технички универзитет" : currentLanguage === 'de' ? "Technische Universität" : "Technical University",
        "url": "https://www.tu.edu"
      }
    ],
    "award": currentLanguage === 'de' ? [
      "Zertifizierter Cloud Architekt",
      "Python Professional Zertifizierung",
      "React Expert Zertifizierung"
    ] : currentLanguage === 'sr' ? [
      "Сертификовани облак архитекта",
      "Python професионална сертификација",
      "React експерт сертификација"
    ] : [
      "Certified Cloud Architect",
      "Python Professional Certification",
      "React Expert Certification"
    ],
    "knowsLanguage": [
      {
        "@type": "Language",
        "name": currentLanguage === 'de' ? "Deutsch" : currentLanguage === 'sr' ? "Немачки" : "German",
        "alternateName": "de"
      },
      {
        "@type": "Language",
        "name": currentLanguage === 'de' ? "Englisch" : currentLanguage === 'sr' ? "Енглески" : "English",
        "alternateName": "en"
      },
      {
        "@type": "Language",
        "name": currentLanguage === 'de' ? "Serbisch" : currentLanguage === 'sr' ? "Српски" : "Serbian",
        "alternateName": "sr"
      },
      {
        "@type": "Language",
        "name": currentLanguage === 'de' ? "Französisch" : currentLanguage === 'sr' ? "Француски" : "French",
        "alternateName": "fr"
      },
      {
        "@type": "Language",
        "name": currentLanguage === 'de' ? "Spanisch" : currentLanguage === 'sr' ? "Шпански" : "Spanish",
        "alternateName": "es"
      },
      {
        "@type": "Language",
        "name": currentLanguage === 'de' ? "Russisch" : currentLanguage === 'sr' ? "Руски" : "Russian",
        "alternateName": "ru"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  );
}

export function LocalizedWebsiteSchema() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://damjan-savic.com/#website",
    "url": "https://damjan-savic.com",
    "name": currentLanguage === 'de' ?
      "Damjan Savić - AI & Automation Specialist" :
      currentLanguage === 'sr' ?
      "Дамјан Савић - AI & Automation Specialist" :
      "Damjan Savić - AI & Automation Specialist",
    "alternateName": ["Damjan Savic Portfolio"],
    "description": currentLanguage === 'de' ?
      "Offizielle Website von Damjan Savić - AI & Automation Specialist. Spezialisiert auf KI-Agenten, Voice AI, Prozessautomatisierung mit n8n und Fullstack Development." :
      currentLanguage === 'sr' ?
      "Званична веб страница Дамјана Савића - AI & Automation Specialist. Специјализован за AI агенте, Voice AI, аутоматизацију процеса са n8n и Fullstack развој." :
      "Official website of Damjan Savić - AI & Automation Specialist. Specialized in AI agents, Voice AI, process automation with n8n, and Fullstack Development.",
    "publisher": {
      "@id": "https://damjan-savic.com/#person"
    },
    "potentialAction": {
      "@type": "ContactAction",
      "target": {
        "@type": "EntryPoint",
        "url": "https://damjan-savic.com/contact"
      },
      "name": currentLanguage === 'de' ? 
        "Damjan Savić kontaktieren" :
        currentLanguage === 'sr' ?
        "Контактирајте Дамјана Савића" :
        "Contact Damjan Savić"
    },
    "keywords": currentLanguage === 'de' ?
      "Damjan Savić, AI Automation Specialist, KI-Agenten, Voice AI, n8n, Prozessautomatisierung, TypeScript, Python, Next.js" :
      currentLanguage === 'sr' ?
      "Дамјан Савић, AI Automation Specialist, AI агенти, Voice AI, n8n, аутоматизација процеса, TypeScript, Python, Next.js" :
      "Damjan Savić, AI Automation Specialist, AI Agents, Voice AI, n8n, Process Automation, TypeScript, Python, Next.js",
    "dateCreated": "2020-01-01",
    "dateModified": "2025-01-15",
    "creator": {
      "@id": "https://damjan-savic.com/#person"
    },
    "copyrightHolder": {
      "@id": "https://damjan-savic.com/#person"
    },
    "copyrightYear": "2025",
    "logo": {
      "@type": "ImageObject",
      "url": "https://damjan-savic.com/logo.png",
      "width": "1000",
      "height": "1000",
      "caption": currentLanguage === 'sr' ? "Дамјан Савић лого" : "Damjan Savić Logo"
    },
    "image": "https://damjan-savic.com/logo.png",
    "inLanguage": currentLanguage === 'de' ? ["de-DE"] : 
                  currentLanguage === 'sr' ? ["sr-RS"] : 
                  ["en-US"]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
    />
  );
}