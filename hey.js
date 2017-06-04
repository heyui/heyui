module.exports = {
  port: 9008,
  timestamp: true,
  dist: "dist",
  console: true,
  webpack: {
    publicPath: "/",
    output: {
      "./*html": {
        entry: "./src/app",
        commons: ['common']
      }
    },
    commonTrunk: {
      common: ['jquery', 'vue', 'vue-router', "hey-utils", 'heyui', 'hey-log']
    },
    global: {
      '$': "jquery",
      'log': "hey-log"
    },
    globalVars: './static/css/var.less',
    devServer: {
      historyApiFallback: true
    },
    externals: {}
  },
  copy: ["./static/images/**/*", "./src/components/demos/**/*.vue", "./src/components/demos/**/*.txt"]
};