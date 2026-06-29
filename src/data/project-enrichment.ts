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

const DELIVERABLES_BY_CATEGORY: Record<string, string[]> = {
  "Structured Cabling": [
    "Certified test reports",
    "As-built drawings and port schedules",
    "Cable labeling and pathway documentation",
    "Warranty and maintenance guidelines",
  ],
  "Network Infrastructure": [
    "Network topology and IP plan",
    "Configuration backups and runbooks",
    "Performance baseline report",
    "Operations and support documentation",
  ],
  "Security Systems": [
    "System architecture and camera layout",
    "Access level matrix and audit setup",
    "Commissioning and acceptance report",
    "Operator manuals and training records",
  ],
  "Data Center": [
    "Infrastructure layout drawings",
    "Patch schedules and port mapping",
    "Acceptance test documentation",
    "Operations and maintenance plan",
  ],
  "Wireless & IoT": [
    "Heat maps and coverage report",
    "Controller and SSID configuration",
    "Security policy documentation",
    "Post-deployment optimization summary",
  ],
  "AV Integration": [
    "Signal flow and rack elevation drawings",
    "System commissioning checklist",
    "Control interface documentation",
    "End-user training and handover pack",
  ],
};

const DEFAULT_SCOPE = [
  "Requirements review and engineering design",
  "Procurement and material coordination",
  "Installation and system integration",
  "Testing, commissioning, and handover",
];

const DEFAULT_DELIVERABLES = [
  "Project documentation and drawings",
  "Testing and commissioning reports",
  "As-built records and asset register",
  "Training and warranty support",
];

type ProjectSeed = Omit<
  Project,
  "code" | "image" | "overview" | "location" | "year" | "client" | "scope" | "deliverables"
>;

export function enrichProject(
  entry: ProjectSeed,
  index: number,
  image: string,
  codePrefix: string,
): Project {
  const scope = SCOPE_BY_CATEGORY[entry.category] ?? DEFAULT_SCOPE;
  const deliverables = DELIVERABLES_BY_CATEGORY[entry.category] ?? DEFAULT_DELIVERABLES;

  return {
    ...entry,
    code: `${codePrefix} · ${String(index + 1).padStart(2, "0")}`,
    image,
    location: LOCATIONS[index % LOCATIONS.length],
    year: String(2016 + (index % 10)),
    client: "Confidential — Enterprise Client",
    scope,
    deliverables,
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
