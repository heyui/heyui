import { defineConfig } from 'vite';
const path = require('path');

const readDir = require('fs').readdirSync;

const files = readDir('./src/locale/lang');
const entry = {};
files.forEach(file => {
  const name = file.split('.')[0];
  entry[name] = `./src/locale/lang/${file}`;
});

// https://vitejs.dev/config/
const config = defineConfig({
  build: {
    target: 'es2015',
    outDir: path.resolve(__dirname, '../lang'),
    rollupOptions: {
      input: entry,
      context: 'globalThis',
      preserveEntrySignatures: 'strict',
      output: {
        format: 'es',
        exports: 'default',
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
      heyui: path.resolve(__dirname, './src')
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  }
});

export default config;
