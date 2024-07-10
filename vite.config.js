import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    assets: ['helpers.js','public/libstream.js', 'public/stream.js','public/libstream.worker.js'], // Include Shrepa model files
    // ... other build options
  },
  server: {
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp',
      'Access-Control-Allow-Origin': 'no-cors',
    }
  },
})
