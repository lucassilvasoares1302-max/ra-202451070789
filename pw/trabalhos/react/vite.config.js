
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  base: '/ra-202451070789/',

  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/tests/setup.js'
  }
});
