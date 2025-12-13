// src/i18n/locales/sr/pages/home/hero.ts
export const hero = {
    title: 'AI & AUTOMATION SPECIALIST',
    name: 'DAMJAN SAVIĆ',
    subtitle: 'AI AGENTI | VOICE AI | AUTOMATIZACIJA PROCESA',
    description: 'Razvoj AI agenata i rešenja za automatizaciju. Od voice AI platformi do autonomnih web agenata.',
    currentRole: 'Trenutno @ Everlast Consulting GmbH',
    cta: 'KONTAKTIRAJTE ME',
    image: {
        alt: 'Damjan Savić (Дамјан Савић) - AI & Automation Specialist | AI Agenti, Voice AI & Automatizacija'
    },
    social: {
        getInTouch: 'Kontaktirajte me',
        linkedin: {
            title: 'Posetite moj LinkedIn profil'
        },
        github: {
            title: 'Posetite moj GitHub profil'
        },
        email: {
            title: 'Pošaljite mi e-mail'
        }
    },
    navigation: {
        experience: 'ISKUSTVO',
        skills: 'VEŠTINE',
        projects: 'PROJEKTI',
        about: 'O MENI'
    }
} as const;
export type HeroTranslations = typeof hero;
