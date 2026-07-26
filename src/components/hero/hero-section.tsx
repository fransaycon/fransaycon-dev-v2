import { useLottie } from "lottie-react";
import { useEffect, useState } from "react";
import logoAnimation from "#/animation/logo-lottie.json";
import { ServiceColumns } from "#/components/hero/services-column";
import { WaveDivider } from "#/components/hero/wave-divider";

const yearsOfExperience = new Date().getFullYear() - 2016;

export function HeroSection() {
	const { View } = useLottie({ animationData: logoAnimation, loop: false });
	const [revealed, setRevealed] = useState(false);

	useEffect(() => {
		setRevealed(true);
	}, []);

	const reveal = `transition-all duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] ${
		revealed ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
	}`;

	return (
		<div className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-28 pb-56 text-center">
			<div className="h-[160px] w-[160px] sm:h-[220px] sm:w-[220px]">
				{View}
			</div>
			<h1
				className={`mt-6 text-3xl font-bold font-light text-primary font-moon sm:text-4xl [transition-delay:500ms] ${reveal}`}
			>
				Franrey Saycon
			</h1>
			<p
				className={`mt-4 max-w-2xl text-lg text-gray-600 sm:text-xl [transition-delay:1s] ${reveal}`}
			>
				Building and leading enterprise products that scale for{" "}
				{yearsOfExperience}+ years
			</p>
			<ServiceColumns />
			<WaveDivider />
		</div>
	);
}
