export interface SeoData {
  title: string;
  description: string;
  path: string;          // ex: '/', '/sobre'
  image?: string;
  jsonLd?: Record<string, unknown>;
  noindex?: boolean;
}