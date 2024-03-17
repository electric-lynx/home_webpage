import { z } from "astro:content";

export const teambio = z.object({
  teamName: z.string(),
  portfolioLink: z.string(),
  contact: z.string(),
  primaryPicture: z.object({
    source: z.string(),
    alt: z.string(),
  }),
  secondaryPicture: z.object({
    source: z.string(),
    alt: z.string(),
  }),
});
