import Navbar from "$components/navbar";
import { PathProvider } from "$contexts/PathProvider";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { Roboto_Condensed } from "next/font/google";
import localFont from "next/font/local";
import { usePathname } from "next/navigation";
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

const robotoCondensed = Roboto_Condensed({
	subsets: ["latin"],
	weight: "700",
	display: "swap",
	preload: true,
	variable: "--font-roboto-condensed",
});

export default function App({ Component, pageProps }: AppProps) {
	const pathname = usePathname();

	return (
		<PathProvider>
			<header
				className={`${robotoCondensed.variable} fixed left-0 right-0 top-0 z-50 flex h-26 items-center justify-center`}
			>
				<Navbar.Root>
					<Navbar.Brand href="/">Next.js</Navbar.Brand>
					<Navbar.Menu />
				</Navbar.Root>
			</header>

			<AnimatePresence initial={false} mode="popLayout">
				<main
					className={`${nelphim.variable} ${robotoCondensed.variable} ${uncutSans.variable} relative z-10 flex flex-col font-sans `}
					key={pathname}
				>
					<Component {...pageProps} />
				</main>
			</AnimatePresence>
		</PathProvider>
	);
}
