import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [
        '.',
        'C:/Users/hp140/.gemini/antigravity/brain/5c2b1b8f-c1f3-4397-b369-b45fd5598da3'
      ]
    }
  }
})
