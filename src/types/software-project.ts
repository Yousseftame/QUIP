export type SoftwareDepartmentId = "applications" | "websites";

export type SoftwareProject = {
  id: string;
  title: string;
  description: string;
  demoUrl: string;
  departmentId: SoftwareDepartmentId;
};

export type SoftwareDepartment = {
  id: SoftwareDepartmentId;
  index: string;
  label: string;
  headline: string;
  intro: string;
};
