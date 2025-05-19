import { z } from "zod";

const envSchema = z.object({
  VITE_NODE_ENV: z.enum(["development", "production"]),
});

export const env = envSchema.parse(import.meta.env);
