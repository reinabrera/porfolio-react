import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  server: {port: 3000},
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name == 'resume.pdf')
            return 'Abrera, Rein D. - Resume.pdf';
          return assetInfo.name;
        },
      }
    }
  }
})
