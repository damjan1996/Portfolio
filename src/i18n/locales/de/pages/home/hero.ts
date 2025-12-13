// src/i18n/locales/de/pages/home/hero.ts
export const hero = {
    title: 'AI & AUTOMATION SPECIALIST',
    name: 'DAMJAN SAVIĆ',
    subtitle: 'KI-AGENTEN | VOICE AI | PROZESSAUTOMATISIERUNG',
    description: 'Entwicklung von KI-Agenten und Automatisierungslösungen. Von Voice-AI-Plattformen bis zu autonomen Web-Agenten.',
    currentRole: 'Aktuell @ Everlast Consulting GmbH',
    cta: 'KONTAKT AUFNEHMEN',
    image: {
        alt: 'Damjan Savić - AI & Automation Specialist | KI-Agenten, Voice AI & Prozessautomatisierung'
    },
    social: {
        getInTouch: 'Kontaktieren Sie Damjan Savić',
        linkedin: {
            title: 'LinkedIn Profil von Damjan Savić besuchen'
        },
        github: {
            title: 'GitHub Profil von Damjan Savić besuchen'
        },
        email: {
            title: 'E-Mail an Damjan Savić senden'
        }
    },
    navigation: {
        experience: 'ERFAHRUNG',
        skills: 'FÄHIGKEITEN',
        projects: 'PROJEKTE',
        about: 'ÜBER MICH'
    }
} as const;

export type HeroTranslations = typeof hero;