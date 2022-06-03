import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  meta: {
    title: 'ANMA Podcast',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.8.1/lottie.min.js' },
    ],
  },

  css: [
    '@/assets/css/main.css',
  ],

 /**
  * Auto import components
  * @see https://v3.nuxtjs.org/api/configuration/nuxt.config#components
  */
  components: {
    'dirs': [
      '~/components',
    ],
  },

  /**
   * @see https://v3.nuxtjs.org/api/configuration/nuxt.config#modules
   */
   modules: [
    '@nuxt/content',
    '@vueuse/nuxt',
    'nuxt-windicss',
  ],

  /**
   * @see https://v3.nuxtjs.org/guide/features/runtime-config#exposing-runtime-config
   */
  runtimeConfig: {
    public: {
      env: process.env.ENV || 'local',
      googleMapsApiKey: process.env.GOOGLE_MAP_API_KEY,
    },
  },

  /**
   * @see https://content.nuxtjs.org/get-started
   */
  content: {
    // https://content.nuxtjs.org/api/configuration
  },

  /**
   * WindiCSS configuration
   * @see https://github.com/windicss/nuxt-windicss
   */
   windicss: {
    analyze: false,
  },

})
