import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: [
          resolve(__dirname, 'index.html'),
      ]
    }
  },
  base: '/ashwini-seshadri/',
})
