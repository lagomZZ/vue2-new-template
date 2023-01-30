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
  chainWebpack: (config) => {
    config.module.rules.delete('svg')
    config.resolve.symlinks(true)
    config.resolve.alias
      .set('@', resolve('src'))
      .set('~@', resolve('src/assets'))
      .set('@c', resolve('src/components'))
      .set('static', resolve('src/static'))
    config.module
      .rule('svg-sprite-loader')
      .test(/\.svg$/)
      .include.add(resolve('src/icons')) // 处理svg目录
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
  },
}
