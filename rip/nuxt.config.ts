// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-04-17',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'rip',
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/png', href: '/icon.png' },
      ]
    },
  },
  modules: ['@nuxt/content', '@nuxt/eslint', '@nuxt/image', '@unocss/nuxt'],
  css: [
    '@/assets/css/main.scss',
  ],
  ssr: false,
})