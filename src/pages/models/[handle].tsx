import ease from "$constants/ease";
import models from "$data/models.json";
import useAllTruthy from "$hooks/use-all-truthy";
import type Model from "$types/model";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import type { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useEffect } from "react";

type Props = { model?: Model };

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = models.map((model) => ({ params: { handle: model.handle } }));

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps<Props> = (context) => {
	const { handle } = context.params as { handle: string };
	const model = models.find((model) => model.handle === handle);

	return {
		props: { model },
	};
};

const paragraphVariants: Variants = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0, transition: { ease: ease.two, delay: 1.4, duration: 0.8 } },
	exit: { opacity: 0, y: 20, transition: { ease: ease.two, duration: 0.8 } },
};

const scrollForMoreVariants: Variants = {
	initial: {
		opacity: 0,
		x: "-50%",
		y: 20,
	},
	animate: {
		opacity: 1,
		x: "-50%",
		y: 0,
		transition: { ease: ease.two, delay: 1.8, duration: 0.8 },
	},
	exit: {
		opacity: 0,
		x: "-50%",
		y: 20,
		transition: { ease: ease.two, duration: 0.8 },
	},
};

const wordVariants: Variants = {
	initial: { y: 0 },
	animate: (index: number) => ({
		y: 0,
		transition: {
			delayChildren: 1.2,
			staggerChildren: 0.04,
			staggerDirection: index === 0 ? -1 : 1,
		},
	}),
	exit: (index: number) => ({
		y: 0,
		transition: {
			staggerChildren: 0.04,
			staggerDirection: index === 0 ? 1 : -1,
		},
	}),
};

const letterVariants: Variants = {
	initial: { y: 400 },
	animate: { y: 0, transition: { ease: ease.two, duration: 1 } },
	exit: { y: 400, transition: { ease: ease.two, duration: 1 } },
};

export default function Model({ model }: Props) {
	const title = `Next.js Page Transition | ${model?.name}`;
	const [canScroll, setCanScroll] = useAllTruthy([]);
	const { scrollYProgress } = useScroll();
	const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

	useEffect(() => {
		if (!canScroll) {
			document.body.classList.add("overflow-hidden");
		} else {
			document.body.classList.remove("overflow-hidden");
		}
	}, [canScroll]);

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={model?.content.title} />
			</Head>

			<motion.article
				className="relative flex flex-col"
				initial="initial"
				animate="animate"
				exit="exit"
				onAnimationComplete={() => setCanScroll((prevVal) => [...prevVal, true])}
			>
				<section className="flex h-half-screen flex-col items-center justify-end gap-8 pb-4">
					<motion.p
						className="container flex justify-between overflow-hidden font-sans-condensed uppercase"
						variants={paragraphVariants}
					>
						<span>
							{model?.location._latitude}&nbsp;&nbsp;{model?.location._longitude}
						</span>
						<span>Handle: @{model?.handle}</span>
					</motion.p>
					<h1 className="flex gap-[0.38ch] overflow-hidden font-serif text-13xl">
						{model?.name.split(" ").map((word, wordIndex) => (
							<motion.span
								key={wordIndex}
								className="flex"
								custom={wordIndex}
								variants={wordVariants}
							>
								{word.split("").map((letter, letterIndex) => (
									<motion.span key={letterIndex} className="flex" variants={letterVariants}>
										{letter}
									</motion.span>
								))}
							</motion.span>
						))}
					</h1>
				</section>

				<section className="h-half-screen">
					<motion.div
						className="relative aspect-cover overflow-hidden"
						layoutId={`model_thumbnail_${model?.handle}`}
						transition={{ ease: ease.two, delay: 0.3, duration: 1.4 }}
						onLayoutAnimationComplete={() => setCanScroll((prevVal) => [...prevVal, true])}
					>
						<picture>
							<source type="image/avif" srcSet={model?.photo.formats.avif} />
							<source type="image/webp" srcSet={model?.photo.formats.webp} />
							<motion.img
								src={model?.photo.formats.jpg}
								alt={model?.photo.caption}
								width={2420}
								height={3388}
								className="absolute -top-192 w-full"
								style={{ scale: scale as unknown as number }}
								initial={{ scale: 1 }}
								layoutId={`model_image_${model?.handle}`}
								transition={{ ease: ease.two, delay: 0.3, duration: 1.4 }}
							/>
						</picture>
						<motion.div
							className="container absolute bottom-96 left-1/2 flex -translate-x-1/2 flex-col gap-2 font-sans-condensed text-md/5 uppercase text-white"
							variants={scrollForMoreVariants}
						>
							<svg
								viewBox="0 0 23.539 29.985"
								className="h-auto w-7 fill-none stroke-current stroke-1.2"
							>
								<g transform="translate(-67.666 0.6)">
									<g transform="translate(68.266)">
										<path
											d="M90.452,18.153l-2.9-2.664a.528.528,0,0,0-.71,0L81.974,20V.48A.5.5,0,0,0,81.466,0H77.4A.5.5,0,0,0,76.9.48V20l-4.872-4.515a.529.529,0,0,0-.709,0l-2.9,2.664a.46.46,0,0,0,0,.687l10.662,9.81a.528.528,0,0,0,.708,0l10.662-9.81a.461.461,0,0,0,0-.687Z"
											transform="translate(-68.266)"
										/>
									</g>
								</g>
							</svg>
							<p className="flex flex-col">
								<span>Scroll</span>
								<span>for more</span>
							</p>
						</motion.div>
					</motion.div>
				</section>

				<section className="container flex justify-around self-center pb-26 pt-98">
					<h3 className="font-sans-condensed text-2.6xl">{model?.content.title}</h3>
					<p className="max-w-text text-justify leading-6.8">{model?.content.description}</p>
				</section>
			</motion.article>
		</>
	);
}
