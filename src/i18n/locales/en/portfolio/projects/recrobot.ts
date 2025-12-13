// src/i18n/locales/en/portfolio/projects/recrobot.ts
export const recrobot = {
    meta: {
        slug: 'recrobot',
        title: "Recrobot - AI-Powered Recruiting Tool for Automated Screening Interviews",
        description: "Development of a modern Voice AI recruiting tool for automated job interviews with real-time transcription and GDPR compliance.",
        excerpt: "AI-based recruiting tool with Voice AI technology for automated screening interviews. Available 24/7, GDPR compliant, instant evaluation.",
        date: "2024-12",
        category: "AI & Automation",
        client: "Everlast Consulting",
        duration: "1 month",
        url: "https://recrobot.de",
        videoUrl: "https://www.tella.tv/video/recrobot-automatisierte-bewerbungsgesprache-8kub",
        repository: "",
        documentation: "",
        published: true,
        featured: true,
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Lucide", "Zustand", "VAPI", "Claude AI", "Deepgram"],
        tags: ["Voice AI", "Recruiting", "HR Tech", "Automation", "Transcription"]
    },
    content: {
        intro: "Recrobot is a modern, AI-powered recruiting tool that automates initial screening interviews with applicants. The application uses Voice AI technology to conduct natural spoken interviews and create transcripts for the HR team.",

        challenge: {
            title: "The Challenge",
            description: "Companies face significant challenges when conducting initial interviews with applicants.",
            points: [
                "Time-consuming scheduling coordination for screening interviews",
                "HR departments overwhelmed with routine conversations",
                "Long waiting times for applicants until first feedback",
                "Inconsistent interview quality due to different interviewers",
                "High administrative effort for documentation"
            ]
        },

        solution: {
            title: "The Solution",
            description: "An AI-based voice interview system with intelligent conversation management",
            content: "Recrobot enables applicants to conduct a screening interview anytime, anywhere - without scheduling coordination. The system conducts natural conversations, asks relevant questions, and automatically creates structured transcripts for the HR team.",
            points: [
                "24/7 availability for applicants worldwide",
                "Intelligent conversation management with natural speech recognition",
                "Instant evaluation in minutes instead of weeks",
                "Highest data protection standards and GDPR compliance",
                "Live transcription with speaker segmentation"
            ]
        },

        technical: {
            title: "Technical Implementation",
            description: "The solution is based on a modern tech stack with Voice AI integration:",
            points: [
                "Next.js and React for the frontend",
                "TypeScript for type-safe development",
                "Tailwind CSS and shadcn/ui for modern UI design",
                "Zustand for state management",
                "VAPI for Voice AI integration",
                "Claude Sonnet 4.5 as AI model for conversation management",
                "Deepgram for real-time transcription"
            ],
            code: `// Voice AI Configuration
const assistant = {
    name: "Recrobot",
    model: "claude-sonnet-4.5",
    firstMessage: "Hello, I am Recrobot from Everlast Consulting...",
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
            title: "User Flow",
            description: "The application process was optimized for maximum user-friendliness:",
            points: [
                "Applicant arrives at the landing page",
                "Fills out the form with personal data",
                "Client-side validation of inputs",
                "Creation of applicant data and store update",
                "Start of voice interview with microphone permission",
                "Real-time conversation with live transcription",
                "Download of structured transcript"
            ]
        },

        results: {
            title: "Results and Benefits",
            description: "Recrobot offers significant improvements in the recruiting process:",
            points: [
                "Dramatic time savings for HR departments",
                "Instant availability without scheduling coordination",
                "Consistent interview quality through standardized questions",
                "Structured transcripts with speaker segmentation",
                "GDPR-compliant data processing",
                "Scalable solution for any number of applicants"
            ]
        },

        conclusion: "Recrobot revolutionizes the recruiting process by combining Voice AI with intelligent conversation management. The solution enables companies to relieve their HR departments and offer applicants a modern, flexible application process. With real-time transcription and GDPR compliance, Recrobot sets new standards in HR tech."
    }
};

export default recrobot;
