import { fileURLToPath, URL } from 'node:url'
import fs from 'fs';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // server: {
  //   https: {
  //     key: fs.readFileSync('./key.pem'),
  //     cert: fs.readFileSync('./cert.pem'),
  //     passphrase: '1234'
  //   },
  //   // Make sure the server is accessible over the local network
  //   host: '0.0.0.0',
  // }
})
