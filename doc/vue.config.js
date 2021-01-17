import webpack from 'webpack';
// vue.config.js
module.exports = {
  publicPath: '/',
  assetsDir: './src/static',
  pages: {
    index: {
      // page 的入口
      entry: 'src/app.js',
      // 模板来源
      template: './index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    module: {
      // page 的入口
      entry: 'src/module/app.js',
      // 模板来源
      template: './module/index.html',
      // 在 dist/index.html 的输出
      filename: 'module.html',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'module']
    },
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        '@': 'src/',
        'heyui/src': '../src',
        'heyuiNative': 'heyui',
        vue: 'vue/dist/vue.js'
      })
    ]
  },
  productionSourceMap: false,
}