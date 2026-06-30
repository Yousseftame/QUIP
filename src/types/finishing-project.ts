export type FinishingProject = {
  id: string;
  name: string;
  features: string[];
  description: string;
  images: string[];
  categoryId: FinishingCategoryId;
};

export type FinishingCategoryId =
  | "3d-projects"
  | "on-ground"
  | "transportation";

export type FinishingCategory = {
  id: FinishingCategoryId;
  index: string;
  label: string;
  headline: string;
  intro: string;
};
