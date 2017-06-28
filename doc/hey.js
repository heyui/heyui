module.exports = {
  port: 9008,
  timestamp: true,
  dist: "dist",
  console: true,
  webpack: {
    publicPath: "/",
    output: {
      "./*html": {
        entry: "./app",
        commons: ['common']
      }
    },
    commonTrunk: {
      common: ['babel-polyfill', 'jquery', 'vue', 'vue-router', "hey-utils", 'heyui', 'hey-log']
    },
    global: {
      '$': "jquery",
      'log': "hey-log"
    },
    globalVars: './css/var.less',
    devServer: {
      historyApiFallback: true
    },
    externals: {}
  },
  copy: ["./static/images/**/*", "./components/demos/**/*.vue", "./components/demos/**/*.txt"]
};