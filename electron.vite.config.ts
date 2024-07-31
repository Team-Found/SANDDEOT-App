import { resolve } from "path";
import { defineConfig, externalizeDepsPlugin } from "electron-vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
  },
  renderer: {
    resolve: {
      alias: {
        "@renderer": resolve("src/renderer/src"),
        "@components": resolve("src/renderer/src/components"),
        "@assets": resolve("src/renderer/src/assets"),
        "@pages": resolve("src/renderer/src/pages"),
        "@routes": resolve("src/renderer/src/routes"),
      },
    },
    plugins: [react()],
  },
});
