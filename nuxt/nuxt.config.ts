export default defineNuxtConfig({
  app: {
    head: {
      title: 'rip',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/icon.png' }
      ],
    },
  },
  modules: [
  ],
  css: [
    '~/assets/css/main.scss',
  ],
  ssr: false,
})