import { useInView } from "#/hooks/use-in-view";

type ZigzagDividerProps = {
	className?: string;
	/** Total width of the zigzag in pixels. */
	width?: number;
	/** Draw duration in milliseconds. */
	durationMs?: number;
};

const TEETH = 12;
const AMPLITUDE = 10;
const STROKE = 2.5;

/**
 * Small decorative zigzag line used as a section separator.
 * Draws itself when scrolled into view; colored via `currentColor`,
 * so set the text color on a wrapper.
 */
export function ZigzagDivider({
	className = "",
	width = 150,
	durationMs = 900,
}: ZigzagDividerProps) {
	const [ref, inView] = useInView<SVGSVGElement>({ threshold: 0.6 });

	const step = width / TEETH;
	const points = Array.from({ length: TEETH + 1 }, (_, i) => {
		const x = i * step;
		const y = i % 2 === 0 ? AMPLITUDE : 0;
		return `${x} ${y}`;
	});
	const d = `M ${points.join(" L ")}`;

	return (
		<svg
			ref={ref}
			className={className}
			width={width}
			height={AMPLITUDE + STROKE}
			viewBox={`${-STROKE / 2} ${-STROKE / 2} ${width + STROKE} ${AMPLITUDE + STROKE}`}
			fill="none"
			role="presentation"
			aria-hidden="true"
		>
			<path
				d={d}
				stroke="currentColor"
				strokeWidth={STROKE}
				strokeLinecap="round"
				strokeLinejoin="round"
				pathLength={1}
				strokeDasharray={1}
				strokeDashoffset={inView ? 0 : 1}
				style={{
					transition: `stroke-dashoffset ${durationMs}ms cubic-bezier(0.65, 0, 0.35, 1)`,
				}}
				className="motion-reduce:transition-none"
			/>
		</svg>
	);
}
