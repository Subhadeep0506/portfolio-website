import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: "jsx",
  },
  build: {
    outDir: "build",
    assetsDir: "assets",
  },
  resolve: {
    alias: {
      src: "/src",
      assets: "/src/assets",
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
    },
  },
});
