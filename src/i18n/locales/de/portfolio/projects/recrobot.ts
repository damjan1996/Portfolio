// src/i18n/locales/de/portfolio/projects/recrobot.ts
export const recrobot = {
    meta: {
        slug: 'recrobot',
        title: "Recrobot - KI-gestütztes Recruiting Tool für automatisierte Screening-Interviews",
        description: "Entwicklung eines modernen Voice AI Recruiting Tools für automatisierte Bewerbungsgespräche mit Echtzeit-Transkription und DSGVO-Konformität.",
        excerpt: "KI-basiertes Recruiting Tool mit Voice AI Technologie für automatisierte Screening-Interviews. 24/7 verfügbar, DSGVO-konform, sofortige Auswertung.",
        date: "2024-12",
        category: "AI & Automation",
        client: "Everlast Consulting",
        duration: "1 Monat",
        url: "https://recrobot.de",
        videoUrl: "https://www.tella.tv/video/recrobot-automatisierte-bewerbungsgesprache-8kub",
        repository: "",
        documentation: "",
        published: true,
        featured: true,
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Lucide", "Zustand", "VAPI", "Claude AI", "Deepgram"],
        tags: ["Voice AI", "Recruiting", "HR Tech", "Automatisierung", "Transkription"]
    },
    content: {
        intro: "Recrobot ist ein modernes, KI-gestütztes Recruiting Tool, das erste Screening-Interviews mit Bewerbern automatisiert. Die Anwendung nutzt Voice AI Technologie, um natürliche gesprochene Interviews durchzuführen und Transkripte für das HR-Team zu erstellen.",

        challenge: {
            title: "Die Herausforderung",
            description: "Unternehmen stehen vor großen Herausforderungen bei der Durchführung von Erstgesprächen mit Bewerbern.",
            points: [
                "Zeitaufwendige Terminkoordination für Screening-Interviews",
                "HR-Abteilungen sind mit Routinegesprächen überlastet",
                "Lange Wartezeiten für Bewerber bis zur ersten Rückmeldung",
                "Inkonsistente Interviewqualität durch verschiedene Interviewer",
                "Hoher administrativer Aufwand für Dokumentation"
            ]
        },

        solution: {
            title: "Die Lösung",
            description: "Ein KI-basiertes Voice-Interview-System mit intelligenter Gesprächsführung",
            content: "Recrobot ermöglicht Bewerbern, jederzeit und überall ein Screening-Interview durchzuführen - ohne Terminkoordination. Das System führt natürliche Gespräche, stellt relevante Fragen und erstellt automatisch strukturierte Transkripte für das HR-Team.",
            points: [
                "24/7 Verfügbarkeit für Bewerber weltweit",
                "Intelligente Gesprächsführung mit natürlicher Spracherkennung",
                "Sofortige Auswertung in Minuten statt Wochen",
                "Höchste Datenschutzstandards und DSGVO-Konformität",
                "Live-Transkription mit Sprechersegmentierung"
            ]
        },

        technical: {
            title: "Technische Umsetzung",
            description: "Die Lösung basiert auf einem modernen Tech-Stack mit Voice AI Integration:",
            points: [
                "Next.js und React für das Frontend",
                "TypeScript für typsichere Entwicklung",
                "Tailwind CSS und shadcn/ui für modernes UI-Design",
                "Zustand für State Management",
                "VAPI für Voice AI Integration",
                "Claude Sonnet 4.5 als KI-Modell für Gesprächsführung",
                "Deepgram für Echtzeit-Transkription"
            ],
            code: `// Voice AI Konfiguration
const assistant = {
    name: "Recrobot",
    model: "claude-sonnet-4.5",
    firstMessage: "Hallo, ich bin Recrobot von Everlast Consulting...",
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
            title: "Benutzerflow",
            description: "Der Bewerbungsprozess wurde für maximale Benutzerfreundlichkeit optimiert:",
            points: [
                "Bewerber kommt auf die Landingpage",
                "Ausfüllen des Formulars mit persönlichen Daten",
                "Client-seitige Validierung der Eingaben",
                "Erstellung der Bewerberdaten und Store-Aktualisierung",
                "Start des Voice-Interviews mit Mikrofonberechtigung",
                "Echtzeit-Gespräch mit Live-Transkription",
                "Download des strukturierten Transkripts"
            ]
        },

        results: {
            title: "Ergebnisse und Vorteile",
            description: "Recrobot bietet signifikante Verbesserungen im Recruiting-Prozess:",
            points: [
                "Drastische Zeitersparnis für HR-Abteilungen",
                "Sofortige Verfügbarkeit ohne Terminkoordination",
                "Konsistente Interviewqualität durch standardisierte Fragen",
                "Strukturierte Transkripte mit Sprechersegmentierung",
                "DSGVO-konforme Datenverarbeitung",
                "Skalierbare Lösung für beliebig viele Bewerber"
            ]
        },

        conclusion: "Recrobot revolutioniert den Recruiting-Prozess durch die Kombination von Voice AI und intelligenter Gesprächsführung. Die Lösung ermöglicht es Unternehmen, ihre HR-Abteilungen zu entlasten und Bewerbern einen modernen, flexiblen Bewerbungsprozess zu bieten. Mit Echtzeit-Transkription und DSGVO-Konformität setzt Recrobot neue Maßstäbe im Bereich HR-Tech."
    }
};

export default recrobot;
