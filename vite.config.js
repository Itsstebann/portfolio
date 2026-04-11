import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base: '/portfolio/' necesario para GitHub Pages (repositorio no es raíz del dominio)
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
})
