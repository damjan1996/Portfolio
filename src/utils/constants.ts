// src/utils/constants.ts
// Zentrale Konstanten für die gesamte Website

export const CONTACT = {
    email: "info@damjan-savic.com",
    phone: "+49 175 695 0979",
    website: "https://damjan-savic.com",
    linkedin: "https://www.linkedin.com/in/damjan-savi%C4%87-720288127/",
    github: "https://github.com/damjan1996",
    location: {
        city: "Bergisch Gladbach",
        country: "Germany",
        region: "Nordrhein-Westfalen"
    }
} as const;

export const CURRENT_ROLE = {
    company: "Everlast Consulting GmbH",
    position: "Process Automation Specialist",
    since: "2024-12"
} as const;

export const PROFILE = {
    name: "Damjan Savić",
    title: "AI & Automation Specialist",
    subtitle: "Building AI agents and automation solutions",
    languages: ["German", "English", "Serbian", "French", "Spanish", "Russian"]
} as const;
