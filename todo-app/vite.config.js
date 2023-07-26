import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'login.html'),
        signup: resolve(__dirname, 'signup.html'),
        forgottenpassword: resolve(__dirname, 'forgottenpassword.html'),
        updatepassword: resolve(__dirname, 'updatepassword.html'),
      },
    },
  },
});
