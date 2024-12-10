import { defineConfig } from "vite";

export default defineConfig({
  base: "/pixi-skia/", // Замените на имя вашего репозитория
  build: {
    outDir: "dist", // Укажите выходную директорию
    emptyOutDir: true, // Очищает папку перед сборкой
  },
});
