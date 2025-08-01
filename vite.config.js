import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Ensure correct relative paths for assets
  build: {
    outDir: 'dist', // Vercel expects static files here (default is fine)
  }
})
