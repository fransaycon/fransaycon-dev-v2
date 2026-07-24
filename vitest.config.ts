/// <reference types="vitest/config" />
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [viteReact()],
	test: {
		environment: "jsdom",
		globals: true,
		setupFiles: ["./src/test/setup.ts"],
		include: ["src/**/*.{test,spec}.{ts,tsx}"],
		css: true,
		coverage: {
			provider: "v8",
			reporter: ["text", "html"],
			include: ["src/**/*.{ts,tsx}"],
			exclude: [
				"src/**/*.{test,spec}.{ts,tsx}",
				"src/test/**",
				"src/routeTree.gen.ts",
			],
		},
	},
	resolve: {
		alias: {
			"#": new URL("./src", import.meta.url).pathname,
			"@": new URL("./src", import.meta.url).pathname,
		},
	},
});
