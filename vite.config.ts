import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(() => ({
  base: "./", // Use ./ instead of empty string for better compatibility
  assetsInclude: ["**/*.pdf"],
  optimizeDeps: {
    exclude: ["react-pdf"],
  },
  build: {
    rollupOptions: {
      // Remove or comment out the external line - it might prevent pdfjs from bundling
      // external: ["pdfjs-dist"],
      output: {
        manualChunks: undefined,
        assetFileNames: "assets/[name].[hash].[ext]",
        chunkFileNames: "assets/[name].[hash].js",
        entryFileNames: "assets/[name].[hash].js",
      },
    },
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: false,
    chunkSizeWarningLimit: 1600,
    manifest: true,
  },
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));