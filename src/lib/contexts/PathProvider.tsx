import { useRouter } from "next/router";
import { createContext, useState, type PropsWithChildren, useEffect, useContext } from "react";

type PathContext = {
	prevPath?: string;
	currentPath?: string;
};

const PathContext = createContext<PathContext | undefined>(undefined);

export function PathProvider({ children }: PropsWithChildren) {
	const router = useRouter();

	const [prevPath, setPrevPath] = useState<string>();
	const [currentPath, setCurrentPath] = useState<string>();

	useEffect(() => {
		const handleRouteChange = (url: string) => {
			setPrevPath(router.asPath);
			setCurrentPath(url);
		};

		router.events.on("routeChangeStart", handleRouteChange);

		return () => {
			router.events.off("routeChangeStart", handleRouteChange);
		};
	}, [router.asPath, router.events]);

	return <PathContext.Provider value={{ prevPath, currentPath }}>{children}</PathContext.Provider>;
}

export function usePathContext() {
	const context = useContext(PathContext);

	if (!context) {
		throw new Error("usePathContext must be used inside PathProvider");
	}

	return context;
}
