import { Code2, PackageCheck, UsersRound } from "lucide-react";
import { CountUp } from "#/components/stats/count-up";
import { Container } from "#/components/ui/container";

const stats = [
	{ icon: PackageCheck, value: "15+", label: "Products Delivered" },
	{ icon: Code2, value: "10+", label: "Years Building Software" },
	{ icon: UsersRound, value: "9+", label: "Years Leading Engineering Teams" },
] as const;

export function StatsSection() {
	return (
		<section className="relative -mt-px w-full bg-primary text-accent">
			<Container className="grid grid-cols-1 gap-16 py-24 md:grid-cols-2 md:items-center md:gap-24">
				<div className="flex flex-col gap-6">
					<h2 className="font-moon text-xl font-bold font-light sm:text-2xl">
						Technology should accelerate your business - not slow it down
					</h2>
					<p className="text-lg text-accent/90">
						Building software is easy. Building software that supports a growing
						business is hard.
					</p>
					<p className="text-lg text-accent/90">
						I help startups and enterprises bridge business strategy and
						technical execution through software architecture, full-stack
						product development, and engineering leadership.
					</p>
					<p className="text-lg text-accent/90">
						Whether you're validating an idea, scaling an existing platform, or
						growing an engineering team, I bring the experience to help you move
						forward with confidence.
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
	);
}
