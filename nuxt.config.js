const pkg = require('./package')

module.exports = {
  mode: 'universal',
  srcDir: 'app',
  router: {
    middleware: [
      'auth-cookie'
    ]
  },
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#409EFF' },

  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/reset.css',
    'element-ui/lib/theme-chalk/index.css',
    '~/assets/common.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    '~/plugins/firebase.js',
    '~/plugins/firebase.auth.js'
  ],



  proxy: {
    '/api/': {target: 'http://localhost:3000', pathRewrite: {'^/api/': '/'}}
  },




  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/auth',
    '@nuxtjs/vuetify',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    proxy: true,
    baseURL: 'https://sample-1-1b377-0083-default-rtdb.firebaseio.com'
    // See https://github.com/nuxt-community/axios-module#options
  },

  proxy: {
    '/api': {
      target: 'http://localhost:3000',
      pathRewrite: {
        '^/api': '/'
      }
    }
  },

  auth: {
    redirect: {
      login: '/',   // 未ログイン時に認証ルートへアクセスした際のリダイレクトURL
      logout: '/',  // ログアウト時のリダイレクトURL
      callback: false,   // Oauth認証等で必要となる コールバックルート
      home: '/posts/_id',         // ログイン後のリダイレクトURL
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: '/', method: 'post', propertyName: 'token' },
          user: { url: 'api/me', method: 'get', propertyName: false},
          logout: false
        },
      }
    }
  },
}