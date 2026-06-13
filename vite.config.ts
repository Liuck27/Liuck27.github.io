import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base stays '/' because this is a user site served from the domain root
// (https://liuck27.github.io), not a project subpath.
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
