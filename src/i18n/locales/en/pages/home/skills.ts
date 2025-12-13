// src/i18n/locales/en/pages/home/skills.ts
export const skills = {
    title: 'Skills',
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
            name: 'Database',
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
        skillLevel: 'Skill level',
        selectSkill: 'Select skill'
    }
} as const;
export type SkillsTranslations = typeof skills;
