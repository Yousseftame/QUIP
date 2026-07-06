import type { Project } from "@/types/project";

export type IctCategoryId =
  | "critical-networks"
  | "data-centers"
  | "security-systems"
  | "all";

export type IctCategory = {
  id: IctCategoryId;
  index: string;
  label: string;
  headline: string;
  intro: string;
};

export type IctProject = Project & {
  categoryId: Exclude<IctCategoryId, "all">;
};
