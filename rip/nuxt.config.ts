// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
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
    '@/assets/css/main.css',
  ],
})