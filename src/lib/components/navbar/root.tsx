import type { HTMLAttributes } from "react";

export default function NavbarRoot(props: HTMLAttributes<HTMLElement>) {
	return <nav className="container flex justify-between" {...props} />;
}
