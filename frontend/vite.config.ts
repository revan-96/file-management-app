import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig(({mode}) => {
  if(mode === 'development') {
    return {
      plugins: [
        svgr({
          include: "**/*.svg?react"
        }), 
        react()
      ],
      build: {
        outDir: '../server/frontend',
        manifest: true,
        rollupOptions: {
          input: '/src/main.tsx',
        }
      },
      server: {
        proxy: {
          '/api': 'http://localhost:3000'
        }
      }
    }
  } else {
    return {
      plugins: [
        svgr({
          include: "**/*.svg?react"
        }), 
        react()
      ],
      build: {
        outDir: '../server/frontend',
      }
    }
  }
})
