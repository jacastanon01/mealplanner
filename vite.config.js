import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
  // include: ["src/**/*.js", "src/*.jsx"],
  // exclude: [/\.jsx$/],
  // define: {
  // global: "window",
  // },
  // },
  // optimizeDeps: {
  //   include: ["src/**/*.js", "src/*.jsx"],
  //   esbuildOptions: {
  //     bundle: "./server.js",
  //   },
  // },
  build: { minify: true, brotliSize: true },
});
