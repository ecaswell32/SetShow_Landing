import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

const isSingleFile = process.env.SINGLE_FILE === 'true'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    ...(isSingleFile ? [viteSingleFile()] : [])
  ],
  build: {
    assetsInlineLimit: isSingleFile ? 100000000 : 4096,
  }
})

