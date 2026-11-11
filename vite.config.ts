import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// En GitHub Pages sin dominio propio la web vive en /NOMBRE-DEL-REPO/.
// El deploy (.github/workflows/deploy.yml) pasa BASE solo; en local queda "/".
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: process.env.BASE ?? "/",
});
