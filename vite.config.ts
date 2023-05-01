import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      includeAssets: ["icons/*.{png,ico,svg}"],
      manifest: {
        name: "Kanban",
        short_name: "Kanban",
        description: "Kanban PWA using Vite.js",
        theme_color: "#2D2D33",
        icons: [
          {
            src: "icons/icon.png",
            sizes: "256x256",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "icons/icon.svg",
            sizes: "any",
            type: "image/svg+xml",
            purpose: "maskable",
          },
        ],
      },
    }),
  ],
});
