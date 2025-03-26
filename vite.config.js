import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: 'portfolio-react',
  build: {
    outDir: 'dist',  // Asegúrate de que el directorio de salida sea correcto
  },
})
