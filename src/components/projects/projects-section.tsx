import { Eye } from "lucide-react";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import { useState } from "react";
import { ProjectModal } from "#/components/projects/project-modal";
import { ProjectsSeo } from "#/components/projects/projects-seo";
import { BlurImage } from "#/components/ui/blur-image";
import { Container } from "#/components/ui/container";
import { type Project, projects } from "#/data/projects";

const INITIAL_COUNT = 6;

export function ProjectsSection() {
	const [showAll, setShowAll] = useState(false);
	const [selected, setSelected] = useState<Project | null>(null);

	const visible = showAll ? projects : projects.slice(0, INITIAL_COUNT);

	return (
		<section className="w-full py-24">
			<ProjectsSeo />
			<LayoutGroup>
				<Container>
					<div className="max-w-3xl">
						<h2 className="mt-3 font-moon text-3xl font-bold font-light text-primary sm:text-4xl">
							My Projects
						</h2>
						<p className="mt-6 font-lora text-base leading-relaxed text-secondary/70 sm:text-rg">
							Over the years, I've architected and delivered products across{" "}
							<span className="font-medium text-secondary">
								enterprise SaaS, AI, blockchain, hybrid mobile, and data
								platforms.
							</span>{" "}
							Different industries, different technologies—but the same focus:{" "}
							<span className="font-medium text-secondary">
								turning complex ideas into reliable software that scales.
							</span>
						</p>
					</div>

					<div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{visible.map((project) => (
							<motion.button
								key={project.id}
								type="button"
								layoutId={`project-${project.id}`}
								onClick={() => setSelected(project)}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								className="group flex flex-col overflow-hidden rounded-2xl bg-white text-left shadow-sm ring-1 ring-secondary/5 transition-shadow hover:shadow-md"
							>
								<motion.div
									layoutId={`project-${project.id}-preview`}
									className="h-40 overflow-hidden"
								>
									{project.image ? (
										<BlurImage
											src={project.image}
											blur={project.blur}
											alt={`${project.name} preview`}
											className="h-full w-full"
										/>
									) : (
										<div
											className={`h-full w-full bg-gradient-to-br ${project.preview}`}
										/>
									)}
								</motion.div>
								<div className="p-4">
									<h3 className="font-space text-sm font-light uppercase tracking-wider text-secondary">
										{project.name}
									</h3>
									<p className="mt-1.5 line-clamp-2 text-xs text-secondary/60">
										{project.productContext}
									</p>
								</div>
							</motion.button>
						))}
					</div>

					{!showAll && projects.length > INITIAL_COUNT && (
						<div className="mt-12 flex justify-center">
							<button
								type="button"
								onClick={() => setShowAll(true)}
								className="group inline-flex items-center gap-2 rounded-full border border-primary px-6 py-2.5 font-moon font-light uppercase tracking-wider text-primary transition-colors duration-300 hover:bg-primary hover:text-accent"
							>
								<Eye
									className="h-4 w-4 transition-transform duration-300 group-hover:scale-110"
									aria-hidden="true"
								/>
								Load more
							</button>
						</div>
					)}
				</Container>

				<AnimatePresence>
					{selected && (
						<ProjectModal
							project={selected}
							onClose={() => setSelected(null)}
						/>
					)}
				</AnimatePresence>
			</LayoutGroup>
		</section>
	);
}
