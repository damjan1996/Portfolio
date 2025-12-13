// src/i18n/locales/sr/pages/home/skills.ts
export const skills = {
    title: 'Veštine',
    skills: [
        {
            name: 'AI & LLMs',
            level: 90,
            description: 'GPT-4, Claude API, Vapi Voice AI'
        },
        {
            name: 'Automatizacija',
            level: 85,
            description: 'n8n, Zapier, Power Automate'
        },
        {
            name: 'Python',
            level: 90,
            description: 'Backend, API-ji, Automatizacija'
        },
        {
            name: 'TypeScript',
            level: 85,
            description: 'React, Next.js, Node.js'
        },
        {
            name: 'Baze podataka',
            level: 85,
            description: 'PostgreSQL, Supabase, MariaDB'
        },
        {
            name: 'DevOps',
            level: 75,
            description: 'Docker, Vercel, Dedicated Servers'
        }
    ],
    aria: {
        skillLevel: 'Nivo veštine',
        selectSkill: 'Izaberite veštinu'
    }
} as const;
export type SkillsTranslations = typeof skills;
