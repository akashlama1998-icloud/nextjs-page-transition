import { motion, type HTMLMotionProps } from "framer-motion";

export default function CardRoot(props: HTMLMotionProps<"figure">) {
	return <motion.figure className="relative h-fit" {...props} />;
}
