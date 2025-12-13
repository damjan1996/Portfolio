import SEO from '../../components/SEO';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import { FAQSection } from '../../components/FAQSection';
import { LocalizedWebsiteSchema, LocalizedPersonSchema } from '../../components/schemas/LocalizedSchemas';
import { LocalBusinessSchema } from '../../components/schemas/LocalBusinessSchema';
import { ServiceSchema } from '../../components/schemas/ServiceSchema';

const HomePage = () => {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        '@id': 'https://damjan-savic.com/#profilepage',
        name: 'Damjan Savić - AI & Automation Specialist',
        description:
            'Damjan Savić ist AI & Automation Specialist. Spezialisiert auf KI-Agenten, Voice AI, Prozessautomatisierung mit n8n, und Fullstack Development.',
        mainEntity: {
            '@type': 'Person',
            name: 'Damjan Savić',
            jobTitle: ['AI & Automation Specialist', 'Process Automation Specialist', 'Fullstack Developer'],
            description:
                'Damjan Savić entwickelt KI-Agenten und Automatisierungslösungen. Von Voice-AI-Plattformen bis zu autonomen Web-Agenten.',
            knowsLanguage: [
                'English',
                'German',
                'Serbian',
                'French',
                'Spanish',
                'Russian'
            ],
            hasOccupation: {
                '@type': 'Occupation',
                name: 'AI & Automation Specialist',
                skills: [
                    'AI Agents Development',
                    'Voice AI (Vapi)',
                    'Process Automation (n8n, Zapier)',
                    'Python Development',
                    'TypeScript & React',
                    'Next.js',
                    'GPT-4 & Claude API Integration',
                    'Web Scraping',
                    'Supabase & PostgreSQL',
                    'WebSocket & Real-time Applications'
                ]
            },
            worksFor: {
                '@type': 'Organization',
                name: 'Everlast Consulting GmbH',
                description: 'Process Automation & AI Solutions',
                location: 'Remote'
            },
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Bergisch Gladbach',
                addressRegion: 'Nordrhein-Westfalen',
                addressCountry: 'Deutschland'
            }
        }
    };

    const metaDescription =
        'Damjan Savić - AI & Automation Specialist. Entwicklung von KI-Agenten und Automatisierungslösungen mit n8n, Vapi Voice AI, ' +
        'GPT-4 und Claude API. Von Voice-AI-Plattformen bis zu autonomen Web-Agenten. TypeScript, Python, Next.js.';

    return (
        <>
            <SEO
                title="Damjan Savić - AI & Automation Specialist | KI-Agenten, Voice AI & Prozessautomatisierung"
                description={metaDescription}
                schema={schema}
            />
            <LocalizedWebsiteSchema />
            <LocalizedPersonSchema />
            <LocalBusinessSchema />
            <ServiceSchema />
            <main className="min-h-screen">
                {/* Hero Section */}
                <div id="home">
                    <Hero />
                </div>

                {/* Experience Section */}
                <div id="experience">
                    <Experience />
                </div>

                {/* Skills Section */}
                <div id="skills">
                    <Skills />
                </div>

                {/* Projects Section */}
                <div id="projects">
                    <Projects />
                </div>

                {/* About Section */}
                <div id="about">
                    <About />
                </div>
                
                {/* FAQ Section */}
                <div id="faq" className="py-16">
                    <FAQSection />
                </div>
            </main>
        </>
    );
};

export default HomePage;
