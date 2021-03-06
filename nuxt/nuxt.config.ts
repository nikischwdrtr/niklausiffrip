import { defineNuxtConfig } from 'nuxt'
export default defineNuxtConfig({
    head: {
        title: '♱♱♱',
        htmlAttrs: {
          lang: 'en'
        },
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { hid: 'description', name: 'description', content: '' }
        ],
        link: [
          { rel: 'icon', type: 'image/x-icon', href: '/icon.png' }
        ],
    },
    css: ["@/assets/css/main.scss"],
})
