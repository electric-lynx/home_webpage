export interface ClientsContent {
  id: string;
  body: string;
  collection: string;
  data: ClientMarkdownFrontMatter;
  slug: string;
}
export interface ClientMarkdownFrontMatter {
  layout: string;
  title: string;
  client: string;
  location: string;
  description: string;
  profile_image: {
    source: string;
    alt: string;
  };
  secondary_image?: {
    source: string;
    alt: string;
  };
  date: string;
  client_url: string;
  tags: string[];
  isPublish: boolean;
}
