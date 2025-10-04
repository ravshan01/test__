import { resolve } from 'path'
import sha1 from 'sha1'
import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react({ tsDecorators: true })],

  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },

  css: {
    modules: {
      generateScopedName: function (name, filename) {
        const folders = filename.split('/')
        const prefix = folders[folders.length - 2]
        const hash = sha1(filename).substring(0, 5)

        return `${prefix}_${name}__${hash}`
      },
    },

    devSourcemap: true,
  },

  optimizeDeps: {
    esbuildOptions: {
      tsconfigRaw: {
        compilerOptions: {
          experimentalDecorators: true,
        },
      },
    },
  },
})
