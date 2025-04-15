import { defineConfig } from "vite";
import viteImagemin from "vite-plugin-imagemin";
import viteCompression from "vite-plugin-compression";

export default defineConfig({
  build: {
    outDir: "dist",
    minify: "esbuild",
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
  },
  plugins: [
    viteImagemin({
      gifsicle: { optimizationLevel: 7 },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 80 },
      svgo: {
        plugins: [
          { name: "removeViewBox", active: false },
          { name: "removeEmptyAttrs", active: true },
          { name: "cleanupIDs", active: true },
        ],
      },
      webp: { quality: 80 },
      pngquant: { quality: [0.6, 0.8] },
    }),
    viteCompression({
      algorithm: "gzip",
    }),
  ],
});
