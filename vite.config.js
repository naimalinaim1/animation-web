import react from '@vitejs/plugin-react';

export default {
  plugins: [react()],
  build: {
    outDir: 'dist', // The output directory for the build
    assetsDir: 'assets', // The directory under outDir to place assets
    cssCodeSplit: true, // Enable separate CSS file for each entry

    // Customizing the output paths for different file types
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/js/[name]-[hash].js',
        chunkFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          // Organize assets into js, css, and image folders
          const isJS = assetInfo.name.endsWith('.js');
          const isCSS = assetInfo.name.endsWith('.css');
          const isImage = assetInfo.name.match(/\.(png|jpg|jpeg|gif|svg|webp)$/);

          if (isJS) {
            return `assets/js/[name]-[hash][extname]`;
          } else if (isCSS) {
            return `assets/css/[name]-[hash][extname]`;
          } else if (isImage) {
            return `assets/image/[name]-[hash][extname]`;
          }

          // Default to the assets folder for other files
          return `assets/[name]-[hash][extname]`;
        },
        manualChunks: undefined, // Disable automatic chunk splitting
      },
    },
  },
};
