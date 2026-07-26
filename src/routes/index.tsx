import { createFileRoute } from "@tanstack/react-router";
import { useLottie } from "lottie-react";
import { Code2, PackageCheck, UsersRound } from "lucide-react";
import { useEffect, useState } from "react";
import { ServiceColumns } from "#/components/services-column";
import logoAnimation from "../animation/logo-lottie.json";
import { ContactSection } from "../components/contact-section";
import { Container } from "../components/container";
import { CountUp } from "../components/count-up";
import { ProjectsSection } from "../components/projects-section";
import { WaveDivider } from "../components/wave-divider";

export const Route = createFileRoute("/")({ component: Home });

const yearsOfExperience = new Date().getFullYear() - 2016;

const stats = [
	{ icon: PackageCheck, value: "15+", label: "Products Delivered" },
	{ icon: Code2, value: "10+", label: "Years Building Software" },
	{ icon: UsersRound, value: "9+", label: "Years Leading Engineering Teams" },
] as const;

function Home() {
	const { View } = useLottie({ animationData: logoAnimation, loop: false });
	const [revealed, setRevealed] = useState(false);

	useEffect(() => {
		setRevealed(true);
	}, []);

	const reveal = `transition-all duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] ${
		revealed ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
	}`;

	return (
		<>
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
					{yearsOfExperience}+ years.
				</p>
				<ServiceColumns />
				<WaveDivider />
			</div>
			<section className="w-full bg-primary text-accent">
				<Container className="grid grid-cols-1 gap-16 py-24 md:grid-cols-2 md:items-center md:gap-24">
					<div className="flex flex-col gap-6">
						<h2 className="font-moon text-xl font-bold font-light sm:text-2xl">
							Technology should accelerate your business - not slow it down
						</h2>
						<p className="text-lg text-accent/90">
							Building software is easy. Building software that supports a
							growing business is hard.
						</p>
						<p className="text-lg text-accent/90">
							I help startups and enterprises bridge business strategy and
							technical execution through software architecture, full-stack
							product development, and engineering leadership.
						</p>
						<p className="text-lg text-accent/90">
							Whether you're validating an idea, scaling an existing platform,
							or growing an engineering team, I bring the experience to help you
							move forward with confidence.
						</p>
					</div>
					<div className="flex flex-col gap-8">
						{stats.map((stat) => (
							<div
								key={stat.label}
								className="flex items-center gap-5 rounded-2xl bg-accent/5 p-6 ring-1 ring-accent/10"
							>
								<stat.icon
									className="h-10 w-10 shrink-0 text-accent/70"
									strokeWidth={1.5}
									aria-hidden="true"
								/>
								<div className="flex flex-col gap-1">
									<CountUp value={stat.value} />
									<span className="text-lg text-accent/80">{stat.label}</span>
								</div>
							</div>
						))}
					</div>
				</Container>
			</section>
			<ProjectsSection />
			<ContactSection />
		</>
	);
}
