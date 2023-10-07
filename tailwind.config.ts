import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		fontFamily: {
			sans: [
				["var(--font-uncut-sans)", ...defaultTheme.fontFamily.sans],
				{ fontFeatureSettings: '"case", "ss02", "ss05", "ss06", "ss07", "ss08"' },
			],
			serif: ["var(--font-nelphim)", ...defaultTheme.fontFamily.serif],
		},
		extend: {
			colors: {
				body: "rgb(249 249 249)",
			},
		},
	},
	plugins: [],
};
export default config;
