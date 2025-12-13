// src/i18n/locales/en/pages/home/hero.ts
export const hero = {
    title: 'AI & AUTOMATION SPECIALIST',
    name: 'DAMJAN SAVIĆ',
    subtitle: 'AI AGENTS | VOICE AI | PROCESS AUTOMATION',
    description: 'Building AI agents and automation solutions. From voice AI platforms to autonomous web agents.',
    currentRole: 'Currently @ Everlast Consulting GmbH',
    cta: 'GET IN TOUCH',
    image: {
        alt: 'Damjan Savić - AI & Automation Specialist | AI Agents, Voice AI & Process Automation'
    },
    social: {
        getInTouch: 'Get in touch',
        linkedin: {
            title: 'Visit my LinkedIn profile'
        },
        github: {
            title: 'Visit my GitHub profile'
        },
        email: {
            title: 'Send me an email'
        }
    },
    navigation: {
        experience: 'EXPERIENCE',
        skills: 'SKILLS',
        projects: 'PROJECTS',
        about: 'ABOUT'
    }
} as const;
export type HeroTranslations = typeof hero;
