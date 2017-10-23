module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'SISU Tech Partners | A premier tech recruiting firm. Building teams that become the forefront of innovation',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Connecting devoted recruits with leading companies to advance the technology industry.'
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico?v2' },
      { rel: 'stylesheet', href: 'https://unpkg.com/flickity@2/dist/flickity.min.css' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#cccccc' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      const urlLoader = config.module.rules.find((rule) => rule.loader === 'url-loader')
      urlLoader.test = /\.(png|jpe?g|gif)$/
      config.module.rules.push({
        test: /\.svg$/,
        loader: 'vue-svg-loader',
        exclude: /(node_modules)/
      })
    },
    vendor: ['rellax', 'flickity']
  },
  css: [
    '@/assets/css/main.css'
  ],
  plugins: [
    { src: '~plugins/ga.js', ssr: false }
  ]
}
