import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        quietDeps: true,
        sourceMap: true,
        sourceMapContents: true,
      }
    }
  },
  build: {
    sourcemap: true, 
    minify: false,
    cssCodeSplit: false, 
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
      }
    }
  }
});