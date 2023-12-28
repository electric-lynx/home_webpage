import { defineCollection } from "astro:content";
import { clientWriteUp, teamBio } from "./schemas";

const elClientsCollection = defineCollection({
  type: "content",
  schema: clientWriteUp,
});

const elTeamProfileCollection = defineCollection({
  type: "content",
  schema: teamBio,
});

export const collections = {
  clients_writeup: elClientsCollection,
  team_profile: elTeamProfileCollection,
};
