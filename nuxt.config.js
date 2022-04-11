import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  mode: 'universal',
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0', // default: localhost
  },
  /*
   ** Headers of the page
   */
  meta: {
    title: 'QPlay.cz',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'description',
        content: process.env.npm_package_description || '',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    script: [
      {
        src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js',
      },
      { src: '/js/google-analytics.js' },
      {
        src: '//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.3/cookieconsent.min.js',
      },
      { src: '/js/cookies.js' },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
      {
        rel: 'stylesheet',
        href: '//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.3/cookieconsent.min.css',
      },
      {
        rel: 'stylesheet',
        href: '/css/font-awesome.min.css',
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/assets/scss/main'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/eslint-module'],
  router: {
    linkActiveClass: 'current',
    linkExactActiveClass: 'current',
    // base: process.env.DEPLOY_ENV === 'GH_PAGES' ? '/qplay_frontpage/' : ''
  },
})
