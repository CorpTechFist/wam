import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  // Use '/' for deployment to ensure correct asset paths
  base: '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Use '@/...' imports
    },
  },
  build: {
    outDir: 'dist', // Build output folder
    target: 'esnext',
    sourcemap: false, // Optional: speed up build
    emptyOutDir: true, // Clean dist folder before build
  },
  server: {
    port: 3000,
    open: true,
  },
});
