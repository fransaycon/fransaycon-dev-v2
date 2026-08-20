import { projects } from "#/data/projects";

const SITE_URL = "https://fransaycon.dev";

function toHttps(website: string) {
	return `https://${website.replace(/^https?:\/\//, "")}`;
}

export function ProjectsSeo() {
	const itemList = {
		"@context": "https://schema.org",
		"@type": "ItemList",
		name: "Projects by Franrey Saycon",
		itemListElement: projects.map((project, index) => ({
			"@type": "ListItem",
			position: index + 1,
			item: {
				"@type": "CreativeWork",
				name: project.name,
				...(project.website ? { url: toHttps(project.website) } : {}),
				abstract: project.productContext,
				description: project.engineeringChallenges,
				keywords: project.tech.map((t) => t.name).join(", "),
				creator: {
					"@type": "Person",
					name: "Franrey Saycon",
					url: SITE_URL,
				},
			},
		})),
	};

	return (
		<>
			<script
				type="application/ld+json"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD is serialized, non-user data.
				dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
			/>
			<div className="sr-only" aria-hidden="true">
				<h2>Projects by Franrey Saycon</h2>
				<ul>
					{projects.map((project) => (
						<li key={project.id}>
							<h3>{project.name}</h3>
							<p>{project.productContext}</p>
							<p>{project.engineeringChallenges}</p>
							<h4>Contributions</h4>
							<ul>
								{project.contributions.map((contribution) => (
									<li key={contribution}>{contribution}</li>
								))}
							</ul>
							<h4>Technologies</h4>
							<p>{project.tech.map((t) => t.name).join(", ")}</p>
							{project.website ? (
								<p>Website: {toHttps(project.website)}</p>
							) : null}
						</li>
					))}
				</ul>
			</div>
		</>
	);
}
