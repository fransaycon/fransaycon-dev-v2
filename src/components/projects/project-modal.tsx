import { ExternalLink, X } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { BlurImage } from "#/components/ui/blur-image";
import {
	type Project,
	techCategoryLabels,
	techCategoryStyles,
} from "#/data/projects";

type ProjectModalProps = {
	project: Project;
	onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
	const dialogRef = useRef<HTMLDivElement>(null);
	const headingId = `project-${project.id}-title`;

	useEffect(() => {
		const onKey = (event: KeyboardEvent) => {
			if (event.key === "Escape") onClose();
		};
		document.addEventListener("keydown", onKey);

		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		dialogRef.current?.focus();

		return () => {
			document.removeEventListener("keydown", onKey);
			document.body.style.overflow = previousOverflow;
		};
	}, [onClose]);

	if (typeof document === "undefined") return null;

	return createPortal(
		<div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
			<motion.button
				type="button"
				aria-label="Close project details"
				onClick={onClose}
				className="absolute inset-0 bg-secondary/60 backdrop-blur-sm"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
			/>

			<motion.div
				ref={dialogRef}
				layoutId={`project-${project.id}`}
				role="dialog"
				aria-modal="true"
				aria-labelledby={headingId}
				tabIndex={-1}
				className="relative z-10 flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl bg-white text-left shadow-2xl outline-none"
			>
				<motion.div
					layoutId={`project-${project.id}-preview`}
					className="h-40 shrink-0 overflow-hidden"
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

				<button
					type="button"
					onClick={onClose}
					aria-label="Close"
					className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-secondary shadow-sm transition-colors hover:bg-white"
				>
					<X className="h-5 w-5" aria-hidden="true" />
				</button>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, transition: { delay: 0.15 } }}
					exit={{ opacity: 0 }}
					className="overflow-y-auto p-6 sm:p-8"
				>
					<h3
						id={headingId}
						className="font-moon text-2xl font-bold text-primary"
					>
						{project.name}
					</h3>

					{project.website ? (
						<a
							href={project.website}
							target="_blank"
							rel="noreferrer"
							className="mt-1.5 inline-flex items-center gap-1.5 font-space text-sm font-medium text-primary transition-colors hover:text-primary/70"
						>
							{project.website.replace(/^https?:\/\//, "")}
							<ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
						</a>
					) : null}

					<Section title="Product Context">
						<p className="text-base text-secondary/80">
							{project.productContext}
						</p>
					</Section>

					<Section title="Engineering Challenges">
						<p className="text-base text-secondary/80">
							{project.engineeringChallenges}
						</p>
					</Section>

					<Section title="My Contributions">
						<ul className="list-disc space-y-1 pl-5 text-base text-secondary/80">
							{project.contributions.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
					</Section>

					<Section title="Technologies Used">
						<ul className="flex flex-wrap gap-2">
							{project.tech.map((tech) => (
								<li
									key={tech.name}
									className={`rounded-md px-2.5 py-1 text-sm font-medium ring-1 ring-inset ${techCategoryStyles[tech.category]}`}
									title={techCategoryLabels[tech.category]}
								>
									{tech.name}
								</li>
							))}
						</ul>
					</Section>
				</motion.div>
			</motion.div>
		</div>,
		document.body,
	);
}

function Section({
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}) {
	return (
		<div className="mt-6">
			<h4 className="font-space text-xs font-bold uppercase tracking-wider text-secondary/50">
				{title}
			</h4>
			<div className="mt-2">{children}</div>
		</div>
	);
}
