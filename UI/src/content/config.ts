// layout: ......BlogPostLayout.astro
// client: D's Barbershop
// location: Dayton Ohio
// description: Gave a local business shop and update on website and a improved branding
// images: ./images/clients/ds_barbershop/
// date: 2023-12
// isPublish: true
// import { z, defineCollections } from "astro:content";
import { z, defineCollection } from "astro:content";

const elClientsCollection = defineCollection({
  type: "content",
  schema: z.object({
    layout: z.string(),
    client: z.string(),
    location: z.string(),
    description: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    pubDate: z.date(),
    isPublish: z.boolean(),
  }),
});

export const collections = {
  clients: elClientsCollection,
};
