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
      './module/index.html': {
        entry: './module/app'
      },
      './index.html': {
        entry: './app'
      }
    },
    global: {
      $: 'jquery',
      log: 'hey-log',
      Utils: 'js/utils'
    },
    alias: {
      js: './js/',
      components: './components/',
      'heyui/src': '../src',
      components_en: './components_en/',
      'heyui/lib': '../lib'
    },
    globalVars: './css/var.less',
    devServer: {
      historyApiFallback: true
    },
    pluginImport: {
      libraryName: 'heyui/lib',
      libraryDirectory: 'components'
    },
    externals: {}
  },
  copy: ['./static/images/**/*', './simple.html', './components/demos/**/*.vue', './components/common/qiniu.vue', './components/demos/**/*.txt', './.well-known/pki-validation/fileauth.txt', 'themes/**/*.css', './components_en/demos/**/*.vue', './components_en/common/qiniu.vue', './components_en/demos/**/*.txt']
};
