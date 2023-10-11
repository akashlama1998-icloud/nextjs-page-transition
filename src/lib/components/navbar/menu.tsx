import { motion, type HTMLMotionProps, type Variants } from "framer-motion";

const variants: Variants = {
	initial: {
		backgroundColor: "rgb(30 31 19 / 0)",
		color: "rgb(30 31 19)",
		outlineColor: "rgb(30 31 19 / 0)",
	},
	whileHover: {
		backgroundColor: "rgb(30 31 19 / 1)",
		color: "rgb(240 216 187)",
		transition: { ease: "easeOut", duration: 0.12 },
	},
	whileFocus: {
		backgroundColor: "rgb(30 31 19 / 1)",
		color: "rgb(240 216 187)",
		outlineColor: "rgb(30 31 19 / 1)",
		transition: { ease: "easeOut", duration: 0.12 },
	},
	whileTap: {
		backgroundColor: "rgb(30 31 19 / 1)",
		color: "rgb(240 216 187)",
		scale: 0.92,
		transition: { ease: "easeOut", duration: 0.12 },
	},
};

export default function NavbarMenu(props: HTMLMotionProps<"button">) {
	return (
		<motion.button
			className="h-20 w-20 rounded-full border border-black font-sans-condensed uppercase outline outline-2 outline-offset-2 outline-black/0"
			initial="initial"
			whileHover="whileHover"
			whileFocus="whileFocus"
			whileTap="whileTap"
			transition={{ ease: "easeIn", duration: 0.075 }}
			variants={variants}
			{...props}
		>
			Menu
		</motion.button>
	);
}
