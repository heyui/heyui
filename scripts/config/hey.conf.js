module.exports = {
  root: 'dist',
  webpack: {
    umd: {
      entry: './src/index.js',
      library: 'HeyUI',
      filename: 'heyui.js',
      libraryTarget: 'default'
    },
    externals: {
      vue: 'vue'
    },
    alias: {
      heyui: './src'
    }
  }
};
