module.exports = {
  root: 'dist',
  clean: false,
  webpack: {
    compress: false,
    umd: {
      entry: './src/index.js',
      library: 'HeyUI',
      filename: 'heyui.uncompressed.js',
      libraryExport: 'default'
    },
    alias: {
      'heyui/src': './src'
    }
  }
};
