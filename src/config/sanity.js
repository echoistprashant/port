// Local Master Data Mode: External Sanity CMS disabled
export const isSanityConfigured = false;
export const sanityClient = null;

// Safe mock functions so existing imports don't fail
export const urlFor = () => ({
    width: () => ({
        quality: () => ({
            auto: () => ({
                url: () => null
            })
        })
    })
});

// Funkcja pomocnicza do zamiany domeny Sanity na proxy w Cloudflare
export const getProxyUrl = (imageBuilder) => {
    if (!imageBuilder) return null;
    const url = imageBuilder.url();
    if (url && typeof window !== 'undefined') {
        return url.replace('https://cdn.sanity.io', '/sanity-cdn');
    }
    return url;
};
