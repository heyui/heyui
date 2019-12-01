module.exports = {
  root: 'dist',
  webpack: {
    extractComments: true,
    umd: {
      entry: './src/index.js',
      library: 'HeyUI',
      filename: 'heyui.js',
      libraryExport: 'default'
    },
    externals: {
      vue: 'vue'
    },
    alias: {
      'heyui/src': './src'
    }
  }
};
