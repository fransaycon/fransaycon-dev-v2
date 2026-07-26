import { type RefObject, useEffect, useRef, useState } from "react";

type UseInViewOptions = {
	/** Fraction of the element that must be visible to trigger. */
	threshold?: number;
	/** Margin around the root, e.g. "0px 0px -10% 0px". */
	rootMargin?: string;
	/** When true, only fires the first time the element enters view. */
	once?: boolean;
};

/**
 * Tracks whether an element is within the viewport using IntersectionObserver.
 * Returns a ref to attach and a boolean for the in-view state.
 */
export function useInView<T extends Element = HTMLDivElement>({
	threshold = 0.3,
	rootMargin = "0px",
	once = true,
}: UseInViewOptions = {}): [RefObject<T | null>, boolean] {
	const ref = useRef<T>(null);
	const [inView, setInView] = useState(false);

	useEffect(() => {
		const element = ref.current;
		if (!element || typeof IntersectionObserver === "undefined") return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setInView(true);
					if (once) observer.disconnect();
				} else if (!once) {
					setInView(false);
				}
			},
			{ threshold, rootMargin },
		);

		observer.observe(element);
		return () => observer.disconnect();
	}, [threshold, rootMargin, once]);

	return [ref, inView];
}
