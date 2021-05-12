export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'changsheng',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      // {
      //   rel: 'stylesheet',
      //   href: '/skins/ui/oxide/skin.min.css'
      // },
      // {
      //   rel: 'stylesheet',
      //   href: '/skins/ui/oxide/content.min.css'
      // },
      {
        rel: 'stylesheet',
        href: '/css/swiper.min.css'
      },
      {
        rel: 'stylesheet',
        href: '/css/font-awesome.min.css'
      },
      {
        rel: 'stylesheet',
        href: '/css/mm_base.css'
      },
      {
        rel: 'stylesheet',
        href: '/css/mm_layout.css'
      },
      {
        rel: 'stylesheet',
        href: '/css/mm_component.css'
      },
      {
        rel: 'stylesheet',
        href: '/css/mm_list_component.css'
      },
      {
        rel: 'stylesheet',
        href: '/css/mm_bar_component.css'
      },
      {
        rel: 'stylesheet',
        href: '/css/mm_nav_component.css'
      },
      {
        rel: 'stylesheet',
        href: '/css/mm_common.css'
      },
      {
        rel: 'stylesheet',
        href: '/css/common.css'
      },
      {
        rel: 'stylesheet',
        href: '/css/mm_theme.css'
      }
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/core',
    '@/plugins/mm_sdk',
    '@/plugins/lang',
    '@/plugins/component',
    {
      src: '@/plugins/commom.js',
      ssr: false
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/]
  },
  performance: {
    prefetch: false
  },
  render: {
    resourceHints: false
  }
}
