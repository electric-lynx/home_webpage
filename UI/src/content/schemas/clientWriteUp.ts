import { z } from "astro:content";

export const clientWriteUp = z.object({
  layout: z.string(),
  title: z.string(),
  client: z.string(),
  location: z.string(),
  description: z.string(),
  profile_image: z.object({
    source: z.string(),
    alt: z.string(),
  }),
  secondary_image: z
    .object({
      source: z.string(),
      alt: z.string(),
    })
    .optional(),
  date: z.string(),
  client_url: z.string(),
  isPublish: z.boolean(),
});
