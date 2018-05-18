module.exports = {
  root: "dist",
  clean: false,
  webpack: {
    umd: {
      entry: "./src/index.js",
      library: "HeyUI",
      filename: 'heyui.esm.js'
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
