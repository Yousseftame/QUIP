import type { FinishingCategory, FinishingCategoryId, FinishingProject } from "@/types/finishing-project";
import project1 from "@/assets/1.avif";
import project2 from "@/assets/2.avif";
import project3 from "@/assets/3.avif";
import project4 from "@/assets/4.avif";

const IMAGES = [project1, project2, project3, project4];

export const FINISHING_CATEGORIES: FinishingCategory[] = [
  {
    id: "3d-projects",
    index: "01",
    label: "3D Projects",
    headline: "Visualised before built",
    intro:
      "Concept models, BIM coordination, and presentation renders that align clients, consultants, and site teams before a single wall is raised.",
  },
  {
    id: "on-ground",
    index: "02",
    label: "On Ground Projects",
    headline: "Built in the field",
    intro:
      "Fit-out, MEP coordination, and finishing works delivered on live sites — from corporate interiors to full building handover.",
  },
  {
    id: "transportation",
    index: "03",
    label: "Transportation & Supplies",
    headline: "Logistics that keep sites moving",
    intro:
      "Equipment mobilisation, material supply chains, and fleet coordination supporting projects across the region.",
  },
];

type Seed = Omit<FinishingProject, "images">;

const SEEDS: Seed[] = [
  // 3D Projects
  {
    id: "fin-3d-01",
    categoryId: "3d-projects",
    name: "Corporate HQ Visualisation",
    features: ["BIM Level 2", "Photoreal renders", "Client walkthrough"],
    description:
      "Full building visualisation for a multi-tower corporate campus — exterior massing, lobby interiors, and MEP coordination views used through design development and stakeholder approvals.",
  },
  {
    id: "fin-3d-02",
    categoryId: "3d-projects",
    name: "Retail Flagship Concept",
    features: ["Interior staging", "Lighting studies", "Material boards"],
    description:
      "High-end retail concept with detailed material specification and lighting scenarios, enabling the client to sign off finishes before procurement.",
  },
  {
    id: "fin-3d-03",
    categoryId: "3d-projects",
    name: "Hospital Wing Modelling",
    features: ["Clinical layouts", "Clash detection", "As-built overlay"],
    description:
      "Medical facility wing modelled for coordination between architectural, mechanical, and electrical disciplines prior to site mobilisation.",
  },
  {
    id: "fin-3d-04",
    categoryId: "3d-projects",
    name: "Mixed-Use Tower Envelope",
    features: ["Façade options", "Solar analysis", "VR presentation"],
    description:
      "Envelope and podium study for a mixed-use tower, comparing cladding options and presenting immersive review sessions to the development team.",
  },
  {
    id: "fin-3d-05",
    categoryId: "3d-projects",
    name: "Industrial Plant Layout",
    features: ["Process flow", "Equipment placement", "Safety zoning"],
    description:
      "3D layout of production halls and utility zones, supporting equipment procurement and contractor tender packages.",
  },
  {
    id: "fin-3d-06",
    categoryId: "3d-projects",
    name: "Residential Compound Masterplan",
    features: ["Landscape integration", "Phase planning", "Sales gallery pack"],
    description:
      "Masterplan visuals for a gated residential community — phase sequencing, amenity areas, and marketing assets for off-plan sales.",
  },
  {
    id: "fin-3d-07",
    categoryId: "3d-projects",
    name: "Heritage Restoration Study",
    features: ["Historic survey", "Restoration options", "Authority submissions"],
    description:
      "Documented existing conditions and proposed restoration interventions for a heritage facade, supporting conservation board review.",
  },
  // On Ground
  {
    id: "fin-og-01",
    categoryId: "on-ground",
    name: "Bank Headquarters Fit-Out",
    features: ["Raised floors", "Acoustic ceilings", "Trading floor MEP"],
    description:
      "Complete interior fit-out of a banking headquarters across 12 floors — partitions, finishes, and coordinated MEP above-ceiling works.",
  },
  {
    id: "fin-og-02",
    categoryId: "on-ground",
    name: "Luxury Hotel Guest Floors",
    features: ["Guest rooms", "Corridor finishes", "BOH upgrades"],
    description:
      "Guest floor renovation programme delivered in phased zones to maintain hotel operations, including FF&E coordination and handover inspections.",
  },
  {
    id: "fin-og-03",
    categoryId: "on-ground",
    name: "Medical Clinic Shell & Core",
    features: ["Clinical fit-out", "Clean room prep", "Medical gas rough-in"],
    description:
      "Specialist clinic build-out with infection-control finishes, medical gas infrastructure, and compliance documentation for licensing.",
  },
  {
    id: "fin-og-04",
    categoryId: "on-ground",
    name: "Showroom & Service Centre",
    features: ["Display areas", "Workshop bays", "Brand standards"],
    description:
      "Automotive showroom and service centre delivered to manufacturer brand guidelines — flooring systems, lighting, and customer journey zones.",
  },
  {
    id: "fin-og-05",
    categoryId: "on-ground",
    name: "Educational Campus Block",
    features: ["Classrooms", "Labs", "Administration wing"],
    description:
      "New academic block with laboratories requiring enhanced MEP, durable finishes, and acoustic treatment across teaching spaces.",
  },
  {
    id: "fin-og-06",
    categoryId: "on-ground",
    name: "Warehouse Office Annex",
    features: ["Steel structure", "Industrial flooring", "Loading integration"],
    description:
      "Office annex attached to an operational warehouse — fire separation, industrial-grade finishes, and integration with existing logistics flows.",
  },
  {
    id: "fin-og-07",
    categoryId: "on-ground",
    name: "Residential Tower Common Areas",
    features: ["Lobbies", "Amenity floors", "Parking levels"],
    description:
      "Common-area finishing for a residential tower including double-height lobby, amenity deck, and basement parking treatment.",
  },
  // Transportation & Supplies
  {
    id: "fin-tr-01",
    categoryId: "transportation",
    name: "Site Equipment Mobilisation",
    features: ["Crane logistics", "Plant scheduling", "Site access planning"],
    description:
      "Coordinated delivery and positioning of tower cranes, hoists, and temporary power for a high-rise construction programme.",
  },
  {
    id: "fin-tr-02",
    categoryId: "transportation",
    name: "Finishing Materials Supply",
    features: ["Imported stone", "Custom joinery", "Just-in-time delivery"],
    description:
      "Procurement and phased delivery of imported marble, joinery packages, and specialist finishes aligned to site installation schedules.",
  },
  {
    id: "fin-tr-03",
    categoryId: "transportation",
    name: "Cross-Border Fleet Coordination",
    features: ["Customs clearance", "Multi-site routing", "GPS tracking"],
    description:
      "Fleet management for equipment and materials moving between Egypt and Gulf sites, with customs documentation and live tracking.",
  },
  {
    id: "fin-tr-04",
    categoryId: "transportation",
    name: "MEP Bulk Procurement",
    features: ["Vendor consolidation", "Warehouse staging", "Batch releases"],
    description:
      "Centralised procurement of MEP commodities with regional staging warehouse and batch releases matched to floor-by-floor progress.",
  },
  {
    id: "fin-tr-05",
    categoryId: "transportation",
    name: "Modular Unit Delivery",
    features: ["Oversized loads", "Route surveys", "Night convoys"],
    description:
      "Transport planning and escort coordination for oversized modular units from fabrication yard to remote industrial site.",
  },
  {
    id: "fin-tr-06",
    categoryId: "transportation",
    name: "Site Consumables Programme",
    features: ["Inventory control", "Weekly replenishment", "Cost tracking"],
    description:
      "Managed supply of site consumables — tools, PPE, and small materials — with weekly replenishment cycles and project cost reporting.",
  },
];

function pickImages(index: number, count = 4): string[] {
  const imgs: string[] = [];
  for (let i = 0; i < count; i++) {
    imgs.push(IMAGES[(index + i) % IMAGES.length]);
  }
  return imgs;
}

export const FINISHING_PROJECTS: FinishingProject[] = SEEDS.map((seed, index) => ({
  ...seed,
  images: pickImages(index, 3 + (index % 2)),
}));

export function getFinishingProjectsByCategory(categoryId: FinishingCategoryId) {
  return FINISHING_PROJECTS.filter((p) => p.categoryId === categoryId);
}

export function getFinishingProjectById(id: string | undefined) {
  if (!id) return undefined;
  return FINISHING_PROJECTS.find((p) => p.id === id);
}

export function getFinishingCategory(id: FinishingCategoryId) {
  return FINISHING_CATEGORIES.find((c) => c.id === id);
}

export function getFinishingProjectNeighbors(id: string | undefined) {
  const project = getFinishingProjectById(id);
  if (!project) return { prev: undefined, next: undefined };
  const siblings = getFinishingProjectsByCategory(project.categoryId);
  const index = siblings.findIndex((p) => p.id === id);
  return {
    prev: index > 0 ? siblings[index - 1] : undefined,
    next: index < siblings.length - 1 ? siblings[index + 1] : undefined,
  };
}
