module.exports = {
  port: 9008,
  timestamp: true,
  root: "gen",
  webpack: {
    publicPath: "/",
    output: {
      "./*html": {
        entry: "./src/app",
        commons: ['heyui', 'common']
      }
    },
    commonTrunk: {
      common: ['jquery', 'vue', 'vue-router', 'vue-highlightjs', "hey-utils"],
      heyui: ['./heyui/index']
    },
    global: {
    },
    globalVars: './static/css/var.less',
    devServer: {
      historyApiFallback: true
    },
    externals: {}
  },
  copy: ["./static/images/**/*", "./src/components/demos/**/*.vue"]
};
