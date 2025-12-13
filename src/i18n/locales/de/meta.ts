export const meta = {
    site: {
        name: 'Damjan Savić',
        title: 'Damjan Savić | Fullstack-, IoT- & KI-Entwickler',
        subtitle: 'Skalierbare Softwarelösungen mit IoT- und KI-Integration',
        description: 'Als Fullstack-Entwickler aus Köln spezialisiert sich Damjan Savić auf die Entwicklung skalierbarer Softwarelösungen mit IoT- und KI-Integration.',
        keywords: [
            // Name & Branding
            'Damjan Savić',
            'Damjan Savic',
            'CoderConda',

            // Voice AI & Agenten (NEU - Fokus Recrobot)
            'Voice AI Entwickler Deutschland',
            'VAPI Integration Entwickler',
            'Voice AI Recruiting',
            'Sprachassistent Entwicklung',
            'Conversational AI Entwickler',
            'AI Voice Agent Entwicklung',
            'Autonome KI Agenten',
            'n8n Automatisierung Entwickler',
            'AI Workflow Automatisierung',

            // KI & LLM Integration (NEU - Claude/GPT)
            'Claude API Integration',
            'Anthropic Developer',
            'GPT-4 Integration Entwickler',
            'LLM Entwickler Deutschland',
            'KI Automatisierung Köln',
            'AI Agent Development',
            'Prompt Engineering',
            'RAG Entwicklung',
            'OLLAMA KI Integration Entwickler',

            // HR-Tech & Recruiting (NEU - Recrobot)
            'Recruiting Automatisierung',
            'HR Software Entwicklung',
            'Bewerbungsgespräch KI',
            'HR Tech Entwickler',
            'Talent Acquisition Software',

            // Fullstack & Core Skills
            'Senior Fullstack Entwickler Köln',
            'Digital Solutions Consultant Köln',
            'Software Architect Köln',
            'Fullstack Entwickler Köln',
            'Python Entwickler Köln',
            'React Entwickler Köln',
            'Next.js Entwickler Deutschland',
            'TypeScript React Entwickler',
            'Full Stack Developer Köln',

            // Backend & API
            'API Entwicklung Python FastAPI',
            'Microservices Entwickler',
            'Backend Entwickler Köln',
            'Node.js Entwickler Köln',
            'Django Entwickler Deutschland',
            'FastAPI Entwicklung',

            // Frontend
            'Frontend Entwickler Köln',
            'JavaScript Entwickler Köln',
            'React Native Entwickler',
            'Progressive Web App Entwicklung',

            // Automatisierung & Integration
            'Prozessautomatisierung Python Köln',
            'Python Automatisierung Entwickler Köln',
            'ERP System Integration Köln',
            'E-Commerce Integration Spezialist',
            'Workflow Automatisierung',
            'RPA Entwickler Köln',

            // Enterprise & B2B
            'B2B Software Entwicklung',
            'Enterprise Software Developer',
            'Custom Software Entwicklung Köln',
            'Freelance Developer Köln',
            'Software Entwickler Köln',

            // DevOps & Cloud
            'Cloud Developer AWS',
            'DevOps Engineer Köln',
            'Software Architekt Köln',
            'Electron Desktop App Entwicklung'
        ].join(', ')
    },
    company: {
        name: 'CoderConda',
        shortName: 'CoderConda',
        description: 'Damjan Savić und CoderConda - Ihr Partner für Enterprise Software Development, digitale Transformation und innovative IT-Lösungen.',
        address: 'Rotdornallee',
        city: 'Köln',
        postalCode: '50999',
        country: 'Deutschland',
        phone: '+49 175 695 0979',
        email: 'info@damjan-savic.com',
        website: 'www.damjan-savic.com'
    },
    author: {
        name: 'Damjan Savić',
        role: 'Senior Fullstack Developer & Digital Solutions Consultant',
        company: 'CoderConda',
        location: 'Köln, Deutschland',
        email: 'info@damjan-savic.com',
        website: 'https://www.damjan-savic.com',
        languages: [
            { code: 'en', level: 'C2', name: 'Englisch' },
            { code: 'sr', level: 'C2', name: 'Serbisch' },
            { code: 'de', level: 'C2', name: 'Deutsch' },
            { code: 'fr', level: 'B2', name: 'Französisch' },
            { code: 'es', level: 'B2', name: 'Spanisch' },
            { code: 'ru', level: 'A1', name: 'Russisch' }
        ]
    },
    social: {
        linkedin: 'https://www.linkedin.com/in/damjansavic/',
        github: 'https://github.com/damjansavic',
        email: 'info@damjan-savic.com'
    },
    expertise: {
        areas: [
            // Voice AI & Agenten (Priorität)
            'Voice AI Entwicklung mit VAPI',
            'Autonome KI-Agenten',
            'n8n Workflow Automatisierung',
            'Conversational AI & Chatbots',

            // LLM & KI Integration
            'Claude API Integration',
            'GPT-4 & OpenAI Integration',
            'OLLAMA & lokale LLMs',
            'RAG & Prompt Engineering',

            // Fullstack Development
            'Enterprise Software Development',
            'Python Backend Entwicklung',
            'React & Next.js Frontend',
            'TypeScript & JavaScript',

            // Integration & Automatisierung
            'ERP System Integration',
            'E-Commerce Plattformen',
            'Business Process Automation',
            'Microservices & API Development'
        ],
        technologies: [
            // AI & LLM
            'Claude AI',
            'GPT-4',
            'VAPI',
            'OLLAMA',
            'n8n',
            'LangChain',

            // Languages & Frameworks
            'Python',
            'TypeScript',
            'React',
            'Next.js',
            'Node.js',
            'FastAPI',

            // Infrastructure
            'Docker',
            'AWS',
            'PostgreSQL',
            'MongoDB'
        ]
    },
    seo: {
        defaultLanguage: 'de',
        alternateLanguages: ['en', 'sr'],
        robots: 'index, follow',
        googleSiteVerification: '', // Falls benötigt
        og: {
            type: 'website',
            locale: 'de_DE',
            siteName: 'Damjan Savić - Senior Developer & IT Consultant Portfolio',
            images: {
                url: '/images/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Damjan Savić - Senior Fullstack Developer & Digital Solutions Consultant | Enterprise Software, KI-Integration, Cloud Architecture'
            }
        },
        twitter: {
            card: 'summary_large_image',
            site: '@damjansavic',
            creator: '@damjansavic'
        }
    }
} as const;
export type MetaConfig = typeof meta;
