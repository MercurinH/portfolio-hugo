import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio-hugo/',
  server: {
    port: 3000,  // Spécifie le port 3000
  },
});