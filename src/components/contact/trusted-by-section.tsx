import { Container } from "#/components/ui/container";
import freelancerLogo from "#/work-logos/freelancer.webp";
import hpEnterpriseLogo from "#/work-logos/hpenterprise.svg";
import phitopolisLogo from "#/work-logos/phitopolis.webp";
import startconLogo from "#/work-logos/startcon.svg";
import telusLogo from "#/work-logos/telus.png";
import volturaLogo from "#/work-logos/voltura.webp";

const logos = [
	{ src: freelancerLogo, alt: "Freelancer.com", className: "max-h-7" },
	{
		src: hpEnterpriseLogo,
		alt: "Hewlett Packard Enterprise",
		className: "max-h-12",
	},
	{ src: phitopolisLogo, alt: "Phitopolis", className: "max-h-8" },
	{ src: startconLogo, alt: "StartCon", className: "max-h-7" },
	{ src: telusLogo, alt: "TELUS International", className: "max-h-16" },
	{ src: volturaLogo, alt: "Voltura Pty Ltd", className: "max-h-14" },
] as const;

export function TrustedBySection() {
	return (
		<section className="w-full py-20">
			<Container className="flex flex-col items-center text-center">
				<h2 className="font-moon text-2xl font-bold text-primary sm:text-3xl">
					Trusted by teams building great products
				</h2>
				<p className="mt-3 max-w-3xl text-md text-secondary/70">
					I've had the privilege of contributing to these companies and products
					throughout my career.
				</p>

				<ul className="mt-14 flex w-full flex-wrap items-center justify-center gap-x-14 gap-y-12 sm:gap-x-20">
					{logos.map((logo) => (
						<li key={logo.alt} className="flex items-center justify-center">
							<img
								src={logo.src}
								alt={logo.alt}
								loading="lazy"
								className={`w-auto object-contain opacity-80 transition duration-300 hover:opacity-100 ${logo.className}`}
							/>
						</li>
					))}
				</ul>
			</Container>
		</section>
	);
}
