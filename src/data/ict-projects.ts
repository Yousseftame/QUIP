import type { Project } from "@/types/project";
import project1 from "@/assets/1.avif";
import project2 from "@/assets/2.avif";
import project3 from "@/assets/3.avif";
import project4 from "@/assets/4.avif";
import { enrichProject, findProjectById, findProjectIndex } from "@/data/project-enrichment";

const IMAGES = [project1, project2, project3, project4];

const ICT_CATEGORIES = [
  "Structured Cabling",
  "Network Infrastructure",
  "Security Systems",
  "Data Center",
  "Wireless & IoT",
  "AV Integration",
];

type IctProjectSeed = Pick<Project, "id" | "name" | "category" | "description">;

const ICT_PROJECT_ENTRIES: IctProjectSeed[] = [
  {
    id: "ict-001",
    name: "Corporate HQ Network Backbone",
    category: "Network Infrastructure",
    description:
      "End-to-end LAN/WAN design and deployment for a multi-floor corporate headquarters, including core switching, redundancy, and structured documentation.",
  },
  {
    id: "ict-002",
    name: "Hospital Security & Access Control",
    category: "Security Systems",
    description:
      "Integrated CCTV, access control, and perimeter monitoring across a regional medical facility with centralized monitoring and audit trails.",
  },
  {
    id: "ict-003",
    name: "Tier-III Data Center Cabling",
    category: "Data Center",
    description:
      "High-density fiber and copper infrastructure for a Tier-III facility, with labeled pathways, testing certification, and as-built deliverables.",
  },
  {
    id: "ict-004",
    name: "Campus-Wide Wi-Fi 6 Deployment",
    category: "Wireless & IoT",
    description:
      "Wireless survey, AP placement, and controller configuration across a university campus serving thousands of concurrent users.",
  },
  {
    id: "ict-005",
    name: "Retail Chain POS Network",
    category: "Network Infrastructure",
    description:
      "Standardized store networking rollout for a retail chain, including VLAN segmentation, firewall policies, and remote branch monitoring.",
  },
  {
    id: "ict-006",
    name: "Smart Building BMS Integration",
    category: "Wireless & IoT",
    description:
      "Low-current integration linking HVAC, lighting, and occupancy sensors into a unified building management platform with real-time dashboards.",
  },
  {
    id: "ict-007",
    name: "Financial Services DR Site",
    category: "Data Center",
    description:
      "Disaster recovery site build-out with redundant power paths, structured cabling, and network segmentation aligned to compliance requirements.",
  },
  {
    id: "ict-008",
    name: "Airport Terminal CCTV Upgrade",
    category: "Security Systems",
    description:
      "Replacement and expansion of surveillance infrastructure across terminal zones with high-resolution cameras and NVR clustering.",
  },
  {
    id: "ict-009",
    name: "Industrial Plant Fiber Ring",
    category: "Structured Cabling",
    description:
      "Outdoor-rated fiber ring connecting production halls, control rooms, and admin offices with OT/IT boundary segmentation.",
  },
  {
    id: "ict-010",
    name: "Hotel Guest Services Network",
    category: "Network Infrastructure",
    description:
      "Guest Wi-Fi, staff VLANs, and PMS connectivity for a flagship hospitality property with captive portal and bandwidth management.",
  },
  {
    id: "ict-011",
    name: "Government Ministry LAN Refresh",
    category: "Network Infrastructure",
    description:
      "Phased replacement of legacy switching and cabling across ministry offices while maintaining uninterrupted operations during migration.",
  },
  {
    id: "ict-012",
    name: "Warehouse RFID & Scanning",
    category: "Wireless & IoT",
    description:
      "Wireless infrastructure and handheld integration for inventory tracking across a large logistics warehouse and loading bays.",
  },
  {
    id: "ict-013",
    name: "Mixed-Use Tower Low Current",
    category: "Structured Cabling",
    description:
      "Complete low-current package for a high-rise tower — data, voice, intercom, and backbone risers from basement to rooftop.",
  },
  {
    id: "ict-014",
    name: "Stadium AV & Broadcast Feed",
    category: "AV Integration",
    description:
      "Arena-wide audio, display, and broadcast connectivity supporting live events, press zones, and control-room signal routing.",
  },
  {
    id: "ict-015",
    name: "Bank Branch Security Suite",
    category: "Security Systems",
    description:
      "ATM surveillance, branch access control, and alarm integration deployed across a national branch network with unified reporting.",
  },
  {
    id: "ict-016",
    name: "Cloud-Ready Server Room",
    category: "Data Center",
    description:
      "Server room modernization with cable management, patch panel organization, UPS connectivity, and environmental monitoring hooks.",
  },
  {
    id: "ict-017",
    name: "Education Campus Intercom",
    category: "AV Integration",
    description:
      "IP-based paging and intercom across classrooms, labs, and outdoor zones with scheduled announcements and emergency override.",
  },
  {
    id: "ict-018",
    name: "Oil & Gas Field Comms Hut",
    category: "Network Infrastructure",
    description:
      "Ruggedized networking for remote field communications shelters, including microwave backhaul termination and edge switching.",
  },
  {
    id: "ict-019",
    name: "Residential Compound CCTV",
    category: "Security Systems",
    description:
      "Perimeter and common-area surveillance for a gated residential compound with mobile app viewing and retention policies.",
  },
  {
    id: "ict-020",
    name: "Call Center Voice & Data",
    category: "Structured Cabling",
    description:
      "High-port-density cabling for a 200-seat contact center with QoS-ready switching and dedicated voice/data pathways.",
  },
  {
    id: "ict-021",
    name: "Mall Digital Signage Network",
    category: "AV Integration",
    description:
      "Media player connectivity and VLAN isolation for digital signage across retail corridors, food courts, and parking levels.",
  },
  {
    id: "ict-022",
    name: "Healthcare Clinic Wi-Fi",
    category: "Wireless & IoT",
    description:
      "Clinical-grade wireless coverage for outpatient clinics with guest isolation and medical device-friendly RF planning.",
  },
  {
    id: "ict-023",
    name: "Metro Station PA System",
    category: "AV Integration",
    description:
      "Public address and emergency broadcast infrastructure across station platforms, concourses, and control rooms.",
  },
  {
    id: "ict-024",
    name: "Pharmaceutical Clean Room Network",
    category: "Network Infrastructure",
    description:
      "Controlled-environment networking for production monitoring, with shielded cabling and segregated QA/production zones.",
  },
  {
    id: "ict-025",
    name: "Co-Working Space IT Fit-Out",
    category: "Structured Cabling",
    description:
      "Flexible floor cabling with modular patch panels, meeting-room AV drops, and tenant-ready network closets.",
  },
  {
    id: "ict-026",
    name: "Embassy Perimeter Security",
    category: "Security Systems",
    description:
      "Multi-layer access control, intrusion detection, and video analytics for a diplomatic compound with hardened monitoring.",
  },
  {
    id: "ict-027",
    name: "Sports Club Member Wi-Fi",
    category: "Wireless & IoT",
    description:
      "Guest and staff wireless across courts, pools, and lounges with bandwidth tiers and seamless roaming.",
  },
  {
    id: "ict-028",
    name: "Manufacturing MES Connectivity",
    category: "Network Infrastructure",
    description:
      "Shop-floor Ethernet for MES terminals and PLCs, with industrial-grade switching and OT security zoning.",
  },
  {
    id: "ict-029",
    name: "Luxury Retail AV Experience",
    category: "AV Integration",
    description:
      "In-store audio, video walls, and control systems for a flagship boutique with centralized content management.",
  },
  {
    id: "ict-030",
    name: "NGO Regional Office LAN",
    category: "Structured Cabling",
    description:
      "Cost-effective structured cabling and Wi-Fi for a regional NGO hub supporting field offices and video conferencing.",
  },
  {
    id: "ict-031",
    name: "Parking Smart Guidance System",
    category: "Wireless & IoT",
    description:
      "Sensor network and display integration for smart parking guidance across a multi-level garage with occupancy analytics.",
  },
  {
    id: "ict-032",
    name: "Telecom Exchange Room Build",
    category: "Data Center",
    description:
      "Exchange room fit-out with fiber distribution frames, power distribution, and cable routing for carrier handoff points.",
  },
  {
    id: "ict-033",
    name: "School Campus Safety Network",
    category: "Security Systems",
    description:
      "Campus-wide cameras, emergency stations, and access control integrated with administrative monitoring dashboards.",
  },
  {
    id: "ict-034",
    name: "Convention Center Event IT",
    category: "Network Infrastructure",
    description:
      "Scalable temporary and permanent networking for exhibition halls, supporting high-density events and exhibitor services.",
  },
  {
    id: "ict-035",
    name: "Remote Site VSAT & LAN",
    category: "Network Infrastructure",
    description:
      "Satellite backhaul with local LAN distribution for remote operations sites lacking terrestrial fiber connectivity.",
  },
  {
    id: "ict-036",
    name: "Smart City Traffic CCTV",
    category: "Security Systems",
    description:
      "City intersection surveillance and traffic monitoring with fiber backhaul and centralized video management infrastructure.",
  },
];

export const ICT_PROJECTS: Project[] = ICT_PROJECT_ENTRIES.map((project, index) =>
  enrichProject(project, index, IMAGES[index % IMAGES.length], "ICT"),
);

export function getIctProjectById(id: string | undefined) {
  return findProjectById(ICT_PROJECTS, id);
}

export function getIctProjectNeighbors(id: string | undefined) {
  const index = findProjectIndex(ICT_PROJECTS, id);
  if (index === -1) return { prev: undefined, next: undefined };
  return {
    prev: index > 0 ? ICT_PROJECTS[index - 1] : undefined,
    next: index < ICT_PROJECTS.length - 1 ? ICT_PROJECTS[index + 1] : undefined,
  };
}

export { ICT_CATEGORIES };
