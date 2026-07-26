import loraNormal from "@fontsource/lora/files/lora-latin-400-normal.woff2?url";
import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

import { env } from "../env";
import moonBold from "../fonts/MoonBold.woff2?url";
import moonLight from "../fonts/MoonLight.woff2?url";
import appCss from "../styles.css?url";

const SITE_URL = env.VITE_SITE_URL ?? "https://fransaycon.dev";
const SITE_TITLE = "Franrey Saycon — Software Architect & Engineering Leader";
const SITE_DESCRIPTION =
	"I help startups and enterprises bridge business strategy and technical execution through software architecture, full-stack product development, and engineering leadership.";
const SOCIAL_IMAGE = `${SITE_URL}/social-preview.png`;

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ title: SITE_TITLE },
			{ name: "description", content: SITE_DESCRIPTION },
			{ name: "author", content: "Franrey Saycon" },
			{ name: "theme-color", content: "#15616D" },
			// Open Graph (Facebook, LinkedIn, Slack, etc.)
			{ property: "og:type", content: "website" },
			{ property: "og:site_name", content: "Franrey Saycon" },
			{ property: "og:title", content: SITE_TITLE },
			{ property: "og:description", content: SITE_DESCRIPTION },
			{ property: "og:url", content: SITE_URL },
			{ property: "og:image", content: SOCIAL_IMAGE },
			{ property: "og:image:width", content: "1200" },
			{ property: "og:image:height", content: "630" },
			{ property: "og:image:alt", content: "Franrey Saycon" },
			// Twitter / X
			{ name: "twitter:card", content: "summary_large_image" },
			{ name: "twitter:title", content: SITE_TITLE },
			{ name: "twitter:description", content: SITE_DESCRIPTION },
			{ name: "twitter:image", content: SOCIAL_IMAGE },
		],
		links: [
			{
				rel: "preload",
				as: "font",
				type: "font/woff2",
				href: moonLight,
				crossOrigin: "anonymous",
			},
			{
				rel: "preload",
				as: "font",
				type: "font/woff2",
				href: moonBold,
				crossOrigin: "anonymous",
			},
			{
				rel: "preload",
				as: "font",
				type: "font/woff2",
				href: loraNormal,
				crossOrigin: "anonymous",
			},
			{ rel: "stylesheet", href: appCss },
			{ rel: "canonical", href: SITE_URL },
			{ rel: "manifest", href: "/site.webmanifest" },
			{ rel: "icon", href: "/favicon.ico", sizes: "any" },
			{
				rel: "icon",
				type: "image/png",
				sizes: "32x32",
				href: "/favicon-32x32.png",
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "16x16",
				href: "/favicon-16x16.png",
			},
			{ rel: "apple-touch-icon", sizes: "180x180", href: "/apple-icon.png" },
		],
	}),
	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body>
				{children}
				{import.meta.env.DEV && (
					<TanStackDevtools
						config={{
							position: "bottom-right",
						}}
						plugins={[
							{
								name: "Tanstack Router",
								render: <TanStackRouterDevtoolsPanel />,
							},
						]}
					/>
				)}
				<Scripts />
			</body>
		</html>
	);
}
