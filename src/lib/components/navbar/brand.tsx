import MotionLink from "$components/motion-link";
import ease from "$constants/ease";
import { motion, type Variants } from "framer-motion";
import type { ComponentProps } from "react";

const variants: Variants = {
	initial: { width: "0%" },
	whileHover: { width: "100%" },
	whileFocus: { width: "100%" },
	whileTap: { width: "100%" },
};

export default function NavbarBrand({ children, ...restProps }: ComponentProps<typeof MotionLink>) {
	return (
		<MotionLink
			className="relative flex items-center font-sans-condensed uppercase outline-none"
			initial="initial"
			whileHover="whileHover"
			whileFocus="whileFocus"
			whileTap="whileTap"
			{...restProps}
		>
			{children}
			<motion.span
				className="absolute bottom-7 h-0.5 origin-left bg-black"
				transition={{ ease: ease.three, duration: 0.35 }}
				variants={variants}
			/>
		</MotionLink>
	);
}
