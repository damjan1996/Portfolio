// src/i18n/locales/de/pages/home/experience.ts
export const experience = {
    title: 'Berufserfahrung',
    navigation: {
        prev: '←',
        next: '→'
    },
    positions: [
        {
            role: 'Process Automation Specialist',
            company: 'Everlast Consulting GmbH',
            period: '12/2024 - HEUTE',
            highlights: [
                'Entwicklung von KI-Agenten mit n8n und Zapier',
                'Aufbau von Web-Scraping-Lösungen',
                'RecroBot Voice-Interview-Plattform',
                'Migration von Power Automate zu n8n'
            ]
        },
        {
            role: 'Consultant Digital Solutions',
            company: 'Ritter Digital GmbH',
            period: '08/2023 - 11/2024',
            highlights: [
                'Backend-Services auf dedizierten Servern',
                'KI-Integration via Power Automate',
                'RFID/IoT-Lösungen mit Zebra-Hardware'
            ]
        },
        {
            role: 'ERP-Integrationsspezialist & E-Commerce-Entwickler',
            company: 'Joyce & Girls',
            period: '01/2023 - 08/2023',
            highlights: [
                'ApparelMagic & TradeByte Integration',
                'MariaDB Middleware-Entwicklung',
                'Windows Server Administration',
                'Shopify-Optimierung'
            ]
        },
        {
            role: 'RPA Developer & E-Commerce Manager',
            company: 'C&S Marketing',
            period: '08/2022 - 01/2023',
            highlights: [
                'Shopware 6 & JTL Integration',
                'Python Automatisierung',
                'Google Ads Optimierung',
                'CMS Management'
            ]
        },
        {
            role: 'E-Commerce Developer',
            company: 'Brands Club GmbH',
            period: '08/2021 - 07/2022',
            highlights: [
                'Shopify & JTL Integration',
                'Server Administration',
                'Content Production',
                'Marketing Automation'
            ]
        },
        {
            role: 'E-Commerce Developer',
            company: 'Feine Uhren Eupen',
            period: '01/2021 - 08/2021',
            highlights: [
                'Shopware 5 Development',
                'Produktfotografie',
                'Sales im Luxusuhrensegment',
                'E-Commerce Management'
            ]
        },
        {
            role: 'Online Marketing Manager',
            company: 'Ufer8, Ambis, Teatro & Die Halle Tor 2',
            period: '01/2018 - 12/2020',
            highlights: [
                'Social Media Content',
                'Event Marketing',
                'Veranstaltungsorganisation',
                'Marketing Automation'
            ]
        }
    ]
} as const;
export type ExperienceTranslations = typeof experience;
