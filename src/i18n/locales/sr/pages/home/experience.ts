// src/i18n/locales/sr/pages/home/experience.ts
export const experience = {
    title: 'Radno iskustvo',
    navigation: {
        prev: '←',
        next: '→'
    },
    positions: [
        {
            role: 'Specijalist za automatizaciju procesa',
            company: 'Everlast Consulting GmbH',
            period: '12/2024 - DANAS',
            highlights: [
                'Razvoj AI agenata sa n8n i Zapier',
                'Izrada web scraping rešenja',
                'RecroBot voice interview platforma',
                'Migracija sa Power Automate na n8n'
            ]
        },
        {
            role: 'Consultant Digital Solutions',
            company: 'Ritter Digital GmbH',
            period: '08/2023 - 11/2024',
            highlights: [
                'Backend servisi na dedikovanim serverima',
                'AI integracija preko Power Automate',
                'RFID/IoT rešenja sa Zebra hardverom'
            ]
        },
        {
            role: 'ERP integracioni specijalista i E-Commerce developer',
            company: 'Joyce & Girls',
            period: '01/2023 - 08/2023',
            highlights: [
                'ApparelMagic i TradeByte integracija',
                'MariaDB middleware razvoj',
                'Windows Server administracija',
                'Shopify optimizacija'
            ]
        },
        {
            role: 'RPA Developer & E-Commerce Manager',
            company: 'C&S Marketing',
            period: '08/2022 - 01/2023',
            highlights: [
                'Shopware 6 i JTL integracija',
                'Python automatizacija',
                'Google Ads optimizacija',
                'CMS menadžment'
            ]
        },
        {
            role: 'E-Commerce Developer',
            company: 'Brands Club GmbH',
            period: '08/2021 - 07/2022',
            highlights: [
                'Shopify i JTL integracija',
                'Server administracija',
                'Produkcija sadržaja',
                'Marketing automatizacija'
            ]
        },
        {
            role: 'E-Commerce Developer',
            company: 'Feine Uhren Eupen',
            period: '01/2021 - 08/2021',
            highlights: [
                'Shopware 5 razvoj',
                'Fotografija proizvoda',
                'Prodaja u segmentu luksuznih satova',
                'E-Commerce menadžment'
            ]
        },
        {
            role: 'Online Marketing Manager',
            company: 'Ufer8, Ambis, Teatro & Die Halle Tor 2',
            period: '01/2018 - 12/2020',
            highlights: [
                'Social Media sadržaj',
                'Event marketing',
                'Organizacija događaja',
                'Marketing automatizacija'
            ]
        }
    ]
} as const;
export type ExperienceTranslations = typeof experience;
