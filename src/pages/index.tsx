import Card from "$components/card";
import ease from "$constants/ease";
import { usePathContext } from "$contexts/PathProvider";
import models from "$data/models.json";
import useAllTruthy from "$hooks/use-all-truthy";
import type Model from "$types/model";
import { type Variants } from "framer-motion";
import type { GetStaticProps } from "next";
import Head from "next/head";
import { useEffect } from "react";

type Props = { models: Model[] };

type FMCustomData = {
	path: ReturnType<typeof usePathContext>;
	handle: string;
};

export const getStaticProps: GetStaticProps<Props> = () => {
	return {
		props: { models },
	};
};

const cardRootVariants: Variants = {
	initial: ({ path: { prevPath }, handle }: FMCustomData) => {
		return prevPath !== `/models/${handle}` ? { opacity: 0 } : "";
	},
	animate: ({ path: { prevPath }, handle }: FMCustomData) => {
		return prevPath !== `/models/${handle}`
			? {
					opacity: 1,
					transition: { opacity: { ease: ease.one, delay: 1.6, duration: 0.5 } },
			  }
			: "";
	},
	exit: ({ path: { currentPath }, handle }: FMCustomData) => {
		return currentPath !== `/models/${handle}` ? { opacity: 0 } : "";
	},
};

const cardCaptionVariants: Variants = {
	initial: ({ path: { prevPath }, handle }: FMCustomData) => {
		return prevPath === `/models/${handle}` ? { opacity: 0 } : "";
	},
	animate: ({ path: { prevPath }, handle }: FMCustomData) => {
		return prevPath === `/models/${handle}`
			? {
					opacity: 1,
					transition: { opacity: { ease: ease.one, delay: 1.6, duration: 0.5 } },
			  }
			: "";
	},
	exit: ({ path: { currentPath }, handle }: FMCustomData) => {
		return currentPath === `/models/${handle}` ? { opacity: 0 } : "";
	},
};

export default function Home({ models }: Props) {
	const { prevPath, currentPath } = usePathContext();
	const [canScroll, setCanScroll] = useAllTruthy([]);

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
				<title>Next.js Page Transition | Gallery</title>
				<meta name="description" content="Page Transition using Framer Motion in Next.js." />
			</Head>

			<article className="flex min-h-screen justify-center">
				<section className="container flex flex-wrap justify-center gap-x-10 gap-y-18 pt-52">
					{models.map(({ id, name, handle, location, photo }) => (
						<Card.Root
							key={id}
							initial="initial"
							animate="animate"
							exit="exit"
							variants={cardRootVariants}
							custom={{ path: { prevPath, currentPath }, handle }}
							transition={{ ease: ease.one, duration: 0.5 }}
							onAnimationComplete={() => setCanScroll((prevVal) => [...prevVal, true])}
						>
							<Card.Link
								href={`/models/${handle}`}
								layoutId={`model_thumbnail_${handle}`}
								onLayoutAnimationComplete={() => setCanScroll((prevVal) => [...prevVal, true])}
							>
								<Card.Image
									formats={photo.formats}
									caption={photo.caption}
									layoutId={`model_image_${handle}`}
								/>
							</Card.Link>
							<Card.Caption
								initial="initial"
								animate="animate"
								exit="exit"
								variants={cardCaptionVariants}
								custom={{ path: { prevPath, currentPath }, handle }}
								transition={{ ease: ease.one, duration: 0.5 }}
								onAnimationComplete={() => setCanScroll((prevVal) => [...prevVal, true])}
							>
								<p>{name}</p>
								<p>
									{location._latitude}&nbsp;&nbsp;{location._longitude}
								</p>
							</Card.Caption>
						</Card.Root>
					))}
				</section>
			</article>
		</>
	);
}
