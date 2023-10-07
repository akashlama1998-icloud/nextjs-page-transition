import type { AppProps } from "next/app";
import localFont from "next/font/local";
import "$styles/globals.css";

const nelphim = localFont({
	src: [
		{
			path: "../../public/fonts/Nelphim/Nelphim.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "../../public/fonts/Nelphim/Nelphim-Italic.woff2",
			weight: "400",
			style: "italic",
		},
	],
	display: "swap",
	preload: true,
	variable: "--font-nelphim",
});

const uncutSans = localFont({
	src: "../../public/fonts/UncutSans/UncutSans-Variable.woff2",
	weight: "300 700",
	display: "swap",
	preload: true,
	variable: "--font-uncut-sans",
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={`${nelphim.variable} ${uncutSans.variable} flex flex-col bg-body font-sans`}>
			<Component {...pageProps} />
		</main>
	);
}
