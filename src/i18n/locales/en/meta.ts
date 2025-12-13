export const meta = {
    site: {
        name: 'Damjan Savić',
        title: 'Damjan Savić | Fullstack, IoT & AI Developer',
        subtitle: 'Scalable Software Solutions with IoT and AI Integration',
        description: 'As a fullstack developer from Cologne, Damjan Savić specializes in building scalable software solutions with IoT and AI integration.',
        keywords: [
            // Name & Branding
            'Damjan Savić',
            'Damjan Savic',
            'CoderConda',

            // Voice AI & Agents (NEW - Recrobot Focus)
            'Voice AI Developer',
            'VAPI Integration Developer',
            'Voice AI Recruiting',
            'Voice Assistant Development',
            'Conversational AI Developer',
            'AI Voice Agent Development',
            'Autonomous AI Agents',
            'n8n Automation Developer',
            'AI Workflow Automation',

            // AI & LLM Integration (NEW - Claude/GPT)
            'Claude API Integration',
            'Anthropic Developer',
            'GPT-4 Integration Developer',
            'LLM Developer',
            'AI Automation',
            'AI Agent Development',
            'Prompt Engineering',
            'RAG Development',
            'OLLAMA AI Integration',

            // HR-Tech & Recruiting (NEW - Recrobot)
            'Recruiting Automation',
            'HR Software Development',
            'AI Interview Software',
            'HR Tech Developer',
            'Talent Acquisition Software',

            // Fullstack & Core Skills
            'Senior Fullstack Developer Cologne',
            'Digital Solutions Consultant Germany',
            'Software Architect',
            'Python Developer Germany',
            'React Developer',
            'Next.js Developer',
            'TypeScript Developer',
            'Full Stack Developer Europe',

            // Backend & API
            'Python FastAPI Developer',
            'Microservices Developer',
            'Backend Developer',
            'Node.js Developer',
            'Django Developer',
            'API Development',

            // Frontend
            'Frontend Developer',
            'JavaScript Developer',
            'React Native Developer',
            'Progressive Web App Development',

            // Automation & Integration
            'Process Automation Python',
            'ERP System Integration',
            'E-Commerce Integration',
            'Workflow Automation',
            'RPA Developer',

            // Enterprise & B2B
            'Enterprise Software Developer',
            'B2B Software Development',
            'Custom Software Development',
            'Freelance Developer Europe',
            'Remote Developer',

            // DevOps & Cloud
            'AWS Cloud Architect',
            'DevOps Engineer',
            'Docker Kubernetes Expert',
            'Electron Desktop Applications'
        ].join(', ')
    },
    company: {
        name: 'Damjan Savić',
        shortName: 'Damjan Savić',
        description: 'Damjan Savić and CoderConda - Your partner for Enterprise Software Development, digital transformation, and innovative IT solutions.',
        address: 'Rotdornallee',
        city: 'Köln',
        postalCode: '50999',
        country: 'Germany',
        phone: '+49 175 695 0979',
        email: 'info@damjan-savic.com',
        website: 'www.damjan-savic.com'
    },
    author: {
        name: 'Damjan Savić',
        role: 'Senior Fullstack Developer & Digital Solutions Consultant',
        company: 'CoderConda',
        location: 'Cologne, Germany',
        email: 'info@damjan-savic.com',
        website: 'www.damjan-savic.com',
        languages: [
            { code: 'en', level: 'C2', name: 'English' },
            { code: 'sr', level: 'C2', name: 'Serbian' },
            { code: 'de', level: 'C2', name: 'German' },
            { code: 'fr', level: 'B2', name: 'French' },
            { code: 'es', level: 'B2', name: 'Spanish' },
            { code: 'ru', level: 'A1', name: 'Russian' }
        ]
    },
    social: {
        linkedin: 'https://www.linkedin.com/in/damjansavic/',
        github: 'https://github.com/damjansavic',
        email: 'info@damjan-savic.com'
    },
    expertise: {
        areas: [
            // Voice AI & Agents (Priority)
            'Voice AI Development with VAPI',
            'Autonomous AI Agents',
            'n8n Workflow Automation',
            'Conversational AI & Chatbots',

            // LLM & AI Integration
            'Claude API Integration',
            'GPT-4 & OpenAI Integration',
            'OLLAMA & Local LLMs',
            'RAG & Prompt Engineering',

            // Fullstack Development
            'Enterprise Software Development',
            'Python Backend Development',
            'React & Next.js Frontend',
            'TypeScript & JavaScript',

            // Integration & Automation
            'ERP System Integration',
            'E-Commerce Platforms',
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
        defaultLanguage: 'en',
        alternateLanguages: ['de', 'sr'],
        robots: 'index, follow',
        googleSiteVerification: '', // If needed
        og: {
            type: 'website',
            locale: 'en_US',
            siteName: 'Damjan Savić - Senior Developer & IT Consultant Portfolio',
            images: {
                url: '/images/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Damjan Savić - Senior Fullstack Developer & Digital Solutions Consultant | Enterprise Software, AI Integration, Cloud Architecture'
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
