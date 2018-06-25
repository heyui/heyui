module.exports = {
  root: "dist",
  clean: false,
  webpack: {
    umd: {
      entry: "./src/index.js",
      library: "HeyUI",
      filename: 'heyui.esm.js'
    },
    externals: {
      vue: "vue",
      'hey-log': "hey-log",
      'hey-utils': "hey-utils",
      manba: "manba"
    }
  }
};
