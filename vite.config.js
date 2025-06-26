import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/di-generic-dashboard-vite/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: 'index.html',
    }
  }
});
