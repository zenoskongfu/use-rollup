import viteReact from "@vitejs/plugin-react";
import commonjs from "vite-plugin-commonjs";
/**@type {import('vite').UserConfig} */
export default {
	plugins: [viteReact(), commonjs()],
	server: {
		port: 8080,
		open: "/",
	},
};
