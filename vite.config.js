export default defineConfig({
  base: '/portfolio-react/',  // Asegúrate de poner la barra al principio
  build: {
    outDir: 'dist',  // Asegúrate de que el directorio de salida sea correcto
  },
  plugins: [react()],
})