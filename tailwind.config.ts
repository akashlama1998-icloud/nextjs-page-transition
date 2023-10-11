import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		animation: {
			grain: "grain 8s steps(10) infinite",
		},
		colors: {
			black: "#1e1f13",
			current: "currentColor",
			main: " #f0d8bb",
			none: "none",
			white: "#ffffff",
		},
		container: {
			padding: {
				DEFAULT: "1.125rem",
				sm: "px-4.5 ",
				md: "2.5rem",
			},
		},
		extend: {
			aspectRatio: {
				cover: "12 / 5",
				thumbnail: "5 / 7",
			},
			fontSize: {
				md: ["0.9375rem", "1.375rem"],
				"2.6xl": ["1.625rem", "2.125rem"],
				"10xl": ["9rem", "1.2"],
				"11xl": ["10rem", "1.2"],
				"12xl": ["11rem", "1.2"],
				"13xl": ["12rem", "1.2"],
			},
			lineHeight: {
				6.8: "1.7rem",
			},
			maxWidth: {
				text: "65ch",
			},
			outlineOffset: {
				3: "3px",
			},
			scale: {
				92: ".92",
			},
			spacing: {
				4.5: "1.125rem",
				18: "4.5rem",
				26: "6.5rem",
				98: "24.5rem",
				100: "25rem",
				192: "48rem",
				200: "50rem",
				"half-screen": "50vh",
			},
			strokeWidth: {
				1.2: "1.2",
			},
		},
		fontFamily: {
			sans: [
				["var(--font-uncut-sans)", ...defaultTheme.fontFamily.sans],
				{ fontFeatureSettings: '"case", "ss02", "ss05", "ss06", "ss07", "ss08"' },
			],
			serif: ["var(--font-nelphim)", ...defaultTheme.fontFamily.serif],
			"sans-condensed": ["var(--font-roboto-condensed)", ...defaultTheme.fontFamily.serif],
		},
		keyframes: {
			grain: {
				"0%, 100%": { transform: "translate(0%, 0%)" },
				"10%": { transform: "translate(-5%, -10%)" },
				"20%": { transform: "translate(-15%, 5%)" },
				"30%": { transform: "translate(7%, -25%)" },
				"40%": { transform: "translate(-5%, 25%)" },
				"50%": { transform: "translate(-15%, 10%)" },
				"60%": { transform: "translate(15%, 0%)" },
				"70%": { transform: "translate(0%, 15%)" },
				"80%": { transform: "translate(3%, 35%)" },
				"90%": { transform: "translate(-10%, 10%)" },
			},
		},
	},
	plugins: [],
};
export default config;
