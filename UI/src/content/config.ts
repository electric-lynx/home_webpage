import { defineCollection } from "astro:content";
import { clientWriteUp } from "./schemas";

const elClientsCollection = defineCollection({
  type: "content",
  schema: clientWriteUp,
});

export const collections = {
  clients_writeup: elClientsCollection,
};
