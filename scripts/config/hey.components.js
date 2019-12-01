const fs = require('fs');
const path = require('path');

let entry = {};
let externals = {
  manba: 'manba',
  vue: 'vue'
};

function recursionDir(filePath, entryPath, oldAlias, NewAlias) {
  let files = fs.readdirSync(filePath);
  files.forEach(filename => {
    const name = filename.split('.')[0];
    let fullPath = path.join(filePath, filename);
    let namePath = `${entryPath}${entryPath ? '/' : ''}${name}`;
    const stats = fs.statSync(fullPath);

    let isFile = stats.isFile();// 是文件
    let isDir = stats.isDirectory();// 是文件夹
    const nowOldAlias = `${oldAlias}/${name}`;
    const nowNewAlias = `${NewAlias}/${name}`;
    if (isFile) {
      if (filename == 'index.js') {
        externals[oldAlias] = NewAlias;
        entry[entryPath || 'index'] = fullPath;
      } else if (entryPath.indexOf('components') != 0) {
        externals[nowOldAlias] = nowNewAlias;
        entry[namePath] = fullPath;
      }
    }
    if (isDir) {
      recursionDir(fullPath, namePath, nowOldAlias, nowNewAlias);// 递归，如果是文件夹，就继续遍历该文件夹下面的文件
    }
  });
}

recursionDir('./src', '', 'heyui/src', 'heyui/lib');
// console.log(externals);
// console.log(entry);

module.exports = {
  root: 'lib',
  clean: true,
  webpack: {
    compress: false,
    umd: {
      entry,
      filename: '[name].js',
      libraryExport: 'default',
      libraryTarget: 'amd'
    },
    alias: {
      'heyui/src': './src'
    },
    externals
  }
};
