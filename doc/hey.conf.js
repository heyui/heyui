module.exports = {
  port: 9008,
  timestamp: true,
  dist: 'dist',
  console: true,
  webpack: {
    // compress: false,
    console: true,
    publicPath: '/',
    output: {
      './index.html': {
        entry: './app',
        commons: ['common']
      }
    },
    commonTrunk: {
      common: ['babel-polyfill', 'jquery', 'vue', 'vue-router', 'hey-utils', 'hey-log']
    },
    global: {
      $: 'jquery',
      log: 'hey-log',
      Utils: 'js/utils'
    },
    alias: {
      js: './js/',
      components: './components/',
      components_en: './components_en/'
    },
    globalVars: './css/var.less',
    devServer: {
      historyApiFallback: true
    },
    externals: {}
  },
  copy: ['./static/images/**/*', './simple.html', './components/demos/**/*.vue', './components/common/qiniu.vue', './components/demos/**/*.txt', './.well-known/pki-validation/fileauth.txt', 'themes/**/*.css', './components_en/demos/**/*.vue', './components_en/common/qiniu.vue', './components_en/demos/**/*.txt']
};
