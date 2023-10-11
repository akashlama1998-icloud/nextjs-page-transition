import { motion, type HTMLMotionProps } from "framer-motion";

export default function CardCaption(props: HTMLMotionProps<"figcaption">) {
	return (
		<motion.figcaption
			className="absolute -bottom-9 flex w-full cursor-default touch-none select-none justify-between font-sans-condensed uppercase"
			{...props}
		/>
	);
}
