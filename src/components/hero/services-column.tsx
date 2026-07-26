import { Boxes, DraftingCompass, Users } from "lucide-react";
import { Fragment } from "react";

const services = [
	{
		icon: DraftingCompass,
		title: "Software Engineering",
		description: "Translate business goals into scalable technical solutions",
	},
	{
		icon: Boxes,
		title: "Product Development",
		description:
			"Build full-stack applications from MVP to production deployment",
	},
	{
		icon: Users,
		title: "Engineering Leadership",
		description:
			"Grow engineering teams, processes, and technical direction from the ground up",
	},
] as const;

export function ServiceColumns() {
	return (
		<div className="mt-16 flex w-full max-w-6xl flex-col items-center md:flex-row md:items-stretch">
			{services.map((service, index) => (
				<Fragment key={service.title}>
					{index > 0 && (
						<div className="h-px w-[80%] bg-secondary/20 md:h-auto md:w-px md:self-stretch md:scale-y-[0.8]" />
					)}
					<div className="flex flex-1 flex-col items-center px-10 py-10 text-center md:py-0">
						<service.icon
							className="h-10 w-10 text-primary"
							strokeWidth={1.5}
							aria-hidden="true"
						/>
						<h3 className="mt-6 font-moon text-xl font-bold text-primary">
							{service.title}
						</h3>
						<p className="mt-3 max-w-xs text-base text-secondary/80">
							{service.description}
						</p>
					</div>
				</Fragment>
			))}
		</div>
	);
}
