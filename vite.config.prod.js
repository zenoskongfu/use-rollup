import { viteExternalsPlugin } from "vite-plugin-externals";
import viteConfig from "./vite.config.js";
import { createHtmlPlugin } from "vite-plugin-html";

const getscript = () => {
	const sources = ["../prod/react.development.js", "../prod/react-dom.development.js", "../prod/rollup-build.js"];
	return sources
		.map((item) => {
			return `<script src='${item}'></script>`;
		})
		.join("\n");
};

viteConfig.plugins.push(
	viteExternalsPlugin({
		react: "React",
		"react-dom": "ReactDOM",
		"rollup-build": "RB",
	}),
	createHtmlPlugin({
		minify: false,
		/**
		 * After writing entry here, you will not need to add script tags in `index.html`, the original tags need to be deleted
		 * @default src/main.ts
		 */
		entry: "../src/index.tsx",
		/**
		 * If you want to store `index.html` in the specified folder, you can modify it, otherwise no configuration is required
		 * @default index.html
		 */
		template: "public/index.html",
		/**
		 * Data that needs to be injected into the index.html ejs template
		 */
		inject: {
			data: {
				injectScript: getscript(),
			},
		},
	})
);

export default viteConfig;
