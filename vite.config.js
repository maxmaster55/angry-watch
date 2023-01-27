import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@backend': path.resolve(__dirname, 'src/backend'),
      '@myTypes': path.resolve(__dirname, 'src/backend/types'),
      '@components': path.resolve(__dirname, 'src/components'),
    }
  }
})
