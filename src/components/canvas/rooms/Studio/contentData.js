/**
 * Studio Content Data
 * 
 * This file contains all content items for the Studio monitor tower.
 * Each item will be displayed on a monitor in the tower.
 * 
 * Platforms: 'youtube', 'blog', 'tiktok'
 */

export const PLATFORM_CONFIG = {
    youtube: {
        color: '#FF0000',
        accentColor: '#cc0000',
        icon: '▶',
        label: 'YouTube',
        shape: 'tv', // Wide CRT style
    },
    blog: {
        color: '#4A90D9',
        accentColor: '#2d6cb5',
        icon: '📝',
        label: 'Blog',
        shape: 'monitor', // Thin desktop monitor
    },
    tiktok: {
        color: '#00F2EA',
        accentColor: '#FF0050',
        icon: '🎵',
        label: 'TikTok',
        shape: 'phone', // Vertical phone
    },
    instagram: {
        color: '#E1306C',
        accentColor: '#C13584',
        icon: '📷',
        label: 'Instagram',
        shape: 'phone',
    },
    x: {
        color: '#000000',
        accentColor: '#14171A',
        icon: '𝕏',
        label: 'X (Twitter)',
        shape: 'monitor',
    },
    linkedin: {
        color: '#0077B5',
        accentColor: '#005E93',
        icon: 'in',
        label: 'LinkedIn',
        shape: 'monitor',
    },
    codrops: {
        color: '#0099FF',
        accentColor: '#0077CC',
        icon: '💧',
        label: 'Codrops',
        shape: 'monitor',
    },
};

// Master content data repurposed for Femur Studio & Prashant Yadav
const RAW_CONTENT_DATA = [
    // ============ Retro CRT TVs: How Femur Works ============
    {
        id: 'tv-001',
        platform: 'youtube',
        title: 'Step 1: Call Out the Real Problem',
        description: 'Before writing any code or designing architectures, we cut through the noise to diagnose the actual friction point.',
        thumbnail: null,
        url: 'https://femur.studio/',
        date: '2026-03-01',
        views: 'Femur Studio',
        duration: 'Core Principle',
    },
    {
        id: 'tv-002',
        platform: 'youtube',
        title: 'Step 2: Decide What Needs Building',
        description: 'Determine what will generate the highest leverage. We design minimalist, high-impact systems instead of bloated software.',
        thumbnail: null,
        url: 'https://femur.studio/',
        date: '2026-02-15',
        views: 'Femur Studio',
        duration: 'Core Principle',
    },
    {
        id: 'tv-003',
        platform: 'youtube',
        title: 'Step 3: Build the Whole Machine',
        description: 'From resilient backend pipelines to intuitive frontends and AI agents, we construct the entire end-to-end machine.',
        thumbnail: null,
        url: 'https://femur.studio/',
        date: '2026-02-01',
        views: 'Femur Studio',
        duration: 'Core Principle',
    },
    {
        id: 'tv-004',
        platform: 'youtube',
        title: 'Step 4: Stay Until It Works',
        description: 'We don\'t just hand off prototypes. We monitor, measure, debug, and optimize in production until metrics prove success.',
        thumbnail: null,
        url: 'https://femur.studio/',
        date: '2026-01-20',
        views: 'Femur Studio',
        duration: 'Core Principle',
    },
    {
        id: 'tv-005',
        platform: 'youtube',
        title: 'Digital Muscle Architecture',
        description: 'A founder-led studio that builds digital muscle: fast, precise, built to outlast.',
        thumbnail: null,
        url: 'https://femur.studio/',
        date: '2026-01-10',
        views: 'Femur Studio',
        duration: 'Positioning',
    },
    {
        id: 'tv-006',
        platform: 'youtube',
        title: 'We think, we create, we design',
        description: 'Femur Studio: Crafting resilient digital products from Bilaspur, IN to global clients.',
        thumbnail: null,
        url: 'https://femur.studio/',
        date: '2025-12-15',
        views: 'Femur Studio',
        duration: 'Tagline',
    },
    {
        id: 'tv-007',
        platform: 'youtube',
        title: 'AI Engineering & Production Systems',
        description: 'Deploying deterministic safety loops, LLMs, and real-time agentic workflows.',
        thumbnail: null,
        url: 'https://femur.studio/',
        date: '2025-11-20',
        views: 'Femur Studio',
        duration: 'Overview',
    },
    {
        id: 'tv-008',
        platform: 'youtube',
        title: 'Founder-led Product Development',
        description: 'Working hands-on with visionary teams to turn complex ideas into shipping software.',
        thumbnail: null,
        url: 'https://femur.studio/',
        date: '2025-11-01',
        views: 'Femur Studio',
        duration: 'Methodology',
    },

    // ============ Desktop Monitors: What Femur Builds ============
    {
        id: 'monitor-001',
        platform: 'blog',
        title: 'Web Platforms: Sikhsha.in & Brand Sites',
        description: 'High-performance, brand-led web platforms and modern web applications engineered with Next.js and robust APIs.',
        thumbnail: null,
        url: 'https://sikhsha.in',
        date: '2026-02-10',
        readTime: 'Product',
    },
    {
        id: 'monitor-002',
        platform: 'blog',
        title: 'Mobile Apps: AI-Assisted Experiences',
        description: 'Products like Mindspring and Sikhsha\'s AI-assisted learning app, connecting users directly with real-time intelligence.',
        thumbnail: null,
        url: 'https://femur.studio/',
        date: '2026-01-25',
        readTime: 'Product',
    },
    {
        id: 'monitor-003',
        platform: 'blog',
        title: 'CRM Systems: Workflow & Management',
        description: 'Custom client workflows, school management platforms, and operational CRMs including Sikhsha and Accelify.',
        thumbnail: null,
        url: 'https://femur.studio/',
        date: '2026-01-15',
        readTime: 'System',
    },
    {
        id: 'monitor-004',
        platform: 'blog',
        title: 'Automation: HR, Ops & Outbound',
        description: 'Internal operations, payroll pipelines, automated outbound communication, and webhook background job workers.',
        thumbnail: null,
        url: 'https://femur.studio/',
        date: '2025-12-28',
        readTime: 'Automation',
    },
    {
        id: 'monitor-005',
        platform: 'blog',
        title: 'Predict-Decide-Act AI Loops',
        description: 'Designing closed-loop AI pipelines that keep humans in control while automating intensive repetitive tasks.',
        thumbnail: null,
        url: 'https://github.com/echoistprashant/ai-revenue-recovery',
        date: '2025-12-10',
        readTime: 'Architecture',
    },
    {
        id: 'monitor-006',
        platform: 'blog',
        title: 'Autonomous Trading Bot Engineering',
        description: 'Presona Trader: Double-verification algorithms integrating Gemini AI with web search and Safe smart-contract execution.',
        thumbnail: null,
        url: 'https://github.com/echoistprashant/trading-bot',
        date: '2025-11-20',
        readTime: 'Engineering',
    },
    {
        id: 'monitor-007',
        platform: 'blog',
        title: 'Text-to-SQL Clarification Engine',
        description: 'Eliminating hallucinations in database query generation with schema-aware follow-up clarification dialogues.',
        thumbnail: null,
        url: 'https://github.com/echoistprashant/text-to-sql-clarification-engine',
        date: '2025-11-05',
        readTime: 'Research',
    },
    {
        id: 'monitor-008',
        platform: 'blog',
        title: 'Resume & Job Application Agent',
        description: 'Pairing Playwright automation with pgvector semantic similarity to personalize and track job applications.',
        thumbnail: null,
        url: 'https://github.com/echoistprashant/job',
        date: '2025-10-18',
        readTime: 'Agentic AI',
    },

    // ============ Vertical Phones: Featured Milestones ============
    {
        id: 'phone-001',
        platform: 'tiktok',
        title: 'Founding Member @ Femur Studio 🏛️',
        description: 'Co-founding a studio dedicated to shipping digital muscle: web apps, mobile apps, and autonomous agents.',
        thumbnail: null,
        url: 'https://femur.studio/',
        date: '2026-03-01',
        views: 'Milestone',
        likes: 'Co-founder',
    },
    {
        id: 'phone-002',
        platform: 'tiktok',
        title: 'Live Product: Sikhsha.in 🚀',
        description: 'Unified school ERP and AI doubt resolution platform serving teachers, students, and administrators.',
        thumbnail: null,
        url: 'https://sikhsha.in',
        date: '2026-02-15',
        views: 'Shipped',
        likes: 'Live',
    },
    {
        id: 'phone-003',
        platform: 'tiktok',
        title: '5 Production AI Projects 💡',
        description: 'From payment recovery to natural language SQL, building grounded, verifiable AI systems.',
        thumbnail: null,
        url: 'https://github.com/echoistprashant',
        date: '2026-01-20',
        views: '5 Projects',
        likes: 'Open Source',
    },
    {
        id: 'phone-004',
        platform: 'tiktok',
        title: 'Central University of Chhattisgarh 🎓',
        description: 'Pursuing B.Tech in Computer Science (2023 - 2027) with focus on AI engineering and systems.',
        thumbnail: null,
        url: 'https://github.com/echoistprashant',
        date: '2025-12-01',
        views: '2023-2027',
        likes: 'B.Tech CSE',
    },
    {
        id: 'phone-005',
        platform: 'tiktok',
        title: '300+ Automated Tests Passed ✅',
        description: 'Emphasizing deterministic verification, test coverage, and security in every backend build.',
        thumbnail: null,
        url: 'https://github.com/echoistprashant/ai-revenue-recovery',
        date: '2025-11-15',
        views: 'Quality',
        likes: 'Reliable',
    },
    {
        id: 'phone-006',
        platform: 'tiktok',
        title: 'Webhooks & Background Queues ⚡',
        description: 'Orchestrating event-driven architectures with FastAPI, Celery, and PostgreSQL.',
        thumbnail: null,
        url: 'https://github.com/echoistprashant',
        date: '2025-10-30',
        views: 'FastAPI',
        likes: 'Backend',
    },
    {
        id: 'phone-007',
        platform: 'tiktok',
        title: 'Agentic AI Workflows 🤖',
        description: 'Crafting multi-step autonomous workflows with memory, reflection, and human review gates.',
        thumbnail: null,
        url: 'https://github.com/echoistprashant',
        date: '2025-10-10',
        views: 'AI Agents',
        likes: 'LLMs',
    },
    {
        id: 'phone-008',
        platform: 'tiktok',
        title: 'Open to AI Engineer Roles 💼',
        description: 'Seeking AI Engineer opportunities for 2027 batch. Let\'s build something extraordinary together!',
        thumbnail: null,
        url: 'https://www.linkedin.com/in/echoistprashant/',
        date: '2025-09-25',
        views: 'Open to Work',
        likes: '2027 Batch',
    },
];

const ytTextures = ['/textures/studio/tvfront_filmikprojektdlamultiego.webp', '/textures/studio/tvfront_filmikedytowaniezdjec.webp'];
const ytPaintedTextures = ['/textures/studio/tvfront_filmikprojektdlamultiego_painted.webp', '/textures/studio/tvfront_filmikedytowaniezdjec_painted.webp'];
const blogTextures = ['/textures/studio/monitorfront_postnafbdoublewinner.webp'];
const blogPaintedTextures = ['/textures/studio/monitorfront_postnafbdoublewinner_painted.webp'];
const ttTextures = ['/textures/studio/phonefront_followmeontiktok.webp'];
const ttPaintedTextures = ['/textures/studio/phonefront_followmeontiktok_painted.webp'];

let ytIdx = 0, blogIdx = 0, ttIdx = 0;
let ytPIdx = 0, blogPIdx = 0, ttPIdx = 0;

export const CONTENT_DATA = RAW_CONTENT_DATA.map((item) => {
    return {
        ...item,
        frontTexture: item.frontTexture || (
            item.platform === 'youtube' ? ytTextures[ytIdx++ % ytTextures.length] :
                item.platform === 'blog' ? blogTextures[blogIdx++ % blogTextures.length] :
                    ttTextures[ttIdx++ % ttTextures.length]
        ),
        paintedFrontTexture: item.paintedFrontTexture || (
            item.platform === 'youtube' ? ytPaintedTextures[ytPIdx++ % ytPaintedTextures.length] :
                item.platform === 'blog' ? blogPaintedTextures[blogPIdx++ % blogPaintedTextures.length] :
                    ttPaintedTextures[ttPIdx++ % ttPaintedTextures.length]
        )
    };
});

// Helper to get content by platform
export const getContentByPlatform = (platform) => {
    if (platform === 'all') return CONTENT_DATA;
    return CONTENT_DATA.filter(item => item.platform === platform);
};

// Get latest content (for "On Air" indicator)
export const getLatestContent = () => {
    return [...CONTENT_DATA].sort((a, b) => new Date(b.date) - new Date(a.date))[0];
};
