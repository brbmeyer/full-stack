import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dns from 'dns'
import autoprefixer from 'autoprefixer'

// Allows us to use localhost as host name
dns.setDefaultResultOrder('verbatim')

export default defineConfig(() => {
  return {
    server: {
      host: 'localhost',
      port: '3001',
      proxy: {
        '/api': {
          target: 'http://localhost:3000',
          changeOrigin: true,
        },
      },
    },
    build: {
      outDir: 'build',
      target: ['es2015'],
    },
    plugins: [react()],
    css: {
      postcss: {
        plugins: [
          autoprefixer,
        ],
      },
    },
  }
})
