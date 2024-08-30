import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import copy from 'rollup-plugin-copy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Add the copy plugin to ensure the CNAME file is included in the dist folder
  ],
  build: {
    rollupOptions: {
      plugins: [
        copy({
          targets: [
            { src: 'CNAME', dest: 'dist' }  // Copy the CNAME file to the dist directory
          ],
          hook: 'writeBundle'  // Ensure the copy happens after the build process
        })
      ]
    }
  }
})
