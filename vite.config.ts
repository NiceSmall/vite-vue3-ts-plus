import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  base: './',
  server: {
    port: 9531,
    open: true,
    cors: true,
    proxy: {
      '/api': {
        target: 'https://wapi.zhihuihedao.cn',
        changeOrigin: true,
        secure: false
        // rewrite: (path) => path.replace('/api/', '/')
      }
    }
  }
})
