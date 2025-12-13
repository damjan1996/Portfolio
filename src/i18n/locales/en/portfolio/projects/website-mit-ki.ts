// src/i18n/locales/en/portfolio/projects/website-mit-ki.ts
export const websiteMitKi = {
    meta: {
        slug: 'website-mit-ki',
        title: 'Build Your Own Website with AI: From Zero to Finished Site',
        description: 'Step-by-step guide to building a professional website with Claude Code - GDPR compliant, multilingual, with portfolio and blog',
        excerpt: 'How to create a complete website in under an hour - without writing a single line of code yourself.',
        date: '2024-12',
        category: 'AI & Automation',
        client: 'Personal Project',
        duration: '30 Minutes',
        url: '',
        repository: '',
        documentation: '',
        published: true,
        featured: true,
        technologies: ['Claude Code', 'React', 'TypeScript', 'Vercel', 'GitHub', 'Vite'],
        tags: ['AI', 'Website', 'No-Code', 'Tutorial', 'Claude Code', 'Vercel'],
        videoUrl: 'https://www.tella.tv/video/baue-deine-website-noch-heute-mit-ki-8f7v'
    },
    content: {
        intro: 'A professional website without programming knowledge? With AI, this is possible today. This tutorial shows the complete process - from an empty project folder to a finished, hosted website.',

        challenge: {
            title: 'The Challenge',
            description: 'The traditional path to your own website is often complicated and expensive:',
            points: [
                'Website builders like Wix, WordPress or Webflow incur monthly costs',
                'Custom development requires programming skills',
                'Designers and developers are expensive',
                'GDPR compliance and SEO optimization are complex',
                'Multilingual support and responsive design require additional effort'
            ]
        },

        solution: {
            title: 'The Solution',
            description: 'With AI, a complete website can be built in under an hour:',
            content: 'The complete workflow uses Claude Code for autonomous development, GitHub for versioning, and Vercel for free hosting.',
            points: [
                'GDPR-compliant implementation with cookie banner',
                'Multilingual support (German, English, more possible)',
                'Portfolio page with interactive projects',
                'Blog functionality for blog posts',
                'SEO optimization for better Google rankings',
                'Contact form for potential clients'
            ]
        },

        technical: {
            title: 'The Workflow',
            description: 'This is how the process works step by step:',
            points: [
                'Step 1: Create GitHub account and repository',
                'Step 2: Set up Vercel account for free hosting',
                'Step 3: Prepare local project folder with relevant documents',
                'Step 4: Open Claude Code and enter prompt with desired features',
                'Step 5: AI works autonomously and creates the complete website',
                'Step 6: Push project to GitHub and import in Vercel'
            ]
        },

        results: {
            title: 'Benefits of This Solution',
            description: 'AI-powered website development offers several advantages:',
            points: [
                'No programming skills required',
                'Minimal costs: Only AI subscription and optionally domain',
                'Better visibility through SEO optimization',
                'Full control: Code is on GitHub, hosting is free',
                'Quick changes possible via chat instructions',
                'Mobile-optimized, responsive design included'
            ]
        },

        conclusion: 'A complete, professional website can be built today in under an hour - without writing a single line of code yourself. The combination of AI development, free hosting, and versioning makes this solution interesting not only for developers, but for anyone who needs a professional web presence.'
    }
};

export default websiteMitKi;
