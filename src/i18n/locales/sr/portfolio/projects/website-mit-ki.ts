// src/i18n/locales/sr/portfolio/projects/website-mit-ki.ts
export const websiteMitKi = {
    meta: {
        slug: 'website-mit-ki',
        title: 'Napravi svoj sajt uz pomoć VI: Od nule do gotove stranice',
        description: 'Korak-po-korak vodič za izgradnju profesionalnog sajta sa Claude Code - usklađen sa GDPR-om, višejezičan, sa portfoliom i blogom',
        excerpt: 'Kako da napraviš kompletan sajt za manje od sat vremena - bez pisanja ijedne linije koda.',
        date: '2024-12',
        category: 'VI & Automatizacija',
        client: 'Lični projekat',
        duration: '30 Minuta',
        url: '',
        repository: '',
        documentation: '',
        published: true,
        featured: true,
        technologies: ['Claude Code', 'React', 'TypeScript', 'Vercel', 'GitHub', 'Vite'],
        tags: ['VI', 'Website', 'No-Code', 'Tutorial', 'Claude Code', 'Vercel'],
        videoUrl: 'https://www.tella.tv/video/baue-deine-website-noch-heute-mit-ki-8f7v'
    },
    content: {
        intro: 'Profesionalni sajt bez znanja programiranja? Sa VI, to je danas moguće. Ovaj tutorijal pokazuje kompletan proces - od praznog projektnog foldera do gotovog, hostovanog sajta.',

        challenge: {
            title: 'Izazov',
            description: 'Tradicionalni put do sopstvenog sajta je često komplikovan i skup:',
            points: [
                'Web bilderi kao Wix, WordPress ili Webflow imaju mesečne troškove',
                'Sopstveni razvoj zahteva znanje programiranja',
                'Dizajneri i programeri su skupi',
                'GDPR usklađenost i SEO optimizacija su kompleksni',
                'Višejezična podrška i responsivan dizajn zahtevaju dodatni napor'
            ]
        },

        solution: {
            title: 'Rešenje',
            description: 'Sa VI, kompletan sajt se može napraviti za manje od sat vremena:',
            content: 'Kompletan radni tok koristi Claude Code za autonomni razvoj, GitHub za verzioniranje i Vercel za besplatan hosting.',
            points: [
                'GDPR-usklađena implementacija sa banerom za kolačiće',
                'Višejezična podrška (nemački, engleski, moguće i više)',
                'Portfolio stranica sa interaktivnim projektima',
                'Blog funkcionalnost za blog postove',
                'SEO optimizacija za bolje Google rangiranje',
                'Kontakt forma za potencijalne klijente'
            ]
        },

        technical: {
            title: 'Radni tok',
            description: 'Ovako proces funkcioniše korak po korak:',
            points: [
                'Korak 1: Kreiraj GitHub nalog i repozitorijum',
                'Korak 2: Podesi Vercel nalog za besplatan hosting',
                'Korak 3: Pripremi lokalni projektni folder sa relevantnim dokumentima',
                'Korak 4: Otvori Claude Code i unesi prompt sa željenim funkcijama',
                'Korak 5: VI autonomno radi i kreira kompletan sajt',
                'Korak 6: Pushuj projekat na GitHub i importuj u Vercel'
            ]
        },

        results: {
            title: 'Prednosti ovog rešenja',
            description: 'VI-vođen razvoj sajta nudi nekoliko prednosti:',
            points: [
                'Nisu potrebne veštine programiranja',
                'Minimalni troškovi: Samo VI pretplata i opciono domen',
                'Bolja vidljivost kroz SEO optimizaciju',
                'Potpuna kontrola: Kod je na GitHub-u, hosting je besplatan',
                'Brze izmene moguće kroz chat instrukcije',
                'Mobilno-optimiziran, responsivan dizajn uključen'
            ]
        },

        conclusion: 'Kompletan, profesionalni sajt može se napraviti danas za manje od sat vremena - bez pisanja ijedne linije koda. Kombinacija VI razvoja, besplatnog hostinga i verzioniranja čini ovo rešenje interesantnim ne samo za programere, već za sve kojima je potrebna profesionalna web prezentacija.'
    }
};

export default websiteMitKi;
