import type {
  SoftwareDepartment,
  SoftwareDepartmentId,
  SoftwareProject,
} from "@/types/software-project";

export const SOFTWARE_DEPARTMENTS: SoftwareDepartment[] = [
  {
    id: "applications",
    index: "01",
    label: "Applications",
    headline: "Products built to run the operation",
    intro:
      "Internal tools, client platforms, and field apps — designed for reliability, clarity, and day-to-day use across teams and sites.",
  },
  {
    id: "websites",
    index: "02",
    label: "Website Development",
    headline: "Digital presence that earns trust",
    intro:
      "Corporate sites, campaign landing pages, and product showcases — fast, responsive, and aligned with QUIP’s engineering standards.",
  },
];

type Seed = Omit<SoftwareProject, "departmentId"> & { departmentId: SoftwareDepartmentId };

const SEEDS: Seed[] = [
  // Applications
  {
    id: "sw-app-01",
    departmentId: "applications",
    title: "Site Operations Dashboard",
    description:
      "Real-time project tracking for site managers — schedules, manpower, and daily reports in one responsive workspace.",
    demoUrl: "https://example.com",
  },
  {
    id: "sw-app-02",
    departmentId: "applications",
    title: "QUIP Field Inspect",
    description:
      "Mobile-first inspection app for on-ground teams. Capture photos, checklists, and sign-offs offline, sync when connected.",
    demoUrl: "https://example.com",
  },
  {
    id: "sw-app-03",
    departmentId: "applications",
    title: "Procurement Portal",
    description:
      "Vendor quotes, purchase requests, and approval flows for construction supply chains — reducing email back-and-forth.",
    demoUrl: "https://example.com",
  },
  {
    id: "sw-app-04",
    departmentId: "applications",
    title: "Asset & Equipment Tracker",
    description:
      "Fleet and equipment registry with maintenance alerts, location history, and handover logs across active projects.",
    demoUrl: "https://example.com",
  },
  {
    id: "sw-app-05",
    departmentId: "applications",
    title: "Client Progress Hub",
    description:
      "Secure client portal for milestone updates, document sharing, and visual progress reports on long-running programmes.",
    demoUrl: "https://example.com",
  },
  // Website development
  {
    id: "sw-web-01",
    departmentId: "websites",
    title: "QUIP Corporate Site",
    description:
      "The flagship QUIP web experience — services, projects, and contact flows with a focus on performance and brand consistency.",
    demoUrl: "https://example.com",
  },
  {
    id: "sw-web-02",
    departmentId: "websites",
    title: "Infrastructure Project Microsite",
    description:
      "Campaign site for a major ICT deployment — timeline, capability overview, and lead capture for stakeholder engagement.",
    demoUrl: "https://example.com",
  },
  {
    id: "sw-web-03",
    departmentId: "websites",
    title: "Developer Portfolio Platform",
    description:
      "Modular portfolio template for showcasing mixed-use and commercial developments with gallery and enquiry forms.",
    demoUrl: "https://example.com",
  },
  {
    id: "sw-web-04",
    departmentId: "websites",
    title: "Careers & Culture Page",
    description:
      "Recruitment-focused landing experience with role listings, team stories, and streamlined application submission.",
    demoUrl: "https://example.com",
  },
  {
    id: "sw-web-05",
    departmentId: "websites",
    title: "Product Launch Landing",
    description:
      "High-conversion single-page layout for a new service line — animated hero, feature blocks, and demo request CTA.",
    demoUrl: "https://example.com",
  },
];

export const SOFTWARE_PROJECTS: SoftwareProject[] = SEEDS;

export function getSoftwareProjectsByDepartment(
  departmentId: SoftwareDepartmentId,
): SoftwareProject[] {
  return SOFTWARE_PROJECTS.filter((p) => p.departmentId === departmentId);
}
