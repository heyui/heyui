import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
const path = require('path');

// https://vitejs.dev/config/
const config = defineConfig({
  plugins: [vue()],
  target: 'es2015',
  build: {
    outDir: path.resolve(__dirname, './dist'),
    lib: {
      entry: path.resolve(__dirname, './src/index.js'),
      name: 'HeyUI'
    },
    rollupOptions: {
      context: 'globalThis',
      preserveEntrySignatures: 'strict',
      external: ['vue'],
      output: [
        {
          format: 'umd',
          exports: 'named',
          sourcemap: false,
          entryFileNames: 'heyui.js',
          chunkFileNames: '[name].js',
          assetFileNames: '[name].[ext]',
          namespaceToStringTag: true,
          inlineDynamicImports: false,
          manualChunks: undefined,
          globals: { vue: 'Vue' }
        },
        {
          format: 'es',
          exports: 'named',
          sourcemap: false,
          entryFileNames: 'heyui.esm.js',
          chunkFileNames: '[name].js',
          assetFileNames: '[name].[ext]',
          namespaceToStringTag: true,
          inlineDynamicImports: false,
          manualChunks: undefined,
          globals: { vue: 'Vue' }
        }
      ]
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
