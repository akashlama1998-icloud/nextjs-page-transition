import MotionLink from "$components/motion-link";
import type { Transition, Variants } from "framer-motion";
import type { ComponentProps } from "react";
import ease from "$constants/ease";

const variants: Variants = {
	initial: {
		outlineColor: "rgb(30 31 19 / 0)",
	},
	whileFocus: {
		outlineColor: "rgb(30 31 19 / 1)",
		transition: { ease: "easeOut", duration: 0.12 },
	},
};

const transition: Transition = {
	outlineColor: { ease: "easeIn", duration: 0.075 },
	layout: { ease: ease.two, delay: 0.4, duration: 1.4 },
};

export default function CardLink(props: ComponentProps<typeof MotionLink>) {
	return (
		<MotionLink
			className="relative block aspect-thumbnail w-80 overflow-hidden outline outline-2 outline-offset-3 outline-black/0"
			initial="initial"
			whileHover="whileHover"
			whileFocus="whileFocus"
			whileTap="whileTap"
			transition={transition}
			variants={variants}
			{...props}
		/>
	);
}
