import { defineConfig } from "vite"; import { svelte } from "@sveltejs/vite-plugin-svelte"; import { resolve } from "path"; import postcss from "./postcss.config.js";

export default defineConfig({
    css: {
        postcss,
    },
    plugins: [svelte({})],
    optimizeDeps: {
        exclude: ["totalist", "sirv", "local-access"]
    },
    base: "./",
    resolve: {
        alias: {
            "@Utils": resolve("./source/Utils"),
            "@Store": resolve("./source/Stores"),
            "@Components": resolve("./source/Components"),
            "@Handlers": resolve("./source/Handlers")
        },	
    },
    build: {
        emptyOutDir: true,
        outDir: "../build",
        assetsDir: "./",
        rollupOptions: {
            output: {
                entryFileNames: "[name].js",
                chunkFileNames: "[name].js",
                assetFileNames: "[name].[ext]"
            }
        }
    }
})