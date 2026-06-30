import type { Project } from "@/types/project";

const LOCATIONS = [
  "Cairo, Egypt",
  "Riyadh, Saudi Arabia",
  "Dubai, UAE",
  "Jeddah, Saudi Arabia",
  "Alexandria, Egypt",
  "Doha, Qatar",
  "Kuwait City, Kuwait",
  "Amman, Jordan",
];

const SCOPE_BY_CATEGORY: Record<string, string[]> = {
  "Structured Cabling": [
    "Site survey and pathway design",
    "Copper and fiber backbone installation",
    "Rack, patch panel, and cable management",
    "Labeling, testing, and certification",
  ],
  "Network Infrastructure": [
    "Network architecture and VLAN design",
    "Core and edge switching deployment",
    "Routing, firewall, and security zoning",
    "Monitoring, documentation, and handover",
  ],
  "Security Systems": [
    "CCTV and video management design",
    "Access control and intrusion systems",
    "Control room and monitoring setup",
    "Integration, testing, and operator training",
  ],
  "Data Center": [
    "Raised floor and containment planning",
    "High-density fiber and copper runs",
    "Cabinet dressing and cable management",
    "Testing, as-built drawings, and commissioning",
  ],
  "Wireless & IoT": [
    "RF survey and coverage planning",
    "Access point deployment and controller setup",
    "Guest and IoT network segmentation",
    "Performance validation and optimization",
  ],
  "AV Integration": [
    "Signal routing and infrastructure design",
    "Display, audio, and control system install",
    "Rack build and termination",
    "Programming, testing, and user handover",
  ],
};

const DEFAULT_SCOPE = [
  "Requirements review and engineering design",
  "Procurement and material coordination",
  "Installation and system integration",
  "Testing, commissioning, and handover",
];

type ProjectSeed = Omit<
  Project,
  "code" | "image" | "overview" | "location" | "year" | "client" | "scope"
>;

export function enrichProject(
  entry: ProjectSeed,
  index: number,
  image: string,
  codePrefix: string,
): Project {
  const scope = SCOPE_BY_CATEGORY[entry.category] ?? DEFAULT_SCOPE;

  return {
    ...entry,
    code: `${codePrefix} · ${String(index + 1).padStart(2, "0")}`,
    image,
    location: LOCATIONS[index % LOCATIONS.length],
    year: String(2016 + (index % 10)),
    client: "Confidential — Enterprise Client",
    scope,
    overview: `${entry.description} QUIP delivered the full project lifecycle — from engineering design and procurement through installation, testing, commissioning, and structured handover to the client's operations team.`,
  };
}

export function findProjectById(projects: Project[], id: string | undefined) {
  if (!id) return undefined;
  return projects.find((project) => project.id === id);
}

export function findProjectIndex(projects: Project[], id: string | undefined) {
  if (!id) return -1;
  return projects.findIndex((project) => project.id === id);
}
