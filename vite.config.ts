import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import { defineConfig } from "vite";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true
    }),
    libInjectCss()
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "./src/libs/index.ts"),
      name: "vz-react-modal",
      formats: ["es", "umd"],
      fileName: (format) => `vz-react-modal.${format}.js`
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    }
  }
});
