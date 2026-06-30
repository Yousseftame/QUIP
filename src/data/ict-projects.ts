import type { Project } from "@/types/project";
import { findProjectById, findProjectIndex } from "@/data/project-enrichment";
import abbImg from "@/assets/Our Work – QUIP/abb.jpg";
import alFuttaimImg from "@/assets/Our Work – QUIP/Al Futtaim (CFC).png";
import alexBankImg from "@/assets/Our Work – QUIP/alex bank.jpg";
import cairoBankImg from "@/assets/Our Work – QUIP/Cairo Bank.jpg";
import creditAgricoleImg from "@/assets/Our Work – QUIP/Credit Agricole.jpg";
import egpcImg from "@/assets/Our Work – QUIP/EGPC.jpeg";
import emaImg from "@/assets/Our Work – QUIP/EMA.jpg";
import exxonMobilImg from "@/assets/Our Work – QUIP/Exxon Mobil.jpg";
import gaebImg from "@/assets/Our Work – QUIP/GAEB.jpg";
import geSecurityImg from "@/assets/Our Work – QUIP/GE SECURITY.jpg";
import gmImg from "@/assets/Our Work – QUIP/gm.webp";
import gupcoImg from "@/assets/Our Work – QUIP/Gupco.webp";
import hondaImg from "@/assets/Our Work – QUIP/HONDA.jpg";
import hsbcImg from "@/assets/Our Work – QUIP/HSBC.jpg";
import ibmImg from "@/assets/Our Work – QUIP/ibm.jpg";
import itidaImg from "@/assets/Our Work – QUIP/ITIDA.jpg";
import itsImg from "@/assets/Our Work – QUIP/its.jpg";
import mantracImg from "@/assets/Our Work – QUIP/MANTRAC.jpg";
import mobinilImg from "@/assets/Our Work – QUIP/mobinil.jpg";
import nationalBankOfEgyptImg from "@/assets/Our Work – QUIP/national bank of egypt.jpeg";
import nationalBankImg from "@/assets/Our Work – QUIP/National Bank.jpg";
import novartisImg from "@/assets/Our Work – QUIP/NOVARTIS.jpg";
import pearsonEducationImg from "@/assets/Our Work – QUIP/Pearson Education.jpg";
import quintilesImg from "@/assets/Our Work – QUIP/Quintiles.jpg";
import rotanaImg from "@/assets/Our Work – QUIP/ROTANA.jpg";
import sanofiImg from "@/assets/Our Work – QUIP/SANOFI.jpg";
import toyotaImg from "@/assets/Our Work – QUIP/TOYOTA.jpg";
import unitedBankImg from "@/assets/Our Work – QUIP/united bank.jpg";
import weImg from "@/assets/Our Work – QUIP/we.jpg";
import westernGecoImg from "@/assets/Our Work – QUIP/WesternGeco.jpg";
import xceedImg from "@/assets/Our Work – QUIP/Xceed.jpg";

const ICT_PROJECT_IMAGES: Record<string, string> = {
  "ict-001": quintilesImg,
  "ict-002": gaebImg,
  "ict-003": alFuttaimImg,
  "ict-004": pearsonEducationImg,
  "ict-005": alexBankImg,
  "ict-006": gmImg,
  "ict-007": itsImg,
  "ict-008": weImg,
  "ict-009": exxonMobilImg,
  "ict-010": unitedBankImg,
  "ict-011": nationalBankOfEgyptImg,
  "ict-012": cairoBankImg,
  "ict-013": rotanaImg,
  "ict-014": itidaImg,
  "ict-015": geSecurityImg,
  "ict-016": hondaImg,
  "ict-017": toyotaImg,
  "ict-018": sanofiImg,
  "ict-019": novartisImg,
  "ict-020": hsbcImg,
  "ict-021": ibmImg,
  "ict-022": mobinilImg,
  "ict-023": mantracImg,
  "ict-024": westernGecoImg,
  "ict-025": gupcoImg,
  "ict-026": egpcImg,
  "ict-027": creditAgricoleImg,
  "ict-028": xceedImg,
  "ict-029": emaImg,
  "ict-030": nationalBankImg,
  "ict-031": sanofiImg,
  "ict-032": abbImg,
};

const ICT_CATEGORIES = [
  "Networks",
  "Information Technology",
  "General Contracting",
  "Light Current",
  "Telecommunication",
];

type IctProjectSeed = Pick<
  Project,
  "id" | "name" | "category" | "description" | "overview" | "client" | "scope" | "location"
>;

function buildIctProject(entry: IctProjectSeed, index: number): Project {
  return {
    ...entry,
    code: `ICT · ${String(index + 1).padStart(2, "0")}`,
    image: ICT_PROJECT_IMAGES[entry.id],
    year: "—",
  };
}

const ICT_PROJECT_ENTRIES: IctProjectSeed[] = [
  {
    id: "ict-001",
    name: "Quintiles",
    category: "Networks",
    client: "Quintiles",
    location: "Egypt",
    description:
      "Network infrastructure with integrated access control and CCTV for Quintiles operations.",
    overview:
      "QUIP delivered structured network infrastructure for Quintiles, integrating physical security systems including access control and CCTV into a unified low-current package.",
    scope: ["Networks", "Access Control", "CCTV"],
  },
  {
    id: "ict-002",
    name: "GAEB",
    category: "Networks",
    client: "GAEB",
    location: "Egypt",
    description:
      "Network infrastructure with access control and CCTV for GAEB facilities.",
    overview:
      "Complete network and security systems deployment for GAEB, covering access control and CCTV integration across the client's operational environment.",
    scope: ["Networks", "Access Control", "CCTV"],
  },
  {
    id: "ict-003",
    name: "Al Futtaim (CFC)",
    category: "Networks",
    client: "Al Futtaim (CFC)",
    location: "Egypt",
    description: "Network infrastructure and access control for Al Futtaim CFC.",
    overview:
      "Network infrastructure and access control system design, installation, and commissioning for Al Futtaim (CFC) facilities.",
    scope: ["Networks", "Access Control"],
  },
  {
    id: "ict-004",
    name: "Pearson Education",
    category: "Networks",
    client: "Pearson Education",
    location: "Egypt",
    description:
      "Network infrastructure with access control and CCTV for Pearson Education.",
    overview:
      "Integrated network, access control, and CCTV systems for Pearson Education, supporting secure operations and monitored premises.",
    scope: ["Networks", "Access Control", "CCTV"],
  },
  {
    id: "ict-005",
    name: "Alex Bank",
    category: "Networks",
    client: "Alex Bank",
    location: "Egypt",
    description:
      "Branch network and access control across Alex Bank Cairo, Alexandria, and Mansoura locations.",
    overview:
      "Multi-branch network and access control deployment for Alex Bank across Cairo, Alexandria, and Mansoura branches.",
    scope: [
      "Networks",
      "Alex Bank Cairo Branch — Access Control",
      "Alexandria Branch — Access Control",
      "Mansoura Branch — Access Control",
    ],
  },
  {
    id: "ict-006",
    name: "GM",
    category: "Networks",
    client: "General Motors Egypt",
    location: "Egypt",
    description:
      "Network infrastructure, access control, and entrance gates for General Motors Egypt.",
    overview:
      "Network and security systems for General Motors Egypt, including access control and entrance gate integration.",
    scope: ["Networks", "General Motors Egypt", "Access Control", "Entrance Gates"],
  },
  {
    id: "ict-007",
    name: "ITS",
    category: "Networks",
    client: "ITS (International Turnkey System)",
    location: "Egypt",
    description:
      "Network infrastructure with access control, CCTV, and fire alarm for ITS.",
    overview:
      "Comprehensive low-current and network package for International Turnkey System (ITS), spanning access control, CCTV, and fire alarm systems.",
    scope: [
      "Networks",
      "ITS (International Turnkey System)",
      "Access Control",
      "CCTV",
      "Fire Alarm",
    ],
  },
  {
    id: "ict-008",
    name: "WE",
    category: "Networks",
    client: "Telecom Egypt",
    location: "Egypt",
    description:
      "Network and security systems for Telecom Egypt data center and branch offices.",
    overview:
      "Multi-site network and security deployment for Telecom Egypt, covering the data center, Tanta branch, and Almaza branch with access control and CCTV.",
    scope: [
      "Networks",
      "Telecom Egypt Data Center — Access Control, CCTV",
      "WE Tanta Branch — Access Control, CCTV",
      "WE Almaza Branch — Access Control, CCTV",
    ],
  },
  {
    id: "ict-009",
    name: "Exxon Mobil",
    category: "Networks",
    client: "Exxon Mobil",
    location: "Egypt",
    description: "Network infrastructure with access control and CCTV for Exxon Mobil.",
    overview:
      "Network, access control, and CCTV systems delivered for Exxon Mobil facilities in Egypt.",
    scope: ["Networks", "Exxon Mobil", "Access Control", "CCTV"],
  },
  {
    id: "ict-010",
    name: "United Bank",
    category: "Networks",
    client: "United Bank",
    location: "Egypt",
    description: "Network infrastructure with access control and CCTV for United Bank.",
    overview:
      "Integrated network, access control, and CCTV deployment for United Bank operations.",
    scope: ["Networks", "Access Control", "CCTV"],
  },
  {
    id: "ict-011",
    name: "National Bank of Egypt",
    category: "Networks",
    client: "National Bank of Egypt",
    location: "Egypt",
    description:
      "Network and security systems for National Bank of Egypt Visa branch and data center.",
    overview:
      "Network and security infrastructure for National Bank of Egypt across the Visa branch and data center facilities.",
    scope: [
      "Networks",
      "National Bank of Egypt Visa Branch — Access Control",
      "National Bank of Egypt Data Center — Access Control, CCTV",
    ],
  },
  {
    id: "ict-012",
    name: "Cairo Bank",
    category: "Networks",
    client: "Cairo Bank",
    location: "Egypt",
    description: "Network infrastructure with access control and CCTV for Cairo Bank.",
    overview:
      "Network, access control, and CCTV systems for Cairo Bank, supporting secure banking operations.",
    scope: ["Networks", "Cairo Bank", "Access Control", "CCTV"],
  },
  {
    id: "ict-013",
    name: "ROTANA",
    category: "Networks",
    client: "Rotana",
    location: "Egypt",
    description: "Network infrastructure and access control for Rotana Data Center.",
    overview:
      "Network infrastructure and access control system for Rotana Data Center.",
    scope: ["Networks", "Rotana Data Center", "Access Control"],
  },
  {
    id: "ict-014",
    name: "ITIDA",
    category: "Networks",
    client: "ITIDA",
    location: "Egypt",
    description:
      "Network infrastructure with access control and time-and-attendance for ITIDA.",
    overview:
      "Network, access control, and time-and-attendance systems for ITIDA facilities.",
    scope: ["Networks", "ITIDA", "Access Control", "Time and Attendance"],
  },
  {
    id: "ict-015",
    name: "GE Security",
    category: "Networks",
    client: "GE Egypt",
    location: "Egypt",
    description:
      "Network infrastructure with access control, CCTV, and time-and-attendance for GE Egypt Office.",
    overview:
      "Integrated network and security package for GE Egypt Office, including access control, CCTV, and time-and-attendance systems.",
    scope: [
      "Networks",
      "GE Egypt Office",
      "Access Control",
      "CCTV",
      "Time and Attendance",
    ],
  },
  {
    id: "ict-016",
    name: "Honda",
    category: "Networks",
    client: "Honda Egypt",
    location: "Egypt",
    description:
      "Network infrastructure with access control and time-and-attendance for Honda Egypt.",
    overview:
      "Network, access control, and time-and-attendance deployment for Honda Egypt.",
    scope: ["Networks", "Honda Egypt", "Access Control", "Time and Attendance"],
  },
  {
    id: "ict-017",
    name: "Toyota",
    category: "Networks",
    client: "Toyota Egypt",
    location: "Egypt",
    description:
      "Network infrastructure with access control and time-and-attendance for Toyota Egypt.",
    overview:
      "Network, access control, and time-and-attendance systems for Toyota Egypt operations.",
    scope: ["Networks", "Toyota Egypt", "Access Control", "Time and Attendance"],
  },
  {
    id: "ict-018",
    name: "Sanofi Aventis",
    category: "Networks",
    client: "Aventis — Sanofi Pharma",
    location: "Egypt",
    description:
      "Access control, entrance gates, and time-and-attendance for Sanofi Aventis pharmaceutical operations.",
    overview:
      "Security and workforce systems for Aventis — Sanofi Pharma, including access control, entrance gates, and time-and-attendance.",
    scope: [
      "Aventis — Sanofi Pharma",
      "Access Control",
      "Entrance Gates",
      "Time and Attendance",
    ],
  },
  {
    id: "ict-019",
    name: "Novartis",
    category: "Networks",
    client: "Novartis Pharma",
    location: "Egypt",
    description:
      "Access control and time-and-attendance for Novartis Pharma facilities.",
    overview:
      "Access control and time-and-attendance systems for Novartis Pharma in Egypt.",
    scope: ["Novartis Pharma", "Access Control", "Time and Attendance"],
  },
  {
    id: "ict-020",
    name: "HSBC",
    category: "Networks",
    client: "HSBC Bank",
    location: "Egypt",
    description:
      "Data network renovation for HSBC Bank administration building and data center.",
    overview:
      "Data network design and renovation for HSBC Bank's administration building, including copper and optical fiber cabling and full data center refurbishment.",
    scope: [
      "Networks",
      "HSBC Bank",
      "Data network for administration building",
      "Copper cables and optical fiber (O/F) cables",
      "Renovation of all data network for administration building",
      "Renovation of data center on administration building",
    ],
  },
  {
    id: "ict-021",
    name: "IBM",
    category: "General Contracting",
    client: "IBM",
    location: "Egypt",
    description:
      "General contracting, IT, light current, networks, and telecommunications for IBM C(10) Building and Smart Village call center.",
    overview:
      "Multi-discipline fit-out for IBM across the C(10) Building and International Call Center at Smart Village — covering electrical works, data and telephone networks, CCTV, fire alarm, and intrusion detection.",
    scope: [
      "General contracting, Information technology, Light current, Networks, Telecommunication",
      "C(10) Building — Electrical works: main distribution panels, sockets (rocket outlets), feeding cables of equipment",
      "C(10) Building — Data network: telephone networks (BPX and telephone frames)",
      "C(10) Building — CCTV works",
      "IBM International Call Center (Smart Village) — Electrical works: main distribution panels, sockets (rocket outlets), feeding cables of equipment",
      "IBM International Call Center (Smart Village) — Data network: telephone networks (BPX and telephone frames)",
      "IBM International Call Center (Smart Village) — CCTV works",
      "IBM International Call Center (Smart Village) — Fire Alarm System",
      "IBM International Call Center (Smart Village) — Intrusion System",
    ],
  },
  {
    id: "ict-022",
    name: "Mobinil",
    category: "Information Technology",
    client: "Mobinil",
    location: "Egypt",
    description:
      "IT infrastructure across Mobinil Nile City HQ, Smart Village backup, switches, and Alexandria central.",
    overview:
      "Large-scale information technology and low-current deployment for Mobinil across headquarters, backup facilities, switch sites, and the Awayed Central in Alexandria.",
    scope: [
      "Information technology",
      "Mobinil Nile City (HQ Building) — Data network: infrastructure cabling (copper, fiber, telephone, cables, racks, and accessories)",
      "Mobinil Nile City (HQ Building) — Light current system, access control, CCTV, entrance control gates",
      "Mobinil Smart Village (Backup Building) — Data network: infrastructure cabling (copper, fiber, telephone, cables, racks, and accessories)",
      "Mobinil Smart Village (Backup Building) — Light current system, access control, CCTV, entrance control gates",
      "Mobinil Switches — Data network: infrastructure cabling (copper, fiber, telephone, cables, racks, and accessories)",
      "Mobinil Switches — Light current system, access control",
      "Mobinil Awayed Central (Alexandria) — Data network: infrastructure cabling (copper, fiber, telephone, cables, racks, and accessories)",
      "Mobinil Awayed Central (Alexandria) — Light current system, access control",
    ],
  },
  {
    id: "ict-023",
    name: "Mantrac",
    category: "Networks",
    client: "Mantrac",
    location: "Smart Village, Egypt",
    description:
      "Full fit-out at Smart Village including civil, electrical, data network, and security systems.",
    overview:
      "Turnkey network and building infrastructure for Mantrac at Smart Village — from civil works and electrical distribution through data cabling and access control.",
    scope: [
      "Networks (Smart Village)",
      "Civil works: demolition, blocking of walls, plastering, painting, flooring of concrete lands, doors, windows, raised floor, false ceiling",
      "Electrical works: main distribution panels and sub distribution panels (lighting system)",
      "Data network: infrastructure cabling (copper, fiber, telephone, cables, racks, and accessories)",
      "Light current system",
      "Access control system",
    ],
  },
  {
    id: "ict-024",
    name: "WesternGeco",
    category: "General Contracting",
    client: "WesternGeco",
    location: "Egypt",
    description:
      "General contracting and network infrastructure including civil, electrical, HVAC, and data network works.",
    overview:
      "Comprehensive general contracting and network deployment for WesternGeco, covering civil fit-out, electrical systems, earthing, HVAC, and data network infrastructure.",
    scope: [
      "General contracting, Networks",
      "Civil works: raised floor, false ceiling, aluminium doors, plastering, painting, flooring of concrete",
      "Electrical works: low voltage network, high voltage network",
      "Earthing system",
      "HVAC works",
      "Data network",
    ],
  },
  {
    id: "ict-025",
    name: "Gupco",
    category: "Networks",
    client: "Gupco",
    location: "Egypt",
    description: "Data and voice network infrastructure for Gupco.",
    overview:
      "Data and voice network design and installation for Gupco operations.",
    scope: ["Networks", "Data network", "Voice network"],
  },
  {
    id: "ict-026",
    name: "EGPC",
    category: "Networks",
    client: "EGPC",
    location: "Egypt",
    description: "Optical fiber cable renovation for EGPC building infrastructure.",
    overview:
      "Renovation of optical fiber (O/F) cabling across EGPC building infrastructure.",
    scope: ["EGPC", "O/F works — renovation of O/F cables on building"],
  },
  {
    id: "ict-027",
    name: "Credit Agricole",
    category: "Light Current",
    client: "Credit Agricole",
    location: "Egypt",
    description:
      "Light current and network fit-out including civil, electrical, security, HVAC, and data systems.",
    overview:
      "Full light-current and network programme for Credit Agricole — civil and electrical works, security and life-safety systems, HVAC, earthing, and data and voice networks.",
    scope: [
      "Light current, Networks",
      "Civil works: demolition, blocking of walls, plastering, painting, flooring of concrete lands, doors, windows, raised floor, false ceiling",
      "Electrical works: main distribution panels and sub distribution panels (lighting system)",
      "Light current: security systems, access control, fire alarm and fire fighting systems, CCTV",
      "HVAC works",
      "Earthing systems: low voltage earthing system, low current earthing system",
      "Data and voice networks",
    ],
  },
  {
    id: "ict-028",
    name: "Xceed",
    category: "Light Current",
    client: "Xceed",
    location: "Egypt",
    description:
      "Data center fit-out with electrical, light current, security, and network systems.",
    overview:
      "Data center infrastructure for Xceed covering electrical distribution, light-current security systems, and integrated low-current packages.",
    scope: [
      "Xceed Data Center",
      "Electrical works: main distribution panels, sub distribution panels, lighting system",
      "Light current: security systems, access control system, fire alarm and fire fighting systems, CCTV system",
      "Earthing systems: low voltage earthing system, low current earthing system",
      "HVAC works",
      "Data and voice networks",
    ],
  },
  {
    id: "ict-029",
    name: "EMA",
    category: "Light Current",
    client: "EMA",
    location: "Egypt",
    description:
      "Light current package with electrical works, security systems, and earthing.",
    overview:
      "Light-current and electrical infrastructure for EMA, including security systems, access control, fire alarm, CCTV, and earthing.",
    scope: [
      "Light current",
      "Electrical works: main distribution panels and sub distribution panels (lighting system)",
      "Light current: security systems, access control system, fire alarm and fire fighting systems, CCTV system",
      "Earthing system: low voltage earthing system, low current earthing system",
    ],
  },
  {
    id: "ict-030",
    name: "National Bank",
    category: "General Contracting",
    client: "National Bank",
    location: "Egypt",
    description:
      "General contracting for National Bank El Shriefen and El Borg branches.",
    overview:
      "General contracting works for National Bank at El Shriefen and El Borg branches, including civil fit-out, electrical works, and furniture.",
    scope: [
      "General contracting",
      "National Bank (El Shriefen & El Borg Branches)",
      "Civil works: false ceiling, raised floor, and wall cladding",
      "Electrical works",
      "Furniture",
    ],
  },
  {
    id: "ict-031",
    name: "Sanofi",
    category: "Networks",
    client: "Sanofi",
    location: "Egypt",
    description:
      "Data network renovation for Sanofi Factory administration building and data center.",
    overview:
      "Data network design and renovation for Sanofi Factory, including copper and optical fiber cabling and full administration building data center refurbishment.",
    scope: [
      "Networks",
      "Sanofi Factory",
      "Data network for administration building",
      "Copper cables and optical fiber (O/F) cables",
      "Renovation of all data network for administration building",
      "Renovation of data center on administration building",
    ],
  },
  {
    id: "ict-032",
    name: "ABB",
    category: "Networks",
    client: "ABB",
    location: "Egypt",
    description:
      "Data network renovation for ABB Administration Building and data center.",
    overview:
      "Data network design and renovation for ABB Administration Building, including copper and optical fiber cabling and data center refurbishment.",
    scope: [
      "Networks",
      "ABB Administration Building",
      "Data network for administration building",
      "Copper cables and optical fiber (O/F) cables",
      "Renovation of all data network for administration building",
      "Renovation of data center on administration building",
    ],
  },
];

export const ICT_PROJECTS: Project[] = ICT_PROJECT_ENTRIES.map((project, index) =>
  buildIctProject(project, index),
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
