// src/i18n/locales/de/portfolio/projects/automated-ad-creatives.ts
export const automatedAdCreatives = {
    meta: {
        slug: 'automated-ad-creatives',
        title: 'Automatisierte Ad Creatives: KI-gestützte Werbemittel-Erstellung',
        description: 'Entwicklung eines Workflows zur automatisierten Erstellung von Facebook Ad Creatives mit Claude Opus 4.5 - ohne Designsoftware, komplett im Chat',
        excerpt: 'Von der Designvorlage zum fertigen Werbemittel: Wie KI die Ad-Creative-Erstellung revolutioniert.',
        date: '2024-12',
        category: 'KI & Automatisierung',
        client: 'Eigenprojekt',
        duration: '1 Tag',
        url: '',
        repository: '',
        documentation: '',
        published: true,
        featured: true,
        technologies: ['Claude Opus 4.5', 'HTML/CSS', 'PNG Export', 'Prompt Engineering'],
        tags: ['KI', 'Automatisierung', 'Facebook Ads', 'Marketing', 'No-Code'],
        videoUrl: 'https://www.tella.tv/video/automatisierte-ad-creatives-1kyw'
    },
    content: {
        intro: 'Programme wie Illustrator, InDesign, Figma oder Canva können kompliziert sein. Dieses Projekt zeigt, wie sich Facebook Ad Creatives vollständig im KI-Chat erstellen lassen - ohne Designsoftware, ohne Programmierkenntnisse.',

        challenge: {
            title: 'Die Herausforderung',
            description: 'Die Erstellung von Werbemitteln für Facebook-Kampagnen erfordert traditionell:',
            points: [
                'Kenntnisse in Designsoftware (Illustrator, Figma, Canva)',
                'Zeit für Einarbeitung und Umsetzung',
                'Verständnis für Formatvorgaben und Best Practices',
                'Iterationen zwischen Design und Marketing',
                'Budget für Designer oder Design-Tools'
            ]
        },

        solution: {
            title: 'Der Lösungsansatz',
            description: 'Ein KI-gestützter Workflow, der den gesamten Prozess im Chat-Fenster abbildet:',
            content: 'Der komplette Workflow findet im Chat mit Claude Opus 4.5 statt. Alternativ funktionieren auch Gemini oder ChatGPT.',
            points: [
                'Designvorlage als visuelle Referenz für die KI',
                'HTML-Generierung durch natürlichsprachliche Prompts',
                'Automatische Konvertierung zu PNG-Bilddateien',
                'Integration zusätzlicher Bilder per Drag & Drop',
                'Iterationen durch einfache Chat-Anweisungen'
            ]
        },

        technical: {
            title: 'Technische Umsetzung',
            description: 'Der Workflow im Detail:',
            points: [
                'Schritt 1: Designvorlage von Envato Elements als Referenz',
                'Schritt 2: Prompt mit Bild an Claude senden - HTML wird generiert',
                'Schritt 3: HTML zu PNG exportieren lassen',
                'Schritt 4: Zusätzliche Bilder per Drag & Drop integrieren'
            ]
        },

        tools: {
            title: 'Verwendete Tools',
            items: [
                { name: 'Claude Opus 4.5', purpose: 'KI für HTML-Generierung und Bildexport' },
                { name: 'Envato Elements', purpose: 'Designvorlagen als Referenz' },
                { name: 'Unsplash', purpose: 'Kostenlose Bilder für die Creatives' }
            ]
        },

        results: {
            title: 'Vorteile des Ansatzes',
            description: 'Der KI-gestützte Workflow bietet mehrere Vorteile:',
            points: [
                'Keine Design-Skills nötig: Die KI übernimmt die technische Umsetzung',
                'Schnelle Iterationen: Änderungen in Sekunden durch Chat-Anweisungen',
                'Skalierbar: Beliebig viele Varianten für A/B-Tests',
                'Kosteneffizient: Keine teuren Design-Tools erforderlich',
                'Flexibel: Funktioniert auch mit Gemini oder ChatGPT'
            ]
        },

        useCases: {
            title: 'Einsatzszenarien',
            points: [
                'Performance-Marketing: Schnelle Creative-Tests ohne Wartezeit',
                'E-Commerce: Produktwerbung in großem Umfang',
                'Startups: Professionelle Ads ohne Design-Team',
                'Agenturen: Effiziente Kundenarbeit bei Ad-Erstellung'
            ]
        },

        conclusion: 'Der Workflow demonstriert, wie KI die Erstellung von Ad Creatives vereinfacht. Das Ergebnis ist vielleicht noch nicht auf dem Niveau eines professionellen Grafikdesigners - aber für schnelle Tests, erste Entwürfe oder Teams ohne Designressourcen ist dieser Ansatz eine echte Alternative. Die Technologie entwickelt sich rasant weiter.'
    }
};

export default automatedAdCreatives;
