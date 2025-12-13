// src/i18n/locales/sr/portfolio/projects/recrobot.ts
export const recrobot = {
    meta: {
        slug: 'recrobot',
        title: "Recrobot - AI alat za regrutovanje sa automatizovanim screening intervjuima",
        description: "Razvoj modernog Voice AI alata za regrutovanje za automatizovane razgovore za posao sa transkripcijom u realnom vremenu i GDPR usklađenošću.",
        excerpt: "AI alat za regrutovanje sa Voice AI tehnologijom za automatizovane screening intervjue. Dostupan 24/7, GDPR usklađen, trenutna evaluacija.",
        date: "2024-12",
        category: "AI & Automation",
        client: "Everlast Consulting",
        duration: "1 mesec",
        url: "https://recrobot.de",
        videoUrl: "https://www.tella.tv/video/recrobot-automatisierte-bewerbungsgesprache-8kub",
        repository: "",
        documentation: "",
        published: true,
        featured: true,
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Lucide", "Zustand", "VAPI", "Claude AI", "Deepgram"],
        tags: ["Voice AI", "Regrutovanje", "HR Tech", "Automatizacija", "Transkripcija"]
    },
    content: {
        intro: "Recrobot je moderan, AI alat za regrutovanje koji automatizuje početne screening intervjue sa kandidatima. Aplikacija koristi Voice AI tehnologiju za vođenje prirodnih govornih intervjua i kreiranje transkripata za HR tim.",

        challenge: {
            title: "Izazov",
            description: "Kompanije se suočavaju sa značajnim izazovima prilikom vođenja početnih intervjua sa kandidatima.",
            points: [
                "Vremenski zahtevna koordinacija termina za screening intervjue",
                "HR odeljenja preopterećena rutinskim razgovorima",
                "Dugo čekanje kandidata do prvog odgovora",
                "Nekonzistentan kvalitet intervjua zbog različitih intervjuera",
                "Visok administrativni napor za dokumentaciju"
            ]
        },

        solution: {
            title: "Rešenje",
            description: "AI sistem za glasovne intervjue sa inteligentnim vođenjem razgovora",
            content: "Recrobot omogućava kandidatima da obave screening intervju bilo kada i bilo gde - bez koordinacije termina. Sistem vodi prirodne razgovore, postavlja relevantna pitanja i automatski kreira strukturirane transkripte za HR tim.",
            points: [
                "Dostupnost 24/7 za kandidate širom sveta",
                "Inteligentno vođenje razgovora sa prirodnim prepoznavanjem govora",
                "Trenutna evaluacija za nekoliko minuta umesto nedelja",
                "Najviši standardi zaštite podataka i GDPR usklađenost",
                "Transkripcija uživo sa segmentacijom govornika"
            ]
        },

        technical: {
            title: "Tehnička implementacija",
            description: "Rešenje je zasnovano na modernom tech stacku sa Voice AI integracijom:",
            points: [
                "Next.js i React za frontend",
                "TypeScript za type-safe razvoj",
                "Tailwind CSS i shadcn/ui za moderan UI dizajn",
                "Zustand za state management",
                "VAPI za Voice AI integraciju",
                "Claude Sonnet 4.5 kao AI model za vođenje razgovora",
                "Deepgram za transkripciju u realnom vremenu"
            ],
            code: `// Voice AI konfiguracija
const assistant = {
    name: "Recrobot",
    model: "claude-sonnet-4.5",
    firstMessage: "Zdravo, ja sam Recrobot iz Everlast Consulting-a...",
    maxTokens: 300,
    temperature: 0.5,
    voice: {
        provider: "sonic-3",
        voice: "catia",
        language: "German Conversational Woman"
    },
    transcription: {
        provider: "deepgram"
    },
    speakingPlan: {
        waitSeconds: 1.2,
        onPunctuationSeconds: 0.1,
        onNoPunctuationSeconds: 1.5,
        onNumberSeconds: 0.5
    }
};`
        },

        implementation: {
            title: "Tok korisnika",
            description: "Proces prijave je optimizovan za maksimalnu jednostavnost korišćenja:",
            points: [
                "Kandidat dolazi na landing stranicu",
                "Popunjava formular sa ličnim podacima",
                "Validacija unosa na klijentskoj strani",
                "Kreiranje podataka kandidata i ažuriranje store-a",
                "Početak glasovnog intervjua sa dozvolom za mikrofon",
                "Razgovor u realnom vremenu sa live transkripcijom",
                "Preuzimanje strukturiranog transkripta"
            ]
        },

        results: {
            title: "Rezultati i prednosti",
            description: "Recrobot nudi značajna poboljšanja u procesu regrutovanja:",
            points: [
                "Dramatična ušteda vremena za HR odeljenja",
                "Trenutna dostupnost bez koordinacije termina",
                "Konzistentan kvalitet intervjua kroz standardizovana pitanja",
                "Strukturirani transkripti sa segmentacijom govornika",
                "GDPR usklađena obrada podataka",
                "Skalabilno rešenje za neograničen broj kandidata"
            ]
        },

        conclusion: "Recrobot revolucionira proces regrutovanja kombinovanjem Voice AI sa inteligentnim vođenjem razgovora. Rešenje omogućava kompanijama da rasterete svoje HR odeljenja i ponude kandidatima moderan, fleksibilan proces prijave. Sa transkripcijom u realnom vremenu i GDPR usklađenošću, Recrobot postavlja nove standarde u HR tech industriji."
    }
};

export default recrobot;
