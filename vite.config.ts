import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

import { fileURLToPath } from "url";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@config", replacement: fileURLToPath(new URL("./src/config", import.meta.url)) }],
  },
});
