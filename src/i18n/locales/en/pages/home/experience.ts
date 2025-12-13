// src/i18n/locales/en/pages/home/experience.ts
export const experience = {
    title: 'Professional Experience',
    navigation: {
        prev: '←',
        next: '→'
    },
    positions: [
        {
            role: 'Process Automation Specialist',
            company: 'Everlast Consulting GmbH',
            period: '12/2024 - PRESENT',
            highlights: [
                'Developing AI agents with n8n and Zapier',
                'Building web scraping solutions',
                'RecroBot voice interview platform',
                'Migration from Power Automate to n8n'
            ]
        },
        {
            role: 'Consultant Digital Solutions',
            company: 'Ritter Digital GmbH',
            period: '08/2023 - 11/2024',
            highlights: [
                'Backend services on dedicated servers',
                'AI integration via Power Automate',
                'RFID/IoT solutions with Zebra hardware'
            ]
        },
        {
            role: 'ERP Integration Specialist & E-Commerce Developer',
            company: 'Joyce & Girls',
            period: '01/2023 - 08/2023',
            highlights: [
                'ApparelMagic & TradeByte integration',
                'MariaDB middleware development',
                'Windows Server administration',
                'Shopify optimization'
            ]
        },
        {
            role: 'RPA Developer & E-Commerce Manager',
            company: 'C&S Marketing',
            period: '08/2022 - 01/2023',
            highlights: [
                'Shopware 6 & JTL integration',
                'Python automation',
                'Google Ads optimization',
                'CMS management'
            ]
        },
        {
            role: 'E-Commerce Developer',
            company: 'Brands Club GmbH',
            period: '08/2021 - 07/2022',
            highlights: [
                'Shopify & JTL integration',
                'Server administration',
                'Content production',
                'Marketing automation'
            ]
        },
        {
            role: 'E-Commerce Developer',
            company: 'Feine Uhren Eupen',
            period: '01/2021 - 08/2021',
            highlights: [
                'Shopware 5 development',
                'Product photography',
                'Luxury watch segment sales',
                'E-Commerce management'
            ]
        },
        {
            role: 'Online Marketing Manager',
            company: 'Ufer8, Ambis, Teatro & Die Halle Tor 2',
            period: '01/2018 - 12/2020',
            highlights: [
                'Social media content',
                'Event marketing',
                'Event organization',
                'Marketing automation'
            ]
        }
    ]
} as const;
export type ExperienceTranslations = typeof experience;
