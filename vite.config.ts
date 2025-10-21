import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  base: "./", // Add this line to make assets load correctly
  assetsInclude: ["**/*.pdf"],
  optimizeDeps: {
    exclude: ["react-pdf"],
  },
  build: {
    rollupOptions: {
      external: ["pdfjs-dist"],
    },
    outDir: "dist", // Specify output directory
    emptyOutDir: true, // Clean the output directory before build
    sourcemap: false, // Disable sourcemaps for production
  },
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
