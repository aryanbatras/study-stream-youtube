import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import devtools from 'solid-devtools/vite';
import tailwindcss from '@tailwindcss/vite';
import Pages from 'vite-plugin-pages';

export default defineConfig({
  plugins: [solidPlugin(), devtools(), Pages(), tailwindcss()],
  server: {
    port: 4000,
  },
  build: {
    target: 'esnext',
  },
});
