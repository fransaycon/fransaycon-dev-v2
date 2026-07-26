import coachingPreview from "../project-files/coaching.webp";
import ezuPreview from "../project-files/ezu.webp";
import heathPreview from "../project-files/heath.webp";
import longinaPreview from "../project-files/longina.webp";
import mycyberonPreview from "../project-files/mycyberon.webp";
import newdawnPreview from "../project-files/newdawn.webp";
import psychedelicsPreview from "../project-files/psychedelics.webp";
import psypayPreview from "../project-files/psypay.webp";
import purchasedPreview from "../project-files/purchased.webp";
import salimbayPreview from "../project-files/salimbay.webp";
import startconPreview from "../project-files/startcon.webp";
import termsPreview from "../project-files/terms.webp";
import viperbytesPreview from "../project-files/viperbytes.webp";
import wear2earnPreview from "../project-files/wear2earn.webp";
import wftbPreview from "../project-files/wftb.webp";
import { lqip } from "./lqip.generated";

export type TechCategory = "frontend" | "backend" | "infra" | "language";

export type Tech = {
	name: string;
	category: TechCategory;
};

export type Project = {
	id: string;
	name: string;
	/** Public URL of the live project, if one exists. */
	website?: string;
	/** Imported preview image URL. */
	image?: string;
	/** Base64 blur-up placeholder shown while the image loads. */
	blur?: string;
	/** Tailwind gradient classes used as a fallback preview tile. */
	preview: string;
	productContext: string;
	engineeringChallenges: string;
	contributions: string[];
	tech: Tech[];
};

/** Chip styling per tech category. */
export const techCategoryStyles: Record<TechCategory, string> = {
	frontend: "bg-sky-100 text-sky-700 ring-sky-600/20",
	backend: "bg-emerald-100 text-emerald-700 ring-emerald-600/20",
	infra: "bg-amber-100 text-amber-700 ring-amber-600/20",
	language: "bg-violet-100 text-violet-700 ring-violet-600/20",
};

export const techCategoryLabels: Record<TechCategory, string> = {
	frontend: "Frontend",
	backend: "Backend",
	infra: "Infra",
	language: "Language",
};

export const projects: Project[] = [
	{
		id: "terms",
		name: "Terms",
		website: "https://terms.com.au",
		image: termsPreview,
		blur: lqip.terms,
		preview: "from-sky-500 to-indigo-600",
		productContext:
			"A private credit origination platform that streamlines borrower onboarding, credit assessment, and deal execution for private lenders.",
		engineeringChallenges:
			"Built a scalable multi-tenant platform with strict tenant isolation, AI automations, balancing security, maintainability, and rapid product evolution.",
		contributions: [
			"Architected the entire system and tenant isolation strategy.",
			"Sole backend developer and developed the AI strategy and integrations.",
			"Contributed to frontend development.",
			"Primary technical consultant for stakeholders, influencing product direction, release planning, and technical decisions.",
			"Bridged business requirements with scalable technical solutions.",
		],
		tech: [
			{ name: "React", category: "frontend" },
			{ name: "JavaScript", category: "language" },
			{ name: "TypeScript", category: "language" },
			{ name: "Fastify", category: "backend" },
			{ name: "PostgreSQL", category: "backend" },
			{ name: "Redis", category: "backend" },
			{ name: "Render", category: "infra" },
			{ name: "Vercel", category: "infra" },
		],
	},
	{
		id: "purchased",
		name: "Purchased",
		website: "https://purchased.com.au",
		image: purchasedPreview,
		blur: lqip.purchased,
		preview: "from-emerald-500 to-teal-600",
		productContext:
			"A property acquisition platform that streamlines the buyer journey from onboarding and compliance through property acquisition for Australian buyers' agencies.",
		engineeringChallenges:
			"Integrated external legal and compliance workflows such as KYC and payments while supporting white-label deployments and a seamless experience across the marketing website and product platform.",
		contributions: [
			"Led and architected the entire platform.",
			"Contributed across both frontend and backend development.",
			"Primary technical consultant for stakeholders, influencing product direction, release planning, and technical decisions.",
			"Bridged business requirements with scalable technical solutions.",
			"Established the overall technical architecture and engineering standards.",
		],
		tech: [
			{ name: "React", category: "frontend" },
			{ name: "JavaScript", category: "language" },
			{ name: "TypeScript", category: "language" },
			{ name: "Fastify", category: "backend" },
			{ name: "PostgreSQL", category: "backend" },
			{ name: "Redis", category: "backend" },
			{ name: "Render", category: "infra" },
			{ name: "Vercel", category: "infra" },
		],
	},
	{
		id: "longina",
		name: "Longina Phillips",
		website: "https://shop.longinaphillips.com",
		image: longinaPreview,
		blur: lqip.longina,
		preview: "from-amber-500 to-orange-600",
		productContext:
			"A digital design marketplace where brands and businesses can securely purchase and download premium fashion and textile design assets from Longina Phillips.",
		engineeringChallenges:
			"Built a secure marketplace capable of handling large asset uploads and downloads, multi-currency, protecting intellectual property through watermarking, supporting a growing design catalog, and maintaining separate marketplace and admin applications with strict data boundaries.",
		contributions: [
			"Led and architected the entire platform.",
			"Sole backend developer.",
			"Contributed to frontend development.",
			"Primary technical consultant for stakeholders, influencing product direction, release planning, and technical decisions.",
			"Bridged business requirements with scalable technical solutions.",
			"Established the overall technical architecture and engineering standards.",
		],
		tech: [
			{ name: "React", category: "frontend" },
			{ name: "JavaScript", category: "language" },
			{ name: "TypeScript", category: "language" },
			{ name: "Fastify", category: "backend" },
			{ name: "PostgreSQL", category: "backend" },
			{ name: "Redis", category: "backend" },
			{ name: "Render", category: "infra" },
			{ name: "Netlify", category: "infra" },
		],
	},
	{
		id: "newdawn",
		name: "New Dawn",
		website: "https://newdawn.xyz",
		image: newdawnPreview,
		blur: lqip.newdawn,
		preview: "from-violet-500 to-purple-600",
		productContext:
			"A Web3 collectibles marketplace where users can discover, purchase, and manage digital collectibles through both traditional payments and blockchain transactions.",
		engineeringChallenges:
			"Built a high-scale marketplace supporting collection-specific business logic, heavy scraper and launch-day traffic, hybrid FIAT and blockchain payments, smart contract integration, and asynchronous blockchain transaction workflows.",
		contributions: [
			"Led and architected the entire platform.",
			"Sole backend developer.",
			"Contributed to frontend development.",
			"Designed and implemented the integration with Ethereum smart contracts.",
			"Coordinated with external blockchain and engineering teams to deliver end-to-end platform integrations.",
			"Primary technical consultant for stakeholders, influencing product direction, release planning, and technical decisions.",
			"Bridged business requirements with scalable technical solutions.",
			"Established the overall technical architecture and engineering standards.",
			"Planned and executed the end-to-end technical handover to the new development team following the acquisition.",
		],
		tech: [
			{ name: "React", category: "frontend" },
			{ name: "JavaScript", category: "language" },
			{ name: "TypeScript", category: "language" },
			{ name: "Fastify", category: "backend" },
			{ name: "PostgreSQL", category: "backend" },
			{ name: "Redis", category: "backend" },
			{ name: "Render", category: "infra" },
			{ name: "Netlify", category: "infra" },
			{ name: "Viem", category: "frontend" },
			{ name: "Wagmi", category: "frontend" },
		],
	},
	{
		id: "psychedelics-anonymous",
		name: "Psychedelics Anonymous",
		website: "https://psychedelicsanonymous.xyz",
		image: psychedelicsPreview,
		blur: lqip.psychedelics,
		preview: "from-fuchsia-500 to-purple-600",
		productContext:
			"The official platform for the Psychedelics Anonymous NFT ecosystem, providing collection information, minting experiences, and community engagement across multiple NFT collections.",
		engineeringChallenges:
			"Built a feature-rich Web3 platform supporting multiple collections with custom minting logic, blockchain interactions, animation-heavy user experiences, and secure game integrations resistant to client-side abuse.",
		contributions: [
			"Led and architected the entire platform.",
			"Developed the entire application across frontend and backend.",
			"Designed and implemented the blockchain integrations for minting and smart contract interactions.",
			"Built the animation-heavy frontend experience.",
			"Primary technical consultant for stakeholders, influencing product direction, release planning, and technical decisions.",
			"Bridged business requirements with scalable technical solutions.",
			"Established the overall technical architecture and engineering standards.",
			"Planned and executed the end-to-end technical handover to the new development team following the acquisition.",
		],
		tech: [
			{ name: "Next.js", category: "frontend" },
			{ name: "React", category: "frontend" },
			{ name: "JavaScript", category: "language" },
			{ name: "TypeScript", category: "language" },
			{ name: "Fastify", category: "backend" },
			{ name: "MongoDB", category: "backend" },
			{ name: "Netlify", category: "infra" },
			{ name: "Viem", category: "frontend" },
			{ name: "Wagmi", category: "frontend" },
		],
	},
	{
		id: "work-for-the-best",
		name: "Work For The Best",
		website: "https://workforthebest.com.au",
		image: wftbPreview,
		blur: lqip.wftb,
		preview: "from-cyan-500 to-blue-600",
		productContext:
			"A curated job discovery platform that connects professionals with handpicked companies and delivers personalized job notifications based on their preferences.",
		engineeringChallenges:
			"Built a scalable notification system and an AI-powered matching engine with AI automations to recommend newly listed companies based on each user's selected criteria.",
		contributions: [
			"Led and architected the entire platform.",
			"Contributed across both frontend and backend development.",
			"Primary technical consultant for stakeholders, influencing product direction, release planning, and technical decisions.",
			"Bridged business requirements with scalable technical solutions.",
			"Established the overall technical architecture and engineering standards.",
		],
		tech: [
			{ name: "Next.js", category: "frontend" },
			{ name: "React", category: "frontend" },
			{ name: "JavaScript", category: "language" },
			{ name: "TypeScript", category: "language" },
			{ name: "MongoDB", category: "backend" },
			{ name: "Vercel", category: "infra" },
		],
	},
	{
		id: "pa-coaching",
		name: "PA Coaching",
		image: coachingPreview,
		blur: lqip.coaching,
		preview: "from-rose-500 to-pink-600",
		productContext:
			"A community coaching platform that connects members with mentors through one-on-one coaching sessions, wellness seminars, and educational programs focused on blockchain and other community-driven skills.",
		engineeringChallenges:
			"Integrated scheduling, calendar synchronization, and video conferencing services to deliver a seamless booking and coaching experience.",
		contributions: [
			"Led and architected the platform.",
			"Contributed across both frontend and backend development.",
			"Primary technical consultant for stakeholders, influencing product direction, release planning, and technical decisions.",
			"Bridged business requirements with scalable technical solutions.",
			"Established the overall technical architecture and engineering standards.",
		],
		tech: [
			{ name: "Next.js", category: "frontend" },
			{ name: "React", category: "frontend" },
			{ name: "JavaScript", category: "language" },
			{ name: "TypeScript", category: "language" },
			{ name: "MongoDB", category: "backend" },
			{ name: "Vercel", category: "infra" },
		],
	},
	{
		id: "heath-williams",
		name: "Heath Williams",
		image: heathPreview,
		blur: lqip.heath,
		preview: "from-slate-500 to-gray-700",
		productContext:
			"A real estate marketing website that showcases property listings with search and filtering capabilities synchronized with the agency's inventory.",
		engineeringChallenges:
			"Integrated with REX Software to keep property listings, sale statuses, and listing information synchronized in near real time.",
		contributions: [
			"Led and architected the platform.",
			"Contributed across both frontend and backend development.",
			"Primary technical consultant for stakeholders, influencing product direction, release planning, and technical decisions.",
			"Bridged business requirements with scalable technical solutions.",
			"Established the overall technical architecture and engineering standards.",
		],
		tech: [
			{ name: "Next.js", category: "frontend" },
			{ name: "React", category: "frontend" },
			{ name: "JavaScript", category: "language" },
			{ name: "TypeScript", category: "language" },
			{ name: "MongoDB", category: "backend" },
			{ name: "Vercel", category: "infra" },
		],
	},
	{
		id: "psypay",
		name: "PsyPay",
		website: "psypay.xyz",
		image: psypayPreview,
		blur: lqip.psypay,
		preview: "from-indigo-500 to-violet-600",
		productContext:
			"A community rewards platform that enables members to earn, manage, and spend reward credits across the Psychedelics Anonymous ecosystem.",
		engineeringChallenges:
			"Built a real-time rewards and payment system while exposing reusable payment services that could be integrated seamlessly across multiple community products.",
		contributions: [
			"Led and architected the entire platform.",
			"Contributed across both frontend and backend development.",
			"Primary technical consultant for stakeholders, influencing product direction, release planning, and technical decisions.",
			"Bridged business requirements with scalable technical solutions.",
			"Established the overall technical architecture and engineering standards.",
		],
		tech: [
			{ name: "Next.js", category: "frontend" },
			{ name: "React", category: "frontend" },
			{ name: "JavaScript", category: "language" },
			{ name: "TypeScript", category: "language" },
			{ name: "Fastify", category: "backend" },
			{ name: "PostgreSQL", category: "backend" },
			{ name: "Render", category: "infra" },
			{ name: "Netlify", category: "infra" },
			{ name: "Viem", category: "frontend" },
			{ name: "Wagmi", category: "frontend" },
		],
	},
	{
		id: "ezu",
		name: "EZU",
		website: "https://ezu.xyz",
		image: ezuPreview,
		blur: lqip.ezu,
		preview: "from-teal-500 to-emerald-600",
		productContext:
			"The official platform for the EZU NFT ecosystem, providing collection information and minting experiences for its Solana-based NFT collections.",
		engineeringChallenges:
			"Built a Web3 platform supporting multiple collections with custom minting logic, Solana blockchain interactions, and an animation-heavy user experience.",
		contributions: [
			"Led and architected the entire platform.",
			"Developed the entire frontend application and integration with the Solana contract.",
			"Built the animation-heavy frontend experience.",
			"Primary technical consultant for stakeholders, influencing product direction, release planning, and technical decisions.",
			"Bridged business requirements with scalable technical solutions.",
			"Established the overall technical architecture and engineering standards.",
			"Planned and executed the end-to-end technical handover to the new development team following the acquisition.",
		],
		tech: [
			{ name: "Next.js", category: "frontend" },
			{ name: "React", category: "frontend" },
			{ name: "JavaScript", category: "language" },
			{ name: "TypeScript", category: "language" },
			{ name: "Netlify", category: "infra" },
			{ name: "Viem", category: "frontend" },
			{ name: "Wagmi", category: "frontend" },
		],
	},
	{
		id: "viperbytes",
		name: "ViperBytes",
		website: "https://viperbytes.xyz",
		image: viperbytesPreview,
		blur: lqip.viperbytes,
		preview: "from-lime-500 to-green-600",
		productContext:
			"The official platform for the ViperBytes NFT ecosystem, providing collection information and minting experiences for its Ethereum-based NFT collections.",
		engineeringChallenges:
			"Built a Web3 frontend supporting custom minting logic, Ethereum blockchain interactions, and a responsive user experience for high-volume NFT drops.",
		contributions: [
			"Developed the entire frontend application.",
			"Designed and implemented the Ethereum smart contract.",
			"Integrated the frontend with the smart contract for the complete minting experience.",
			"Primary technical consultant for stakeholders, influencing product direction, release planning, and technical decisions.",
		],
		tech: [
			{ name: "Next.js", category: "frontend" },
			{ name: "React", category: "frontend" },
			{ name: "JavaScript", category: "language" },
			{ name: "TypeScript", category: "language" },
			{ name: "Solidity", category: "language" },
			{ name: "Viem", category: "frontend" },
			{ name: "Wagmi", category: "frontend" },
		],
	},
	{
		id: "wear-2-earn",
		name: "Wear 2 Earn",
		image: wear2earnPreview,
		blur: lqip.wear2earn,
		preview: "from-orange-500 to-red-600",
		productContext:
			"A backend platform powering the Wear 2 Earn ecosystem, enabling mobile applications to manage royalty rewards, NFC-enabled products, and community credit transactions.",
		engineeringChallenges:
			"Built a secure and scalable backend for real-time reward processing and NFC data management, while delivering the platform within a two-week recovery timeline following a failed vendor implementation.",
		contributions: [
			"Led and architected the backend platform.",
			"Sole backend developer.",
			"Primary technical consultant for stakeholders, influencing technical direction, release planning, and delivery strategy.",
			"Bridged business requirements with scalable technical solutions.",
			"Established the backend architecture and engineering standards.",
			"Planned and executed the end-to-end technical handover to the new development team following the acquisition.",
		],
		tech: [
			{ name: "Fastify", category: "backend" },
			{ name: "PostgreSQL", category: "backend" },
			{ name: "Render", category: "infra" },
		],
	},
	{
		id: "mycyberon",
		name: "MyCyberOn",
		image: mycyberonPreview,
		blur: lqip.mycyberon,
		preview: "from-blue-500 to-indigo-600",
		productContext:
			"A cybersecurity analytics platform that aggregates security assessment data into actionable dashboards and reports for organizations to monitor their security posture.",
		engineeringChallenges:
			"Designed an ETL pipeline and data warehouse capable of preserving historical data while powering production-ready APIs and chart-heavy dashboards with large volumes of cybersecurity data.",
		contributions: [
			"Led the architecture of the ETL pipeline and data warehouse.",
			"Sole frontend developer.",
			"Sole ETL developer.",
			"Contributed to backend development.",
			"Designed the messaging workflow for reliable data ingestion and processing.",
			"Bridged business requirements with scalable technical solutions.",
		],
		tech: [
			{ name: "React", category: "frontend" },
			{ name: "D3.js", category: "frontend" },
			{ name: "Python", category: "language" },
			{ name: "Flask", category: "backend" },
			{ name: "RabbitMQ", category: "backend" },
			{ name: "PostgreSQL", category: "backend" },
		],
	},
	{
		id: "upcm-yearbook-2021",
		name: "UPCM Yearbook 2021",
		image: salimbayPreview,
		blur: lqip.salimbay,
		preview: "from-pink-500 to-rose-600",
		productContext:
			"A digital yearbook website showcasing the graduating class of the University of the Philippines College of Medicine 2021, featuring graduate profiles, photographs, and testimonials.",
		engineeringChallenges:
			"Designed and developed a responsive, media-rich experience that presented hundreds of graduate profiles in an intuitive and engaging format.",
		contributions: [
			"Designed the entire user experience and interface.",
			"Sole frontend developer.",
			"Collaborated with stakeholders to translate the yearbook vision into a polished digital experience.",
		],
		tech: [
			{ name: "Gatsby", category: "frontend" },
			{ name: "React", category: "frontend" },
			{ name: "JavaScript", category: "language" },
			{ name: "TypeScript", category: "language" },
			{ name: "Netlify", category: "infra" },
		],
	},
	{
		id: "startcon",
		name: "StartCon Mobile App",
		image: startconPreview,
		blur: lqip.startcon,
		preview: "from-amber-500 to-yellow-600",
		productContext:
			"A mobile companion application for StartCon, enabling conference attendees to browse event information, schedules, speakers, and conference content.",
		engineeringChallenges:
			"Integrated the mobile application with a proprietary API to deliver reliable, real-time conference data throughout the event.",
		contributions: [
			"Contributed to the mobile application architecture.",
			"Developed the application using React Native alongside another engineer.",
			"Collaborated with stakeholders to translate conference requirements into a seamless mobile experience.",
			"Bridged business requirements with scalable technical solutions.",
		],
		tech: [
			{ name: "React Native", category: "frontend" },
			{ name: "JavaScript", category: "language" },
			{ name: "TypeScript", category: "language" },
		],
	},
];
