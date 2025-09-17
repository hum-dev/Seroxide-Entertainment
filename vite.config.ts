import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  assetsInclude: ['**/*.pdf'],
  optimizeDeps: {
    exclude: ['react-pdf'],
  },
  build: {
    rollupOptions: {
      external: ['pdfjs-dist'],
    },
  },
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // ...existing code (no additional dev-time plugins enabled)
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
