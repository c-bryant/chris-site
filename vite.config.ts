import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Simple dev config — use '/' as base during development to avoid middleware complexity.
const isProd = process.env.NODE_ENV === 'production'

// https://vite.dev/config/
export default defineConfig({
  base: isProd ? '/chris-site/' : '/',
  plugins: [react()],
})
