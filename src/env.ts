import { createEnv } from "@t3-oss/env-core";

export const env = createEnv({
	server: {
		// Add server-only vars here, e.g.:
		// DATABASE_URL: z.string().url(),
	},
	clientPrefix: "VITE_",
	client: {
		// Add client-exposed vars here (must be prefixed VITE_), e.g.:
		// VITE_API_URL: z.string().url(),
	},
	runtimeEnv: import.meta.env,
	emptyStringAsUndefined: true,
});
