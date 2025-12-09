import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue(), vueJsx()],
  base: '/BusinessCard/', // Указываем базовый путь для GitHub Pages
  server: {
    port: 3000,
    open: true
  },
  resolve: {
    alias: {
    '@': resolve(__dirname, 'src'),
    '@components': resolve(__dirname, 'src/components'),
    '@views': resolve(__dirname, 'src/views'),
    '@assets': resolve(__dirname, 'src/assets'),
    '@utils': resolve(__dirname, 'src/utils'),
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'vue-router']
        }
      }
    }
  }
})