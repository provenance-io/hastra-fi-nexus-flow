import {defineConfig} from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import {nodePolyfills} from "vite-plugin-node-polyfills";
import {componentTagger} from "lovable-tagger";

export default defineConfig(async ({ mode }) => {
  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      nodePolyfills({
        // Specific modules that should not be polyfilled.
        exclude: [],
        // Whether to polyfill specific globals.
        globals: {
          Buffer: true, // can also be 'build', 'dev', or false
          global: true,
          process: true,
        },
        // Whether to polyfill `node:` protocol imports.
        protocolImports: true,
      }),
      componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        buffer: "buffer",
      },
    },
  };
});
