import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000
    },
    resolve: {
        alias: {
            "~assets": path.resolve(__dirname, "./src/assets"),
            "~components": path.resolve(__dirname, "./src/components"),
            "~contexts": path.resolve(__dirname, "./src/contexts"),
            "~graphql": path.resolve(__dirname, "./src/graphql"),
            "~hooks": path.resolve(__dirname, "./src/hooks"),
            "~pages": path.resolve(__dirname, "./src/pages"),
            "~styles": path.resolve(__dirname, "./src/styles"),
            "~types": path.resolve(__dirname, "./src/types"),
            "~utils": path.resolve(__dirname, "./src/utils")
        }
    }
});
