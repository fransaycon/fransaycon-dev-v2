import { createFileRoute } from "@tanstack/react-router";
import { ContactSection } from "../components/contact/contact-section";
import { HeroSection } from "../components/hero/hero-section";
import { ProjectsSection } from "../components/projects/projects-section";
import { StatsSection } from "../components/stats/stats-section";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	return (
		<>
			<HeroSection />
			<StatsSection />
			<ProjectsSection />
			<ContactSection />
		</>
	);
}
