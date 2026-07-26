type ZigzagDividerProps = {
	className?: string;
	/** Total width of the zigzag in pixels. */
	width?: number;
};

const TEETH = 12;
const AMPLITUDE = 10;
const STROKE = 2.5;

/**
 * Small decorative zigzag line used as a section separator.
 * Colored via `currentColor`, so set the text color on a wrapper.
 */
export function ZigzagDivider({
	className = "",
	width = 150,
}: ZigzagDividerProps) {
	const step = width / TEETH;
	const points = Array.from({ length: TEETH + 1 }, (_, i) => {
		const x = i * step;
		const y = i % 2 === 0 ? AMPLITUDE : 0;
		return `${x} ${y}`;
	});
	const d = `M ${points.join(" L ")}`;

	return (
		<svg
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
			/>
		</svg>
	);
}
