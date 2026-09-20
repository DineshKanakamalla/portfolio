import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Production is served from https://dineshkanakamalla.github.io/portfolio/, so
// built asset URLs need that prefix. Dev keeps the root base for convenience.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/portfolio/' : '/',
  plugins: [react()]
}))
