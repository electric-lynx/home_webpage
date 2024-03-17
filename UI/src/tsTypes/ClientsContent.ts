export interface ClientsContent {
  id: string;
  body: string;
  collection: string;
  data: ClientMarkdownFrontMatter;
  slug: string;
}
export interface ClientMarkdownImages {
  source: string;
  alt: string;
}
export interface ClientMarkdownFrontMatter {
  layout: string;
  title: string;
  client: string;
  location: string;
  description: string;
  profile_image: ClientMarkdownImages;
  secondary_image?: ClientMarkdownImages;
  date: string;
  client_url: string;
  tags: string[];
  isPublish: boolean;
}
