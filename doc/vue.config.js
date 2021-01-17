const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const resolve = dir => path.resolve(__dirname, dir);

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
    }
    // module: {
    //   // page 的入口
    //   entry: 'src/module/app.js',
    //   // 模板来源
    //   template: './module/index.html',
    //   // 在 dist/index.html 的输出
    //   filename: 'module.html',
    //   // 在这个页面中包含的块，默认情况下会包含
    //   // 提取出来的通用 chunk 和 vendor chunk。
    //   chunks: ['chunk-vendors', 'chunk-common', 'module']
    // },
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        log: 'hey-log',
        Utils: 'src/js/utils',
        G: 'hey-global'
      })
      // new CopyWebpackPlugin([
      //   // { from: 'source', to: 'dest' },'./static/**/*'
      //   // { from: 'source', to: 'dest' },'./simple.html'
      //   // { from: 'source', to: 'dest' },'./components/demos/**/*.vue'
      //   // { from: 'source', to: 'dest' },'./components/common/qiniu.vue'
      //   // { from: 'source', to: 'dest' },'./components/demos/**/*.txt'
      //   // { from: 'source', to: 'dest' },'./.well-known/pki-validation/fileauth.txt'
      //   // { from: 'source', to: 'dest' },'themes/**/*'
      //   // { from: 'source', to: 'dest' },'./components_en/demos/**/*.vue'
      //   // { from: 'source', to: 'dest' },'./components_en/common/qiniu.vue'
      //   // { from: 'source', to: 'dest' },'./components_en/demos/**/*.txt
      // ])
    ],
    resolve: {
      alias: {
        '@': resolve('src'),
        'heyui/src': resolve('../src'),
        heyuiNative: 'heyui',
        vue: 'vue/dist/vue.js'
      }
    }
  },
  productionSourceMap: false
};
