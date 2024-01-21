import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import macrosPlugin from 'babel-plugin-macros'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), macrosPlugin()],
  server: {
    port: 3000, // Especifica el puerto personalizado aquí
    host: '0.0.0.0',
    watch: {
      usePolling: true
    }
  },  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
