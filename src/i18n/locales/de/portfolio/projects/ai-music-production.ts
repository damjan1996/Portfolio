// src/i18n/locales/de/portfolio/projects/ai-music-production.ts
export const aiMusicProduction = {
    meta: {
        slug: 'ai-music-production',
        title: "Suno AI - KI-gestützte Musikproduktion | Von Songtext zum fertigen Track",
        description: "Vollständiger Workflow zur Musikproduktion mit Suno AI: Songtexte schreiben, Instrumentals generieren, Styles mixen und auf Soundcloud veröffentlichen.",
        excerpt: "KI-gestützte Musikproduktion mit Suno AI. Vom handgeschriebenen Songtext zum fertigen Track in 2-3 Stunden - inklusive Cover-Design und Soundcloud-Upload.",
        date: "2024-12",
        category: "AI & Kreativ",
        client: "Persönliches Projekt",
        duration: "Ongoing",
        url: "https://soundcloud.com/desetka",
        videoUrl: "https://www.tella.tv/video/musikproduktion-per-ki-mit-damjan-savic-desetka-1-2mjh",
        repository: "",
        documentation: "",
        published: true,
        featured: true,
        technologies: ["Suno AI", "Soundcloud", "Pinterest", "Photoshop", "KI-Musikproduktion"],
        tags: ["Suno AI", "Musikproduktion", "KI-Musik", "Desetka", "Soundcloud", "Kreativ-KI"]
    },
    content: {
        intro: "Musikproduktion per KI: Ein vollständiger Workflow zur Erstellung professioneller Songs mit Suno AI. Von der Idee über den Songtext bis zum fertigen Track auf Soundcloud - alles in einem strukturierten Prozess.",

        challenge: {
            title: "Die Herausforderung",
            description: "Traditionelle Musikproduktion erfordert umfangreiche Ressourcen und Fähigkeiten.",
            points: [
                "Klassische Musikproduktion benötigt teure Software und Hardware",
                "Instrumentalisten und Produzenten müssen koordiniert werden",
                "Der Produktionsprozess dauert oft Wochen oder Monate",
                "Hohe Einstiegshürden für Künstler ohne musikalische Ausbildung",
                "Kreative Visionen lassen sich schwer schnell umsetzen"
            ]
        },

        solution: {
            title: "Die Lösung",
            description: "Ein strukturierter KI-Workflow für effiziente Musikproduktion",
            content: "Mit Suno AI lässt sich der gesamte Musikproduktionsprozess auf wenige Stunden reduzieren. Der Workflow kombiniert menschliche Kreativität (Songtexte) mit KI-generierter Musik für authentische, professionelle Ergebnisse.",
            points: [
                "Songtexte werden manuell geschrieben - volle kreative Kontrolle",
                "Suno AI generiert Instrumentals basierend auf Style-Prompts",
                "Iteratives Remixing für den perfekten Sound",
                "Cover-Design mit Pinterest-Inspiration und Photoshop",
                "Direkter Upload auf Soundcloud unter dem Alias 'Desetka'"
            ]
        },

        technical: {
            title: "Der Workflow",
            description: "Schritt-für-Schritt Prozess zur KI-Musikproduktion:",
            points: [
                "Songtext schreiben mit klarem Reimschema (z.B. Endungen auf e, a, i)",
                "Melodie im Kopf entwickeln während des Schreibens",
                "Instrumental in Suno AI mit Style-Prompts generieren",
                "Weirdness (35%) und Audio Influence (75%) konfigurieren",
                "Verschiedene Styles mixen (z.B. Synthwave → Luxury Rap)",
                "Favoriten liken für KI-Lerneffekt",
                "Cover auf Pinterest suchen und in Photoshop bearbeiten (1950x1950px)",
                "WAV-Export und Upload auf Soundcloud"
            ],
            code: `// Suno AI Style-Konfiguration
const sunoConfig = {
    name: "205 Matrize Instrumental",
    settings: {
        weirdness: "35%",
        styleInfluence: "75%",
        audioInfluence: "25-35%"  // Niedriger bei Remastered
    },
    styles: [
        "Synthwave",
        "Melodic RIP",
        "Luxury Rap"
    ],
    tips: [
        "Liked Songs beeinflussen zukünftige Generierungen",
        "Bei Artefakten: Audio Influence reduzieren",
        "Styles kombinieren für einzigartigen Sound"
    ]
};`
        },

        implementation: {
            title: "Kreativprozess",
            description: "Die Kunst des Songschreibens mit KI-Unterstützung:",
            points: [
                "Songtexte auf Serbisch verfassen (melodischer Klang)",
                "Klares Reimschema für Hook und Strophen",
                "Melodie mental entwickeln vor der Produktion",
                "Keine Instrumentals nötig für erste Ideen",
                "Später Übersetzung ins Englische möglich",
                "2-3 Stunden für einen kompletten Song",
                "An guten Tagen: 3 Songs pro Stunde möglich"
            ]
        },

        results: {
            title: "Ergebnisse",
            description: "Vorteile der KI-gestützten Musikproduktion:",
            points: [
                "Produktionszeit von Wochen auf Stunden reduziert",
                "Volle kreative Kontrolle über Texte und Richtung",
                "Professionelle Instrumentals ohne Studio",
                "Iteratives Arbeiten bis zum perfekten Sound",
                "Direkter Weg vom Konzept zur Veröffentlichung",
                "Künstleralias 'Desetka' auf Soundcloud etabliert"
            ]
        },

        conclusion: "KI-Musikproduktion mit Suno AI revolutioniert den kreativen Prozess. Die Kombination aus handgeschriebenen Songtexten und KI-generierten Instrumentals ermöglicht es, musikalische Visionen schnell und professionell umzusetzen. Der Mensch bleibt kreativ im Mittelpunkt - die KI ist das Werkzeug zur Realisierung."
    }
};

export default aiMusicProduction;
