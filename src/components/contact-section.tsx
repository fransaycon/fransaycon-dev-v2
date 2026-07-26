import { CheckCircle2, Loader2, Send } from "lucide-react";
import { type FormEvent, useState } from "react";
import { Container } from "#/components/container";
import { TrustedBySection } from "#/components/trusted-by-section";
import { ZigzagDivider } from "#/components/zigzag-divider";
import { env } from "#/env";

type FormStatus = "idle" | "loading" | "success" | "error";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export function ContactSection() {
	const [status, setStatus] = useState<FormStatus>("idle");

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const form = event.currentTarget;
		setStatus("loading");

		const formData = new FormData(form);
		formData.append("access_key", env.VITE_WEB3FORM_ACCESS_KEY ?? "");
		formData.append("subject", "New message from your portfolio");

		try {
			const response = await fetch(WEB3FORMS_ENDPOINT, {
				method: "POST",
				body: formData,
			});
			const data = await response.json();

			if (data.success) {
				form.reset();
				setStatus("success");
			} else {
				setStatus("error");
			}
		} catch {
			setStatus("error");
		}
	};

	return (
		<>
			<div className="flex justify-center py-8 text-primary">
				<ZigzagDivider />
			</div>

			<TrustedBySection />

			<div className="pt-16 md:pt-24" />

			<section className="w-full bg-primary text-accent">
				<Container className="grid grid-cols-1 gap-12 py-20 md:grid-cols-2 md:items-center md:gap-20 md:py-28">
					<div className="flex flex-col gap-6">
						<h2 className="font-moon font-light text-2xl font-bold sm:text-3xl">
							Have a product to build or a team to level up?
						</h2>
						<p className="text-lg text-accent/90">
							The best products start with a conversation. Tell me what you're
							building, and let's figure out how to move it forward - with the
							right architecture, the right people, and the right plan.
						</p>
						<p className="text-lg text-accent/90">
							No pitch, no pressure. Just a genuine chat about your goals.
						</p>
					</div>

					<div className="rounded-3xl bg-accent/5 p-6 ring-1 ring-accent/10 sm:p-8">
						{status === "success" ? (
							<div className="flex flex-col items-start gap-4 py-6 text-left">
								<CheckCircle2
									className="h-12 w-12 text-accent"
									strokeWidth={1.5}
									aria-hidden="true"
								/>
								<h3 className="font-moon text-xl font-bold">
									Thanks for reaching out!
								</h3>
								<p className="text-accent/90">
									Your message is on its way. I'll be in touch shortly - usually
									within a day or two.
								</p>
								<button
									type="button"
									onClick={() => setStatus("idle")}
									className="mt-2 font-space text-sm font-medium text-accent underline underline-offset-4 transition-opacity hover:opacity-70"
								>
									Send another message
								</button>
							</div>
						) : (
							<form
								className="flex flex-col gap-5"
								onSubmit={handleSubmit}
								noValidate={false}
							>
								{/* Honeypot field for spam bots; kept out of the tab order. */}
								<input
									type="checkbox"
									name="botcheck"
									className="hidden"
									tabIndex={-1}
									autoComplete="off"
									aria-hidden="true"
								/>

								<div className="flex flex-col gap-2">
									<label
										htmlFor="contact-email"
										className="font-space text-sm font-medium text-accent/80 font-light"
									>
										Email
									</label>
									<input
										id="contact-email"
										name="email"
										type="email"
										required
										autoComplete="email"
										placeholder="you@company.com"
										className="w-full rounded-xl bg-white px-4 py-3 text-base text-secondary shadow-sm outline-none ring-1 ring-transparent transition placeholder:text-secondary/40 focus:ring-2 focus:ring-accent"
									/>
								</div>

								<div className="flex flex-col gap-2">
									<label
										htmlFor="contact-message"
										className="font-space text-sm font-medium text-accent/80 font-light"
									>
										What do you need? Do introduce yourself!
									</label>
									<textarea
										id="contact-message"
										name="message"
										required
										rows={6}
										placeholder="Tell me about your project, team, or idea..."
										className="w-full resize-y rounded-xl bg-white px-4 py-3 text-base text-secondary shadow-sm outline-none ring-1 ring-transparent transition placeholder:text-secondary/40 focus:ring-2 focus:ring-accent"
									/>
								</div>

								{status === "error" && (
									<p className="text-sm text-red-200">
										Something went wrong sending your request. Kindly try again.
									</p>
								)}

								<button
									type="submit"
									disabled={status === "loading"}
									className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 font-moon text-primary transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
								>
									{status === "loading" ? (
										<>
											<Loader2
												className="h-5 w-5 animate-spin"
												aria-hidden="true"
											/>
											Sending...
										</>
									) : (
										<>
											<Send className="h-5 w-5" aria-hidden="true" />
											Submit
										</>
									)}
								</button>
							</form>
						)}
					</div>
				</Container>
			</section>
		</>
	);
}
