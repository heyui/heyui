import { defineConfig } from 'vite';
const fs = require('fs');
const path = require('path');
import vue from '@vitejs/plugin-vue';

let entry = {};

let externals = {
  manba: 'manba',
  vue: 'vue'
};

function recursionDir(filePath, entryPath, oldAlias, NewAlias) {
  let files = fs.readdirSync(path.resolve(filePath));
  files.forEach(filename => {
    const name = filename.split('.')[0];
    let fullPath = path.join(filePath, filename);
    let namePath = `${entryPath}${entryPath ? '/' : ''}${name}`;
    const stats = fs.statSync(fullPath);

    let isFile = stats.isFile(); // 是文件
    let isDir = stats.isDirectory(); // 是文件夹
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
      recursionDir(fullPath, namePath, nowOldAlias, nowNewAlias); // 递归，如果是文件夹，就继续遍历该文件夹下面的文件
    }
  });
}

recursionDir('./src', '', 'heyui', 'heyui/lib');

// https://vitejs.dev/config/
const config = defineConfig({
  build: {
    target: 'es2015',
    outDir: path.resolve(__dirname, '../lib'),
    rollupOptions: {
      input: entry,
      context: 'globalThis',
      preserveEntrySignatures: 'strict',
      external: ['vue', 'manba'],
      output: {
        format: 'es',
        exports: 'auto',
        sourcemap: false,
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
        namespaceToStringTag: true,
        inlineDynamicImports: false,
        manualChunks: undefined
      }
    }
  },
  resolve: {
    alias: {
      heyui: path.resolve(__dirname, '../src')
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  plugins: [vue()]
});

export default config;
