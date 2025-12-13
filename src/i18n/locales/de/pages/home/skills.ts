// src/i18n/locales/de/pages/home/skills.ts
export const skills = {
    title: 'Fähigkeiten',
    skills: [
        {
            name: 'AI & LLMs',
            level: 90,
            description: 'GPT-4, Claude API, Vapi Voice AI'
        },
        {
            name: 'Automation',
            level: 85,
            description: 'n8n, Zapier, Power Automate'
        },
        {
            name: 'Python',
            level: 90,
            description: 'Backend, APIs, Automation'
        },
        {
            name: 'TypeScript',
            level: 85,
            description: 'React, Next.js, Node.js'
        },
        {
            name: 'Datenbank',
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
        skillLevel: 'Fähigkeitsniveau',
        selectSkill: 'Fähigkeit auswählen'
    }
} as const;
export type SkillsTranslations = typeof skills;
