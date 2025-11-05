import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // ensure assets are served correctly from root
  build: {
    outDir: 'dist',     // output folder for build files
    assetsDir: 'assets' // folder to store compiled js/css
  },
})
