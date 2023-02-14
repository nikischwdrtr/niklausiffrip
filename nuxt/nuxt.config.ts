export default defineNuxtConfig({
  app: {
    head: {
      title: 'rip',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/icon.png' }
      ],
      script: [{ src: '/script/lazysizes.js' }],
    },
  },
  modules: [
  ],
  css: [
    '~/assets/css/main.scss',
  ],
  ssr: false,
})