import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
          router: ["react-router-dom"],
          supabase: ["@supabase/supabase-js"],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
});
