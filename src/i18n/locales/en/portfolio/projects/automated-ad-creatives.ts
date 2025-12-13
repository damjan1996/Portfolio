// src/i18n/locales/en/portfolio/projects/automated-ad-creatives.ts
export const automatedAdCreatives = {
    meta: {
        slug: 'automated-ad-creatives',
        title: 'Automated Ad Creatives: AI-Powered Ad Creation',
        description: 'Development of a workflow for automated creation of Facebook Ad Creatives with Claude Opus 4.5 - without design software, entirely in chat',
        excerpt: 'From design template to finished ad: How AI revolutionizes ad creative creation.',
        date: '2024-12',
        category: 'AI & Automation',
        client: 'Personal Project',
        duration: '1 Day',
        url: '',
        repository: '',
        documentation: '',
        published: true,
        featured: true,
        technologies: ['Claude Opus 4.5', 'HTML/CSS', 'PNG Export', 'Prompt Engineering'],
        tags: ['AI', 'Automation', 'Facebook Ads', 'Marketing', 'No-Code'],
        videoUrl: 'https://www.tella.tv/video/automatisierte-ad-creatives-1kyw'
    },
    content: {
        intro: 'Programs like Illustrator, InDesign, Figma, or Canva can be complicated. This project shows how Facebook Ad Creatives can be created entirely in an AI chat - without design software, without programming knowledge.',

        challenge: {
            title: 'The Challenge',
            description: 'Creating ad assets for Facebook campaigns traditionally requires:',
            points: [
                'Knowledge of design software (Illustrator, Figma, Canva)',
                'Time for learning and implementation',
                'Understanding of format requirements and best practices',
                'Iterations between design and marketing',
                'Budget for designers or design tools'
            ]
        },

        solution: {
            title: 'The Solution',
            description: 'An AI-powered workflow that handles the entire process in a chat window:',
            content: 'The complete workflow takes place in chat with Claude Opus 4.5. Alternatively, Gemini or ChatGPT also work.',
            points: [
                'Design template as visual reference for the AI',
                'HTML generation through natural language prompts',
                'Automatic conversion to PNG image files',
                'Integration of additional images via drag & drop',
                'Iterations through simple chat instructions'
            ]
        },

        technical: {
            title: 'Technical Implementation',
            description: 'The workflow in detail:',
            points: [
                'Step 1: Design template from Envato Elements as reference',
                'Step 2: Send prompt with image to Claude - HTML is generated',
                'Step 3: Export HTML to PNG',
                'Step 4: Integrate additional images via drag & drop'
            ]
        },

        tools: {
            title: 'Tools Used',
            items: [
                { name: 'Claude Opus 4.5', purpose: 'AI for HTML generation and image export' },
                { name: 'Envato Elements', purpose: 'Design templates as reference' },
                { name: 'Unsplash', purpose: 'Free images for creatives' }
            ]
        },

        results: {
            title: 'Benefits of This Approach',
            description: 'The AI-powered workflow offers several advantages:',
            points: [
                'No design skills needed: AI handles the technical implementation',
                'Fast iterations: Changes in seconds through chat instructions',
                'Scalable: Any number of variants for A/B testing',
                'Cost-effective: No expensive design tools required',
                'Flexible: Also works with Gemini or ChatGPT'
            ]
        },

        useCases: {
            title: 'Use Cases',
            points: [
                'Performance Marketing: Quick creative tests without waiting',
                'E-Commerce: Product advertising at scale',
                'Startups: Professional ads without a design team',
                'Agencies: Efficient client work for ad creation'
            ]
        },

        conclusion: 'The workflow demonstrates how AI simplifies the creation of ad creatives. The result may not yet be at the level of a professional graphic designer - but for quick tests, initial drafts, or teams without design resources, this approach is a real alternative. The technology is evolving rapidly.'
    }
};

export default automatedAdCreatives;
