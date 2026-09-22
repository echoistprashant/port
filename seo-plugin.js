// Tech stack filename -> human-readable name mapping for JSON-LD
const TECH_STACK_NAMES = {
    'reactlogo.webp': 'React',
    'htmllogo.webp': 'HTML',
    'csslogo.webp': 'CSS',
    'jslogo.webp': 'JavaScript',
    'tailwindlogo.webp': 'Tailwind CSS',
    'firebaselogo.webp': 'Firebase',
    'pythonlogo.webp': 'Python',
    'fastapilogo.webp': 'FastAPI',
    'dockerlogo.webp': 'Docker',
    'gitlogo.webp': 'Git',
    'postgresqllogo.webp': 'PostgreSQL',
    'langchainlogo.webp': 'LangChain',
    'openailogo.webp': 'OpenAI',
    'geminilogo.webp': 'Google Gemini',
};

// Prashant Yadav Master Data
const PRASHANT_GLOBAL = {
    siteTitle: 'Portfolio - Prashant | AI Engineer & Full-Stack Developer',
    siteDescription: 'Interactive 3D developer portfolio by Prashant Yadav. Explore AI engineering projects, LLMs, full-stack applications, and agentic workflows in a hand-drawn 3D space.',
    aboutMe: 'Prashant Yadav is an AI Engineer and developer who builds intelligent, production-ready applications using machine learning and large language models. Founding Member at Femur Studio.',
    githubUrl: 'https://github.com/echoistprashant',
    linkedinUrl: 'https://www.linkedin.com/in/echoistprashant/',
    xUrl: 'https://x.com/ConstPrashant',
    canonicalUrl: 'https://prashantyadav.dev/'
};

const PRASHANT_PROJECTS = [
    {
        title: 'RR Act (Revenue Recovery Engine)',
        seoTitle: 'RR Act – Payment Recovery AI Engine',
        description: 'End-to-end payment recovery engine ingesting failure webhooks, classifying root causes with ML, and executing deterministic recovery policies, reducing involuntary churn by 22%. Features multi-channel remediation via WhatsApp WebSocket and Retell AI voice agents with 370+ tests.',
        seoDescription: 'Autonomous revenue recovery engine using ML classification, Retell AI voice agents, and deterministic workflows to reduce involuntary subscription churn.',
        url: 'https://github.com/echoistprashant/ai-revenue-recovery',
        dateCreated: '2025-11-01',
        techStack: ['fastapilogo.webp', 'pythonlogo.webp', 'dockerlogo.webp', 'gitlogo.webp']
    },
    {
        title: 'Sikhsha AI',
        seoTitle: 'Sikhsha AI – Intelligent Educational Platform',
        description: 'AI-powered education platform transforming curricula into adaptive quizzes, interactive flashcards, and personalized study paths. Built with Next.js, LangChain, and vector search.',
        seoDescription: 'Adaptive AI learning platform delivering curriculum-aligned flashcards, RAG-powered study assistants, and real-time assessments.',
        url: 'https://github.com/echoistprashant',
        dateCreated: '2025-10-15',
        techStack: ['reactlogo.webp', 'tailwindlogo.webp', 'openailogo.webp', 'jslogo.webp']
    },
    {
        title: 'Persona (Trading Bot)',
        seoTitle: 'Persona – Autonomous Prediction Market Agent',
        description: 'Autonomous decentralized trading agent on Gnosis Chain executing binary prediction trades on Presagio through Gnosis Safe smart wallets. Features a 2-stage verification pipeline using Google Gemini LLM & Tavily Web Search API, mitigating AI hallucination by 85%.',
        seoDescription: 'Autonomous trading bot on Gnosis Chain using Gemini LLM and Tavily Web Search verification for hallucination-resistant market predictions.',
        url: 'https://github.com/echoistprashant/trading-bot',
        dateCreated: '2025-12-01',
        techStack: ['pythonlogo.webp', 'gitlogo.webp', 'dockerlogo.webp', 'geminilogo.webp']
    },
    {
        title: 'Text to SQL Engine',
        seoTitle: 'Text to SQL – Clarification & Query Engine',
        description: 'Schema-aware query engine that asks targeted follow-ups on underspecified questions instead of guessing. Inspects real PostgreSQL schemas, resolves multi-table foreign key join paths, and compiles parameterized read-only SELECT queries backed by 230 passing tests.',
        seoDescription: 'Production-ready text-to-SQL compiler with proactive schema ambiguity resolution, preventing erroneous database queries.',
        url: 'https://github.com/echoistprashant/text-to-sql-clarification-engine',
        dateCreated: '2026-01-10',
        techStack: ['pythonlogo.webp', 'postgresqllogo.webp', 'langchainlogo.webp', 'fastapilogo.webp']
    },
    {
        title: 'AI Job Application Agent',
        seoTitle: 'AI Job Agent – Autonomous Candidate Profiler',
        description: 'Autonomous job hunting agent parsing PDF/DOCX resumes into structured LLM candidate profiles, collecting openings from Greenhouse & Lever, and ranking matches with a hybrid AI matcher backed by PostgreSQL and pgvector with Playwright automation.',
        seoDescription: 'Automated career assistant parsing resumes with LLMs and performing semantic vector matching across job boards.',
        url: 'https://github.com/echoistprashant/job',
        dateCreated: '2026-02-01',
        techStack: ['pythonlogo.webp', 'fastapilogo.webp', 'postgresqllogo.webp', 'langchainlogo.webp']
    }
];

const PRASHANT_STUDIO = [
    {
        title: 'Femur Studio: Founding Member',
        seoTitle: 'Femur Studio – Digital Muscle Architecture',
        description: 'Founder-led studio building resilient digital products, AI systems, and high-performance applications from Bilaspur to global clients.',
        seoDescription: 'Founding member at Femur Studio specializing in high-leverage software architectures and AI integrations.',
        url: 'https://femur.studio/',
        platform: 'Studio'
    },
    {
        title: 'AI Engineering & Production Systems',
        seoTitle: 'Production AI Systems & Deterministic Workflows',
        description: 'Architecting LLM agents, deterministic safety boundaries, and high-throughput API services.',
        seoDescription: 'Deep dive into production AI engineering, error recovery, and deterministic LLM execution pipelines.',
        url: 'https://github.com/echoistprashant',
        platform: 'Engineering'
    }
];

const PRASHANT_FAQS = [
    {
        question: 'Who is Prashant Yadav?',
        answer: 'Prashant Yadav is an AI Engineer and Full-Stack Developer specializing in machine learning, LLM agentic systems, FastAPI, Python, React, and modern web architectures. He is a Founding Member at Femur Studio.'
    },
    {
        question: 'What technologies does Prashant Yadav use?',
        answer: 'Prashant works with Python, TypeScript, React, Next.js, FastAPI, PostgreSQL, pgvector, PyTorch, LangChain, Three.js, Docker, and cloud deployments.'
    },
    {
        question: 'How can I contact Prashant Yadav for collaborations or hiring?',
        answer: 'You can reach Prashant via LinkedIn (linkedin.com/in/echoistprashant), GitHub (github.com/echoistprashant), X (@ConstPrashant), or the Contact room in his 3D portfolio.'
    }
];

function buildJsonLd() {
    const person = {
        '@type': 'Person',
        '@id': '#person',
        name: 'Prashant Yadav',
        alternateName: ['echoistprashant', 'ConstPrashant', 'Prashant AI'],
        url: 'https://prashantyadav.dev/',
        jobTitle: 'AI Engineer',
        description: PRASHANT_GLOBAL.aboutMe,
        knowsAbout: ['Python', 'TypeScript', 'React', 'Next.js', 'FastAPI', 'PostgreSQL', 'PyTorch', 'LLMs', 'Agentic AI', 'Docker', 'Machine Learning', 'Three.js'],
        sameAs: [
            PRASHANT_GLOBAL.linkedinUrl,
            PRASHANT_GLOBAL.githubUrl,
            PRASHANT_GLOBAL.xUrl
        ]
    };

    const website = {
        '@type': 'WebSite',
        '@id': '#website',
        url: 'https://prashantyadav.dev/',
        name: PRASHANT_GLOBAL.siteTitle,
        description: PRASHANT_GLOBAL.siteDescription,
        publisher: { '@id': '#person' }
    };

    const profilePage = {
        '@type': 'ProfilePage',
        '@id': '#profilepage',
        url: 'https://prashantyadav.dev/',
        mainEntity: { '@id': '#person' },
        about: { '@id': '#person' }
    };

    const faqPage = {
        '@type': 'FAQPage',
        '@id': '#faq',
        mainEntity: PRASHANT_FAQS.map(item => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer
            }
        }))
    };

    const projectsList = {
        '@type': 'ItemList',
        '@id': '#projectslist',
        name: "Prashant Yadav's Portfolio Projects",
        description: 'Production AI engineering projects, agents, and web applications created by Prashant Yadav.',
        numberOfItems: PRASHANT_PROJECTS.length,
        itemListElement: PRASHANT_PROJECTS.map((p, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            item: {
                '@type': 'SoftwareApplication',
                name: p.seoTitle || p.title,
                description: p.seoDescription || p.description,
                url: p.url,
                applicationCategory: 'AI Application',
                author: { '@id': '#person' }
            }
        }))
    };

    return {
        '@context': 'https://schema.org',
        '@graph': [person, website, profilePage, faqPage, projectsList]
    };
}

function buildLlmsTxt() {
    let content = `# ${PRASHANT_GLOBAL.siteTitle}\n`;
    content += `> ${PRASHANT_GLOBAL.siteDescription}\n\n`;

    content += `## Biography / About Me\n`;
    content += `${PRASHANT_GLOBAL.aboutMe}\n\n`;

    content += `## Core Technologies & Skills\n`;
    content += `- Python, TypeScript, React, Next.js, FastAPI, PostgreSQL, PyTorch, LLMs, Agentic AI, Docker, Machine Learning, WebGL.\n\n`;

    content += `## Selected Portfolio Projects\n`;
    PRASHANT_PROJECTS.forEach(p => {
        const tech = p.techStack ? ` (Tech: ${p.techStack.map(t => TECH_STACK_NAMES[t] || t).join(', ')})` : '';
        content += `- [${p.seoTitle || p.title}](${p.url}): ${p.seoDescription || p.description}${tech}\n`;
    });
    content += `\n`;

    content += `## Studio Content & Engagements\n`;
    PRASHANT_STUDIO.forEach(s => {
        content += `- [${s.seoTitle || s.title} (${s.platform})](${s.url}): ${s.seoDescription || s.description}\n`;
    });
    content += `\n`;

    content += `## Frequently Asked Questions (FAQ)\n`;
    PRASHANT_FAQS.forEach(item => {
        content += `- **${item.question}**\n`;
        content += `  ${item.answer}\n`;
    });

    return content;
}

export function generateSeoHtml() {
    const llmsContent = buildLlmsTxt();
    const jsonLdSchemas = buildJsonLd();
    const jsonLdScript = `\n  <!-- Dynamic Structured Data (JSON-LD) — Prashant Yadav Portfolio -->\n  <script type="application/ld+json">\n${JSON.stringify(jsonLdSchemas, null, 2)}\n  </script>\n`;

    return {
        name: 'prashant-seo-plugin',

        // Serve llms.txt in development mode
        configureServer(server) {
            server.middlewares.use((req, res, next) => {
                if (req.url === '/llms.txt') {
                    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
                    res.end(llmsContent);
                } else {
                    next();
                }
            });
        },

        // Transform index.html at build & dev serve time
        transformIndexHtml(html) {
            const siteTitle = PRASHANT_GLOBAL.siteTitle;
            const siteDescription = PRASHANT_GLOBAL.siteDescription;

            // 1. Force exact <title> tag
            let transformedHtml = html.replace(
                /<title>(.*?)<\/title>/,
                `<title>${siteTitle}</title>`
            );

            // 2. Force exact meta description
            if (transformedHtml.includes('<meta name="description"')) {
                transformedHtml = transformedHtml.replace(
                    /<meta name="description" content="(.*?)"\s*\/?>/,
                    `<meta name="description" content="${siteDescription}" />`
                );
            }

            // 3. Force Open Graph meta tags
            transformedHtml = transformedHtml
                .replace(
                    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i,
                    `<meta property="og:title" content="${siteTitle}" />`
                )
                .replace(
                    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i,
                    `<meta property="og:description" content="${siteDescription}" />`
                );

            // 4. Force Twitter card meta tags
            transformedHtml = transformedHtml
                .replace(
                    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/i,
                    `<meta name="twitter:title" content="${siteTitle}" />`
                )
                .replace(
                    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/i,
                    `<meta name="twitter:description" content="${siteDescription}" />`
                );

            // 5. Inject JSON-LD right before </head>
            transformedHtml = transformedHtml.replace('</head>', `${jsonLdScript}</head>`);

            // 6. Build semantic HTML section for crawlers
            let seoHtml = `\n<div id="seo-content" class="sr-only-seo">\n`;
            seoHtml += `  <header>\n    <h1>${siteTitle}</h1>\n    <p>${siteDescription}</p>\n  </header>\n`;
            seoHtml += `  <section id="about">\n    <h2>About Prashant Yadav</h2>\n    <p>${PRASHANT_GLOBAL.aboutMe}</p>\n    <a href="${PRASHANT_GLOBAL.githubUrl}">GitHub</a>\n    <a href="${PRASHANT_GLOBAL.linkedinUrl}">LinkedIn</a>\n  </section>\n`;
            seoHtml += `  <section id="projects">\n    <h2>Featured AI Projects</h2>\n    <ul>\n`;
            PRASHANT_PROJECTS.forEach(p => {
                seoHtml += `      <li>\n        <h3>${p.seoTitle}</h3>\n        <p>${p.seoDescription}</p>\n        <a href="${p.url}">View Project on GitHub</a>\n      </li>\n`;
            });
            seoHtml += `    </ul>\n  </section>\n</div>\n`;

            if (transformedHtml.includes('id="seo-content"')) {
                transformedHtml = transformedHtml.replace(
                    /<div id="seo-content" class="sr-only-seo">[\s\S]*?<\/div>/,
                    seoHtml
                );
            } else {
                transformedHtml = transformedHtml.replace('</body>', `${seoHtml}</body>`);
            }

            return transformedHtml;
        },

        // Emit llms.txt to dist bundle
        generateBundle() {
            this.emitFile({
                type: 'asset',
                fileName: 'llms.txt',
                source: llmsContent
            });
        }
    };
}
