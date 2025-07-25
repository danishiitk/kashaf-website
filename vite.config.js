import { defineConfig } from 'vite'
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: '/kashaf-website/', // Replace with your repository name
  server: {
    host: "0.0.0.0",
    port: 5173,
    strictPort: true,
    cors: true,
    allowedHosts: "all", // ← this allows any incoming hostname
  },
});
