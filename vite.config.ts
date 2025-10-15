import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  base: './', // ensures correct paths after build
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist', // standard build folder
    target: 'esnext',
  },
  server: {
    port: 3000,
    open: true,
  },
});
