import { z } from "astro:content";

export const clientWriteUp = z.object({
  layout: z.string(),
  title: z.string(),
  client: z.string(),
  location: z.string(),
  description: z.string(),
  images: z.string(),
  date: z.string(),
  url: z.string(),
  isPublish: z.boolean(),
});
