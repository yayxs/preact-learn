import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  appType: 'mpa',
  build: {
    rollupOptions: {
      input: {
        start: resolve(__dirname, 'start.html'),
        htm: resolve(__dirname, 'htm.html')
      }
    }
  }
})
