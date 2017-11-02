module.exports = {
  root: "build",
  webpack: {
    umd: {
      entry: "./src/index.js",
      library: "HeyUI",
      filename: 'heyui.js'
    },
    global: {
      Vue: "vue"
    },
    externals: {
      Vue: "vue",
      'hey-log': "hey-log",
      'hey-utils': "hey-utils",
      manba: "manba"
    }
  }
};
