import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
	server: {
		// Add server-only vars here, e.g.:
		// DATABASE_URL: z.string().url(),
	},
	clientPrefix: "VITE_",
	client: {
		VITE_WEB3FORM_ACCESS_KEY: z.string().min(1).optional(),
		VITE_SITE_URL: z.string().url().optional(),
	},
	runtimeEnv: import.meta.env,
	emptyStringAsUndefined: true,
});
