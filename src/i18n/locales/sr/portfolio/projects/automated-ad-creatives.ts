// src/i18n/locales/sr/portfolio/projects/automated-ad-creatives.ts
export const automatedAdCreatives = {
    meta: {
        slug: 'automated-ad-creatives',
        title: 'Automatizovani Ad Kreativci: Kreiranje reklama uz pomoć VI',
        description: 'Razvoj radnog toka za automatizovano kreiranje Facebook Ad kreativaca sa Claude Opus 4.5 - bez dizajn softvera, u potpunosti u chatu',
        excerpt: 'Od dizajn šablona do gotove reklame: Kako VI revolucioniše kreiranje reklamnih kreativaca.',
        date: '2024-12',
        category: 'VI & Automatizacija',
        client: 'Lični projekat',
        duration: '1 Dan',
        url: '',
        repository: '',
        documentation: '',
        published: true,
        featured: true,
        technologies: ['Claude Opus 4.5', 'HTML/CSS', 'PNG Export', 'Prompt Engineering'],
        tags: ['VI', 'Automatizacija', 'Facebook Ads', 'Marketing', 'No-Code'],
        videoUrl: 'https://www.tella.tv/video/automatisierte-ad-creatives-1kyw'
    },
    content: {
        intro: 'Programi kao što su Illustrator, InDesign, Figma ili Canva mogu biti komplikovani. Ovaj projekat pokazuje kako se Facebook Ad kreativci mogu kreirati u potpunosti u VI chatu - bez dizajn softvera, bez znanja programiranja.',

        challenge: {
            title: 'Izazov',
            description: 'Kreiranje reklamnih materijala za Facebook kampanje tradicionalno zahteva:',
            points: [
                'Poznavanje dizajn softvera (Illustrator, Figma, Canva)',
                'Vreme za učenje i implementaciju',
                'Razumevanje zahteva formata i najboljih praksi',
                'Iteracije između dizajna i marketinga',
                'Budžet za dizajnere ili dizajn alate'
            ]
        },

        solution: {
            title: 'Rešenje',
            description: 'VI-vođen radni tok koji obrađuje ceo proces u chat prozoru:',
            content: 'Kompletan radni tok se odvija u chatu sa Claude Opus 4.5. Alternativno, Gemini ili ChatGPT takođe rade.',
            points: [
                'Dizajn šablon kao vizuelna referenca za VI',
                'HTML generisanje kroz promptove na prirodnom jeziku',
                'Automatska konverzija u PNG slike',
                'Integracija dodatnih slika putem drag & drop',
                'Iteracije kroz jednostavne chat instrukcije'
            ]
        },

        technical: {
            title: 'Tehnička implementacija',
            description: 'Radni tok u detaljima:',
            points: [
                'Korak 1: Dizajn šablon sa Envato Elements kao referenca',
                'Korak 2: Pošalji prompt sa slikom Claude-u - HTML se generiše',
                'Korak 3: Eksportuj HTML u PNG',
                'Korak 4: Integriši dodatne slike putem drag & drop'
            ]
        },

        tools: {
            title: 'Korišćeni alati',
            items: [
                { name: 'Claude Opus 4.5', purpose: 'VI za HTML generisanje i eksport slika' },
                { name: 'Envato Elements', purpose: 'Dizajn šabloni kao referenca' },
                { name: 'Unsplash', purpose: 'Besplatne slike za kreativce' }
            ]
        },

        results: {
            title: 'Prednosti ovog pristupa',
            description: 'VI-vođen radni tok nudi nekoliko prednosti:',
            points: [
                'Nisu potrebne dizajnerske veštine: VI preuzima tehničku implementaciju',
                'Brze iteracije: Promene u sekundama kroz chat instrukcije',
                'Skalabilno: Neograničen broj varijanti za A/B testiranje',
                'Isplativo: Nisu potrebni skupi dizajn alati',
                'Fleksibilno: Radi i sa Gemini ili ChatGPT'
            ]
        },

        useCases: {
            title: 'Slučajevi upotrebe',
            points: [
                'Performance Marketing: Brzi testovi kreativaca bez čekanja',
                'E-Commerce: Reklamiranje proizvoda na skali',
                'Startapi: Profesionalni oglasi bez dizajn tima',
                'Agencije: Efikasan rad sa klijentima za kreiranje reklama'
            ]
        },

        conclusion: 'Radni tok demonstrira kako VI pojednostavljuje kreiranje reklamnih kreativaca. Rezultat možda još nije na nivou profesionalnog grafičkog dizajnera - ali za brze testove, početne nacrte ili timove bez dizajn resursa, ovaj pristup je prava alternativa. Tehnologija se brzo razvija.'
    }
};

export default automatedAdCreatives;
