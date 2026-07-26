/** Deterministic PRNG (mulberry32) so waves render identically on server + client. */
function createRandom(seed: number) {
	let state = seed >>> 0;
	return () => {
		state |= 0;
		state = (state + 0x6d2b79f5) | 0;
		let t = Math.imul(state ^ (state >>> 15), 1 | state);
		t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
		return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
	};
}

/**
 * Builds a seamless, horizontally-repeating wave path filled to the bottom.
 * Each hump within a single `period` gets a seeded-random amplitude, and that
 * same sequence is tiled across the width — so it looks irregular yet still
 * loops perfectly when the group is translated left by exactly `period`.
 */
function buildWavePath(
	width: number,
	height: number,
	baseline: number,
	amplitude: number,
	period: number,
	humpsPerPeriod: number,
	seed: number,
) {
	const random = createRandom(seed);
	// Randomized amplitude factors for one period, then tiled for seamlessness.
	const factors = Array.from(
		{ length: humpsPerPeriod },
		() => 0.45 + random() * 0.55,
	);

	const humpWidth = period / humpsPerPeriod;
	let d = `M0 ${baseline}`;
	let x = 0;
	let i = 0;

	while (x < width) {
		const factor = factors[i % humpsPerPeriod];
		const up = i % 2 === 0;
		const controlX = x + humpWidth / 2;
		const endX = x + humpWidth;
		const peak = amplitude * factor;
		const controlY = up ? baseline - peak : baseline + peak;
		d += ` Q ${controlX} ${controlY} ${endX} ${baseline}`;
		x = endX;
		i += 1;
	}

	return `${d} L ${x} ${height} L 0 ${height} Z`;
}

const HEIGHT = 150;
const VIEW_WIDTH = 1440;
const DRAW_WIDTH = VIEW_WIDTH * 2;

const waves = [
	{
		baseline: 70,
		amplitude: 18,
		period: 1600,
		humpsPerPeriod: 2,
		duration: 12,
		opacity: 0.3,
		seed: 1337,
	},
	{
		baseline: 82,
		amplitude: 24,
		period: 1280,
		humpsPerPeriod: 2,
		duration: 9,
		opacity: 0.6,
		seed: 8675309,
	},
	{
		baseline: 95,
		amplitude: 14,
		period: 960,
		humpsPerPeriod: 2,
		duration: 7,
		opacity: 1,
		seed: 42,
	},
] as const;

export function WaveDivider() {
	return (
		<div className="pointer-events-none absolute bottom-0 left-0 h-[150px] w-full overflow-hidden">
			<svg
				className="block h-[150px] w-full"
				viewBox={`0 0 ${VIEW_WIDTH} ${HEIGHT}`}
				preserveAspectRatio="xMidYMax slice"
				role="presentation"
				aria-hidden="true"
			>
				{waves.map((wave) => (
					<g key={wave.seed}>
						<animateTransform
							attributeName="transform"
							type="translate"
							from="0 0"
							to={`-${wave.period} 0`}
							dur={`${wave.duration}s`}
							repeatCount="indefinite"
						/>
						<path
							d={buildWavePath(
								DRAW_WIDTH,
								HEIGHT,
								wave.baseline,
								wave.amplitude,
								wave.period,
								wave.humpsPerPeriod,
								wave.seed,
							)}
							fill="var(--main-blue)"
							fillOpacity={wave.opacity}
						/>
					</g>
				))}
			</svg>
		</div>
	);
}
