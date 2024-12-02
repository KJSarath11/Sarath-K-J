import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration for Netlify deployment
export default defineConfig({
  base: '/',  // Set base path for Netlify deployment (or use '/<repository-name>/' for subdirectory)
  build: {
    outDir: 'build',  // Set build output directory to 'build'
  },
  plugins: [react()],
});
