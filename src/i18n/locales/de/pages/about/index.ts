import { hero } from './hero';
import { journey } from './journey';
import { schema } from './schema';
import { skillbar } from './skillbar';
import { skillgroup } from './skillgroup';
import { skills } from './skills';
import { workflow } from './workflow';
export const about = {
    seo: {
        title: 'Über Mich - Damjan Savić | Fullstack Entwickler & KI-Spezialist',
        description: 'Erfahren Sie mehr über Damjan Savić - AI & Automation Specialist mit Fokus auf Voice AI, autonome Agenten und Prozessautomatisierung aus Köln.'
    },
    hero,
    journey,
    schema,
    skillbar,
    skillgroup,
    skills,
    workflow
} as const;
// Typen exportieren
export type { HeroTranslations } from './hero';
export type { JourneyTranslations } from './journey';
export type { SchemaTranslations } from './schema';
export type { SkillBarTranslations } from './skillbar';
export type { SkillGroupTranslations } from './skillgroup';
export type { SkillsTranslations } from './skills';
export type { WorkflowTranslations } from './workflow';
