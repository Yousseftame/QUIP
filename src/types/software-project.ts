export type SoftwareDepartmentId = "web" | "mobile";

export type SoftwareSolution = {
  title: string;
  description: string;
};

export type SoftwareProject = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  solutions: SoftwareSolution[];
  image: string;
  demoUrl?: string;
  departmentId: SoftwareDepartmentId;
  /** Card/detail badge for web projects — defaults to "Web". */
  platformBadge?: "AI" | "Web";
};

export type SoftwareDepartment = {
  id: SoftwareDepartmentId;
  index: string;
  label: string;
  headline: string;
  intro: string;
};
