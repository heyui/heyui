module.exports = {
  root: 'dist',
  clean: false,
  webpack: {
    umd: {
      entry: './src/index.js',
      library: 'HeyUI',
      filename: 'heyui.esm.js',
      libraryExport: 'default'
    },
    externals: {
      vue: 'vue',
      manba: 'manba'
    },
    alias: {
      'heyui/src': './src'
    }
  }
};
