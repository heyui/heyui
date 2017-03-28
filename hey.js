module.exports = {
  port: 9008,
  timestamp: true,
  root: "gen",
  webpack: {
    publicPath: "/",
    output: {
      "./*html": {
        entry: "./src/app",
        commons:['common']
      }
    },
    commonTrunk: {
      common:['jquery','vue','vue-router','vue-highlightjs']
    },
    global: {
      Vue: "vue",
      $: "jquery"
    },
    devServer: {
      historyApiFallback: true
    },
    externals: {}
  },
  copy: ["./static/images/**/*","./src/components/demos/**/*.vue"]
};