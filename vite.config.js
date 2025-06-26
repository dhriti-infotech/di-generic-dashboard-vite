import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/di-dashboard/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: 'index.html',
    }
  }
});
