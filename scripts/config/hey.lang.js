const readDir = require('fs').readdirSync;

const files = readDir('./src/locale/lang');
const entry = {};
files.forEach((file) => {
  const name = file.split('.')[0];
  entry[name] = `./src/locale/lang/${file}`;
});

module.exports = {
  root: 'dist/locale',
  clean: false,
  webpack: {
    umd: {
      entry,
      filename: '[name].js',
      libraryExport: 'default'
    },
    alias: {
      'heyui/src': './src'
    }
  }
};
