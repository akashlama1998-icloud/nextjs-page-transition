import ease from "$constants/ease";
import type Model from "$types/model";
import { motion, type HTMLMotionProps, type Transition, type Variants } from "framer-motion";

type Props = Omit<HTMLMotionProps<"img">, "alt" | "src"> & {
	caption: Model["photo"]["caption"];
	formats: Model["photo"]["formats"];
};

const variants: Variants = {
	initial: { scale: 1 },
	whileHover: { scale: 1.1 },
	whileFocus: { scale: 1.1 },
	whileTap: { scale: 1.1 },
};

const transition: Transition = {
	scale: { ease: ease.one, duration: 0.5 },
	layout: { ease: ease.two, delay: 0.4, duration: 1.4 },
};

export default function CardImage({ caption, formats, ...restProps }: Props) {
	return (
		<picture>
			<source type="image/avif" srcSet={formats.avif} />
			<source type="image/webp" srcSet={formats.webp} />
			<motion.img
				src={formats.jpg}
				alt={caption}
				width={2420}
				height={3388}
				transition={transition}
				variants={variants}
				{...restProps}
			/>
		</picture>
	);
}
