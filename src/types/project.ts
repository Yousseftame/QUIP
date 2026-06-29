export type Project = {
  id: string;
  code: string;
  name: string;
  category: string;
  description: string;
  overview: string;
  image: string;
  location: string;
  year: string;
  client: string;
  scope: string[];
  deliverables: string[];
};

export type ProjectCategory = {
  slug: string;
  label: string;
  title: string;
  subtitle: string;
};

export type ProjectGalleryConfig = {
  slug: string;
  label: string;
  listPath: string;
  backLabel: string;
};
