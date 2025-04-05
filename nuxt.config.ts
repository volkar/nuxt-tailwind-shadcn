import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    css: ['~/assets/css/libraries.css', '~/assets/css/app.css'],
    modules: ['shadcn-nuxt', '@nuxt/icon'],
    app: {
        rootId: 'app',
    },
    future: {
        compatibilityVersion: 4,
    },
    shadcn: {
        prefix: '',
        componentDir: './app/components/ui',
    },
    icon: {
        mode: 'css',
        size: '1.2em',
        class: 'icon',
        customCollections: [
            {
                prefix: 'local',
                dir: './app/assets/icons',
            },
        ],
        aliases: {
            logo: 'local-cat',
        },
        clientBundle: {
            scan: true,
            includeCustomCollections: true,
            sizeLimitKb: 256,
        },
    },
    vite: {
        plugins: [
            tailwindcss(),
        ],
    },
    typescript: {
        strict: true,
        typeCheck: 'build',
    },
})
