import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// replaced lovable-tagger with react-dev-inspector
// inspector plugin removed temporarily; use only the React plugin to avoid missing dependency during install.

// https://vitejs.dev/config/
export default defineConfig(() => ({
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
