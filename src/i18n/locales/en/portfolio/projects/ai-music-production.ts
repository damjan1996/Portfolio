// src/i18n/locales/en/portfolio/projects/ai-music-production.ts
export const aiMusicProduction = {
    meta: {
        slug: 'ai-music-production',
        title: "Suno AI - AI-Powered Music Production | From Lyrics to Finished Track",
        description: "Complete workflow for music production with Suno AI: writing lyrics, generating instrumentals, mixing styles, and publishing on Soundcloud.",
        excerpt: "AI-powered music production with Suno AI. From handwritten lyrics to finished track in 2-3 hours - including cover design and Soundcloud upload.",
        date: "2024-12",
        category: "AI & Creative",
        client: "Personal Project",
        duration: "Ongoing",
        url: "https://soundcloud.com/desetka",
        videoUrl: "https://www.tella.tv/video/musikproduktion-per-ki-mit-damjan-savic-desetka-1-2mjh",
        repository: "",
        documentation: "",
        published: true,
        featured: true,
        technologies: ["Suno AI", "Soundcloud", "Pinterest", "Photoshop", "AI Music Production"],
        tags: ["Suno AI", "Music Production", "AI Music", "Desetka", "Soundcloud", "Creative AI"]
    },
    content: {
        intro: "AI-powered music production: A complete workflow for creating professional songs with Suno AI. From idea to lyrics to finished track on Soundcloud - all in a structured process.",

        challenge: {
            title: "The Challenge",
            description: "Traditional music production requires extensive resources and skills.",
            points: [
                "Classic music production needs expensive software and hardware",
                "Instrumentalists and producers must be coordinated",
                "The production process often takes weeks or months",
                "High barriers to entry for artists without musical training",
                "Creative visions are difficult to realize quickly"
            ]
        },

        solution: {
            title: "The Solution",
            description: "A structured AI workflow for efficient music production",
            content: "With Suno AI, the entire music production process can be reduced to just a few hours. The workflow combines human creativity (lyrics) with AI-generated music for authentic, professional results.",
            points: [
                "Lyrics are written manually - full creative control",
                "Suno AI generates instrumentals based on style prompts",
                "Iterative remixing for the perfect sound",
                "Cover design with Pinterest inspiration and Photoshop",
                "Direct upload to Soundcloud under the alias 'Desetka'"
            ]
        },

        technical: {
            title: "The Workflow",
            description: "Step-by-step process for AI music production:",
            points: [
                "Write lyrics with clear rhyme scheme (e.g., endings on e, a, i)",
                "Develop melody mentally while writing",
                "Generate instrumental in Suno AI with style prompts",
                "Configure Weirdness (35%) and Audio Influence (75%)",
                "Mix different styles (e.g., Synthwave → Luxury Rap)",
                "Like favorites for AI learning effect",
                "Find cover on Pinterest and edit in Photoshop (1950x1950px)",
                "WAV export and upload to Soundcloud"
            ],
            code: `// Suno AI Style Configuration
const sunoConfig = {
    name: "205 Matrix Instrumental",
    settings: {
        weirdness: "35%",
        styleInfluence: "75%",
        audioInfluence: "25-35%"  // Lower for remastered
    },
    styles: [
        "Synthwave",
        "Melodic RIP",
        "Luxury Rap"
    ],
    tips: [
        "Liked songs influence future generations",
        "For artifacts: reduce Audio Influence",
        "Combine styles for unique sound"
    ]
};`
        },

        implementation: {
            title: "Creative Process",
            description: "The art of songwriting with AI support:",
            points: [
                "Write lyrics in Serbian (melodic sound)",
                "Clear rhyme scheme for hook and verses",
                "Mentally develop melody before production",
                "No instrumentals needed for initial ideas",
                "Translation to English possible later",
                "2-3 hours for a complete song",
                "On good days: 3 songs per hour possible"
            ]
        },

        results: {
            title: "Results",
            description: "Benefits of AI-powered music production:",
            points: [
                "Production time reduced from weeks to hours",
                "Full creative control over lyrics and direction",
                "Professional instrumentals without a studio",
                "Iterative work until the perfect sound",
                "Direct path from concept to publication",
                "Artist alias 'Desetka' established on Soundcloud"
            ]
        },

        conclusion: "AI music production with Suno AI revolutionizes the creative process. The combination of handwritten lyrics and AI-generated instrumentals makes it possible to realize musical visions quickly and professionally. The human remains creatively at the center - AI is the tool for realization."
    }
};

export default aiMusicProduction;
