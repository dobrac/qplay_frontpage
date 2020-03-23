export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'QPlay.cz',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    script: [
      {
        src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js',
      },
      { src: '/js/google-analytics.js' },
      {
        src:
          '//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.3/cookieconsent.min.js',
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
        href:
          '//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.3/cookieconsent.min.css',
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
  css: ['assets/scss/main'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/axios', '@nuxtjs/eslint-module'],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
  router: {
    linkActiveClass: 'current',
    linkExactActiveClass: 'current',
    // base: process.env.DEPLOY_ENV === 'GH_PAGES' ? '/qplay_frontpage/' : ''
  },
  axios: {
    progress: false,
  },
}
