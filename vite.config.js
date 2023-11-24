import { resolve } from 'path';
import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solid()],
  base: '/frontendmentor-challenges/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        qr_code: resolve(__dirname, 'qr-code-component-main', 'index.html'),
      },
    },
  },
});
