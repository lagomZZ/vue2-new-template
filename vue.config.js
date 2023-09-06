const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

// const cdn = {
//   css: [
//       'https://unpkg.com/element-ui@2.13.2/lib/theme-chalk/index.css'
//   ],
//   js: [
//       'https://cdn.bootcdn.net/ajax/libs/vue/2.6.10/vue.min.js',
//       'https://unpkg.com/element-ui@2.13.2/lib/index.js',

//   ]
// }

module.exports = {
  publicPath: './',
  outputDir: 'dist',
  devServer: {
    port: 8002,
    proxy: 'http://elm.cangdu.org',

    // proxy: {
    //   '/app': {
    //     target: 'http://localhost:3000',
    //     changeOrigin: true,
    //     pathRewrite: { '^/app': '' },
    //   },
    //   '/api/rest/post': {
    //     target: 'http://10.26.105.167:80',
    //     changeOrigin: true,
    //   },
    // },

    open: true,
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
    externals: { 'element-ui': 'ELEMENT', vue: 'Vue' },
  },
  chainWebpack(config) {
    config.module.rule('svg').exclude.add(resolve('src/icons')).end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
      .end()
  },
}
