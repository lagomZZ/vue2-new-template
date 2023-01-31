const path = require('path')
function resolve(dir) {
  path.join(__dirname, dir)
}
module.exports = {
  publicPath: './',
  outputDir: 'dist',
  devServer: {
    port: 8002,
    proxy: 'http://elm.cangdu.org',
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
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
