import { useEffect, useState } from "react";
import { useInView } from "#/hooks/use-in-view";

const COUNT_DURATION_MS = 1600;

function easeOutExpo(t: number) {
	return t === 1 ? 1 : 1 - 2 ** (-10 * t);
}

export function CountUp({ value }: { value: string }) {
	const match = value.match(/^(\d+)(.*)$/);
	const target = match ? Number(match[1]) : 0;
	const suffix = match ? match[2] : "";
	const [ref, inView] = useInView<HTMLSpanElement>({ threshold: 0.5 });
	const [display, setDisplay] = useState(target);

	useEffect(() => {
		if (!inView) return;

		let frame = 0;
		let start: number | null = null;
		setDisplay(0);

		const tick = (now: number) => {
			if (start === null) start = now;
			const progress = Math.min((now - start) / COUNT_DURATION_MS, 1);
			setDisplay(Math.round(easeOutExpo(progress) * target));
			if (progress < 1) frame = requestAnimationFrame(tick);
		};

		frame = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(frame);
	}, [inView, target]);

	return (
		<span
			ref={ref}
			className="font-space text-5xl font-bold leading-none tracking-tight sm:text-6xl"
		>
			{display}
			{suffix}
		</span>
	);
}
