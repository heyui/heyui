module.exports = {
  root: 'dist',
  clean: false,
  webpack: {
    compress: false,
    umd: {
      entry: './src/index.js',
      library: 'HeyUI',
      filename: 'heyui.uncompressed.js',
      libraryTarget: 'default'
    },
    alias: {
      heyui: './src'
    }
  }
};
