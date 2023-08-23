import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import Inspect from "vite-plugin-inspect";
// import compression from "vite-plugin-compression2";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Inspect({ build: true, outputDir: ".vite-inspect" }),
    // compression({
    //   algorithm: "gzip",
    //   exclude: [/\.(br)$ /, /\.(gz)$/],
    // }),
    // compression({
    //   algorithm: "brotliCompress",
    //   exclude: [/\.(br)$ /, /\.(gz)$/],
    // }),
  ],
  server: {
    port: 3000,
    // proxy: {
    //   "/api": {
    //     target: "http://localhost:4000",
    //     configure: (proxy, opt) => {
    //       proxy.on("error", (req, res, err) => {
    //         console.error(err);
    //       });
    //       proxy.on("proxyReq", (req, res, err) => {
    //         console.log("Request sent from ", req.url, req.method);
    //       });
    //       proxy.on("proxyRes", (req, res, err) => {
    //         console.log("Recieved response from ", res.statusCode, req.url);
    //       });
    //     },
    //   },
    // },
  },
  // },
  // esbuild: {
  //   include: ["src/**/*.js", "src/*.jsx"],
  //   exclude: [/\.jsx$/],
  //   define: {
  //     global: "window",
  //   },
  // },
  optimizeDeps: {
    include: ["src/**/*.js", "src/*.jsx", "dist/index.html"],
  },
  build: { minify: true, brotliSize: true },
});
