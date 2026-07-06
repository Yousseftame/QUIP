import type { IctCategory, IctCategoryId, IctProject } from "@/types/ict-project";
import { findProjectById, findProjectIndex } from "@/data/project-enrichment";
import defaultProjectImg from "@/assets/quip-branding-01.png";
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
import orascomImg from "@/assets/software-logos/orascomlogo.png";
import gov6Img from "@/assets/QUIP-LOGOS/GOV6.png";
import dhlImg from "@/assets/Our Work – QUIP/DHL.jpg";
import halliburtonImg from "@/assets/Our Work – QUIP/halliburation.png";
import britishPetroleumImg from "@/assets/Our Work – QUIP/British-Petroleum.png";
import egyptianParliamentImg from "@/assets/Our Work – QUIP/egyptionparliament.jpg";
import councilOfMinistersImg from "@/assets/Our Work – QUIP/councilofmisinister.webp";
import ministryOfEducationImg from "@/assets/Our Work – QUIP/misinstryofedcution.jpg";
import marriottHotelImg from "@/assets/Our Work – QUIP/marriothotel.jpg";
import vodafoneImg from "@/assets/Our Work – QUIP/Vodafone.jpg";
import hassanAllamImg from "@/assets/Our Work – QUIP/hassanalam.png";
import emaarMisrImg from "@/assets/Our Work – QUIP/emaarmisr.jpg";
import egyptAirKyndrylImg from "@/assets/Our Work – QUIP/egyptairkyndryl.jpg";
import hitachiAbbImg from "@/assets/Our Work – QUIP/hitachi-abb.png";
import partnersGroupImg from "@/assets/Our Work – QUIP/partnersgroup.jpg";
import misrIranBankImg from "@/assets/Our Work – QUIP/misr-iranbank.jpg";
import ntraImg from "@/assets/Our Work – QUIP/NTRA.png";
import worldYouthForumImg from "@/assets/Our Work – QUIP/worldyouthforum.jpg";
import amanFinancialImg from "@/assets/Our Work – QUIP/aman.jpg";

export const ICT_CATEGORIES: IctCategory[] = [
  {
    id: "all",
    index: "01",
    label: "All",
    headline: "Complete ICT portfolio",
    intro:
      "Every QUIP ICT infrastructure engagement — critical networks, data centers, and security systems delivered under one accountable engineering partner.",
  },
  {
    id: "critical-networks",
    index: "02",
    label: "Critical Networks",
    headline: "Mission-critical enterprise sites",
    intro:
      "Data networks, cabling, and integrated light-current systems for headquarters, campuses, and high-availability enterprise sites across Egypt.",
  },
  {
    id: "data-centers",
    index: "03",
    label: "Data Centers",
    headline: "Secure, high-availability data centers",
    intro:
      "Design, build, and cabling of secure data centers for enterprise and government clients — from power distribution and HVAC to structured copper and fiber infrastructure.",
  },
  {
    id: "security-systems",
    index: "04",
    label: "Security Systems",
    headline: "Integrated physical security",
    intro:
      "Access control, CCTV, intrusion, time-and-attendance, and entrance systems protecting banks, campuses, data centers, and industrial facilities.",
  },
];

const CATEGORY_LABELS: Record<Exclude<IctCategoryId, "all">, string> = {
  "critical-networks": "Critical Networks",
  "data-centers": "Data Centers",
  "security-systems": "Security Systems",
};

const CODE_PREFIX: Record<Exclude<IctCategoryId, "all">, string> = {
  "critical-networks": "P",
  "data-centers": "D",
  "security-systems": "S",
};

/** Marquee data-center clients — portfolio listing only, no project-specific claims. */
const MARQUEE_DATA_CENTER_COPY = {
  description: "Data center infrastructure engagement within QUIP's ICT portfolio.",
  overview:
    "Part of QUIP's data center infrastructure track record — serving enterprise, government, and institutional clients across Egypt and the region.",
  scope: ["Data center infrastructure", "Enterprise ICT", "Egypt"],
};

const ICT_PROJECT_IMAGES: Record<string, string> = {
  "ict-cn-01": ibmImg,
  "ict-cn-02": mobinilImg,
  "ict-cn-03": hassanAllamImg,
  "ict-cn-04": defaultProjectImg,
  "ict-cn-05": emaarMisrImg,
  "ict-cn-06": hsbcImg,
  "ict-dc-01": dhlImg,
  "ict-dc-02": orascomImg,
  "ict-dc-03": halliburtonImg,
  "ict-dc-04": britishPetroleumImg,
  "ict-dc-05": egyptianParliamentImg,
  "ict-dc-06": councilOfMinistersImg,
  "ict-dc-07": ministryOfEducationImg,
  "ict-dc-08": marriottHotelImg,
  "ict-dc-09": vodafoneImg,
  "ict-dc-10": egpcImg,
  "ict-dc-11": creditAgricoleImg,
  "ict-dc-12": westernGecoImg,
  "ict-dc-13": hsbcImg,
  "ict-dc-14": gupcoImg,
  "ict-dc-15": mantracImg,
  "ict-dc-16": xceedImg,
  "ict-dc-17": egyptAirKyndrylImg,
  "ict-dc-18": hitachiAbbImg,
  "ict-dc-19": emaImg,
  "ict-dc-20": nationalBankImg,
  "ict-dc-21": abbImg,
  "ict-dc-22": partnersGroupImg,
  "ict-dc-23": misrIranBankImg,
  "ict-dc-24": sanofiImg,
  "ict-ss-01": ibmImg,
  "ict-ss-02": hondaImg,
  "ict-ss-03": sanofiImg,
  "ict-ss-04": exxonMobilImg,
  "ict-ss-05": mobinilImg,
  "ict-ss-06": gmImg,
  "ict-ss-07": quintilesImg,
  "ict-ss-08": ntraImg,
  "ict-ss-09": toyotaImg,
  "ict-ss-10": novartisImg,
  "ict-ss-11": geSecurityImg,
  "ict-ss-12": itidaImg,
  "ict-ss-13": weImg,
  "ict-ss-14": alexBankImg,
  "ict-ss-15": rotanaImg,
  "ict-ss-16": alFuttaimImg,
  "ict-ss-17": worldYouthForumImg,
  "ict-ss-18": weImg,
  "ict-ss-19": cairoBankImg,
  "ict-ss-20": itsImg,
  "ict-ss-21": pearsonEducationImg,
  "ict-ss-22": amanFinancialImg,
  "ict-ss-23": nationalBankOfEgyptImg,
  "ict-ss-24": unitedBankImg,
  "ict-ss-25": gov6Img,
  "ict-ss-26": gaebImg,
  "ict-ss-27": defaultProjectImg,
};

type IctProjectSeed = Pick<
  IctProject,
  | "id"
  | "categoryId"
  | "name"
  | "description"
  | "overview"
  | "client"
  | "scope"
  | "location"
> & { code?: string };

function buildIctProject(entry: IctProjectSeed, index: number): IctProject {
  const prefix = CODE_PREFIX[entry.categoryId];
  return {
    ...entry,
    category: CATEGORY_LABELS[entry.categoryId],
    code: entry.code ?? `${prefix} · ${String(index + 1).padStart(2, "0")}`,
    image: ICT_PROJECT_IMAGES[entry.id] ?? defaultProjectImg,
    year: "—",
  };
}

const ICT_PROJECT_ENTRIES: IctProjectSeed[] = [
  // ── Critical Networks ──────────────────────────────────────────────
  {
    id: "ict-cn-01",
    categoryId: "critical-networks",
    code: "P · 01",
    name: "IBM",
    client: "IBM",
    location: "Pyramids Heights · Smart Village",
    description:
      "Electrical works, data and telephone networks, cabling, and intrusion systems for the international call center.",
    overview:
      "QUIP delivered electrical distribution, structured data and telephone networks, and intrusion detection for IBM's international call center at Smart Village — a mission-critical enterprise site engineered for continuous operations.",
    scope: [
      "Electrical works: main distribution panels, sockets, and equipment feeds",
      "Data and telephone networks (BPX and telephone frames)",
      "Infrastructure cabling for call-center operations",
      "Intrusion detection systems",
      "CCTV and fire alarm integration at Smart Village",
    ],
  },
  {
    id: "ict-cn-02",
    categoryId: "critical-networks",
    code: "P · 02",
    name: "Orange",
    client: "Orange Egypt",
    location: "Nile City · Smart Village · Alexandria",
    description:
      "Data networks and cabling across HQ, backup, and Awayed sites, plus switches and entrance gates.",
    overview:
      "Large-scale network and low-current deployment for Orange Egypt across Nile City headquarters, Smart Village backup facilities, switch sites, and the Awayed Central in Alexandria.",
    scope: [
      "Nile City HQ — data network infrastructure cabling (copper, fiber, telephone, racks, and accessories)",
      "Smart Village backup building — full infrastructure cabling and light-current systems",
      "Switch sites — structured cabling and access control",
      "Awayed Central, Alexandria — data networks, access control, and entrance gates",
    ],
  },
  {
    id: "ict-cn-03",
    categoryId: "critical-networks",
    code: "P · 03",
    name: "Hassan Allam",
    client: "Hassan Allam Properties",
    location: "El Salamlek · El Fostat · St. Catherine",
    description:
      "Data networks and cabling with access control and CCTV across development sites.",
    overview:
      "Integrated network and security infrastructure for Hassan Allam development sites — structured cabling, access control, and CCTV deployed across El Salamlek, El Fostat, and St. Catherine.",
    scope: [
      "Structured data networks and infrastructure cabling",
      "Access control systems",
      "CCTV surveillance",
      "Multi-site coordination across three development locations",
    ],
  },
  {
    id: "ict-cn-04",
    categoryId: "critical-networks",
    code: "P · 04",
    name: "Arabian Group",
    client: "Arabian Group",
    location: "Zayed Twin Towers",
    description:
      "Full data network and infrastructure cabling with an integrated light-current system.",
    overview:
      "Complete data network and infrastructure cabling programme for Arabian Group at Zayed Twin Towers, including integrated light-current systems for a unified enterprise technology backbone.",
    scope: [
      "Full data network design and installation",
      "Copper and fiber infrastructure cabling",
      "Telephone networks, racks, and accessories",
      "Integrated light-current systems",
    ],
  },
  {
    id: "ict-cn-05",
    categoryId: "critical-networks",
    code: "P · 05",
    name: "EMAAR Misr",
    client: "EMAAR Misr",
    location: "Marassi Bay · North Coast",
    description:
      "Infrastructure cabling: copper, fiber, telephone, cables, racks, and all accessories.",
    overview:
      "Infrastructure cabling for EMAAR Misr at Marassi Bay on the North Coast — copper, fiber, telephone networks, racks, and full accessories for a premium coastal development.",
    scope: [
      "Copper and fiber infrastructure cabling",
      "Telephone networks",
      "Cable management, racks, and accessories",
      "Site-wide network backbone for Marassi Bay",
    ],
  },
  {
    id: "ict-cn-06",
    categoryId: "critical-networks",
    code: "P · 06",
    name: "HSBC · Sanofi",
    client: "HSBC · Sanofi",
    location: "Finance · Pharma · Energy",
    description:
      "Nationwide bank networks, renovated data centers, HVAC, earthing, and fiber-optic security.",
    overview:
      "Nationwide critical infrastructure for HSBC and Sanofi across finance, pharmaceutical, and energy sectors — bank networks, renovated data centers, HVAC, earthing, and fiber-optic security systems.",
    scope: [
      "Nationwide bank network infrastructure",
      "Data center renovation and refurbishment",
      "HVAC and environmental systems",
      "Earthing and bonding systems",
      "Fiber-optic security infrastructure",
    ],
  },

  // ── Data Centers ───────────────────────────────────────────────────
  {
    id: "ict-dc-01",
    categoryId: "data-centers",
    code: "D · 01",
    name: "DHL",
    client: "DHL",
    location: "Egypt",
    ...MARQUEE_DATA_CENTER_COPY,
  },
  {
    id: "ict-dc-02",
    categoryId: "data-centers",
    code: "D · 02",
    name: "Orascom",
    client: "Orascom",
    location: "Egypt",
    ...MARQUEE_DATA_CENTER_COPY,
  },
  {
    id: "ict-dc-03",
    categoryId: "data-centers",
    code: "D · 03",
    name: "Halliburton",
    client: "Halliburton",
    location: "Egypt",
    ...MARQUEE_DATA_CENTER_COPY,
  },
  {
    id: "ict-dc-04",
    categoryId: "data-centers",
    code: "D · 04",
    name: "British Petroleum",
    client: "British Petroleum",
    location: "Egypt",
    ...MARQUEE_DATA_CENTER_COPY,
  },
  {
    id: "ict-dc-05",
    categoryId: "data-centers",
    code: "D · 05",
    name: "Egyptian Parliament",
    client: "Egyptian Parliament",
    location: "Egypt",
    ...MARQUEE_DATA_CENTER_COPY,
  },
  {
    id: "ict-dc-06",
    categoryId: "data-centers",
    code: "D · 06",
    name: "Council of Ministers",
    client: "Council of Ministers",
    location: "Egypt",
    ...MARQUEE_DATA_CENTER_COPY,
  },
  {
    id: "ict-dc-07",
    categoryId: "data-centers",
    code: "D · 07",
    name: "Ministry of Education",
    client: "Ministry of Education",
    location: "Egypt",
    ...MARQUEE_DATA_CENTER_COPY,
  },
  {
    id: "ict-dc-08",
    categoryId: "data-centers",
    code: "D · 08",
    name: "Marriott Hotel",
    client: "Marriott Hotel",
    location: "Egypt",
    ...MARQUEE_DATA_CENTER_COPY,
  },
  {
    id: "ict-dc-09",
    categoryId: "data-centers",
    code: "D · 09",
    name: "Vodafone Egypt",
    client: "Vodafone Egypt",
    location: "Egypt",
    ...MARQUEE_DATA_CENTER_COPY,
  },
  {
    id: "ict-dc-10",
    categoryId: "data-centers",
    code: "D · 10",
    name: "EGPC",
    client: "EGPC",
    location: "Egypt",
    ...MARQUEE_DATA_CENTER_COPY,
  },
  {
    id: "ict-dc-11",
    categoryId: "data-centers",
    code: "D · 11",
    name: "Credit Agricole",
    client: "Credit Agricole",
    location: "Zamalek & Giza Branches",
    description:
      "Civil, electrical, HVAC, earthing, and data and voice networks for branch data infrastructure.",
    overview:
      "Full data-center and branch infrastructure for Credit Agricole at Zamalek and Giza — civil fit-out, electrical systems, HVAC, earthing, and integrated data and voice networks.",
    scope: [
      "Civil works: raised floor, false ceiling, doors, and finishes",
      "Electrical works: main and sub distribution panels",
      "HVAC and earthing systems",
      "Data and voice networks",
      "Security systems: access control, fire alarm, and CCTV",
    ],
  },
  {
    id: "ict-dc-12",
    categoryId: "data-centers",
    code: "D · 12",
    name: "WesternGeco",
    client: "WesternGeco",
    location: "Cairo Data Center",
    description:
      "Civil, electrical, earthing, HVAC, and full data build-out for the Cairo data center.",
    overview:
      "Comprehensive data-center build-out for WesternGeco in Cairo — civil fit-out, electrical and earthing systems, HVAC, and complete data network infrastructure.",
    scope: [
      "Civil works: raised floor, false ceiling, doors, plastering, and painting",
      "Electrical works: low and high voltage networks",
      "Earthing system",
      "HVAC works",
      "Data network build-out",
    ],
  },
  {
    id: "ict-dc-13",
    categoryId: "data-centers",
    code: "D · 13",
    name: "HSBC",
    client: "HSBC Bank",
    location: "All Branches · Egypt",
    description:
      "Infrastructure cabling, telephone networks, and administrative data-centre renovation nationwide.",
    overview:
      "Nationwide HSBC data infrastructure — branch cabling and maintenance, copper and optical fiber renovation, and full administrative data-centre refurbishment across Egypt.",
    scope: [
      "All branches — infrastructure cabling and telephone networks",
      "Data network for administration building",
      "Copper cables and optical fiber (O/F) cables",
      "Renovation of administration building data centre",
      "HVAC, earthing, and fiber-optic security",
    ],
  },
  {
    id: "ict-dc-14",
    categoryId: "data-centers",
    code: "D · 14",
    name: "GUPCO",
    client: "GUPCO",
    location: "Gulf of Suez Petroleum",
    description: "Structured data and voice network installation for GUPCO operations.",
    overview:
      "Structured data and voice network installation for GUPCO at Gulf of Suez Petroleum — engineered for energy-sector reliability and operational continuity.",
    scope: [
      "Structured data network installation",
      "Voice network infrastructure",
      "Site cabling and rack infrastructure",
    ],
  },
  {
    id: "ict-dc-15",
    categoryId: "data-centers",
    code: "D · 15",
    name: "Mantrac",
    client: "Mantrac",
    location: "Smart Village",
    description:
      "Civil, electrical, data network, and access control for the Smart Village data facility.",
    overview:
      "Turnkey data-center and building infrastructure for Mantrac at Smart Village — civil works, electrical distribution, structured data cabling, and access control.",
    scope: [
      "Civil works: demolition, plastering, flooring, doors, raised floor, and false ceiling",
      "Electrical works: main and sub distribution panels",
      "Data network: copper, fiber, telephone, racks, and accessories",
      "Light-current and access control systems",
    ],
  },
  {
    id: "ict-dc-16",
    categoryId: "data-centers",
    code: "D · 16",
    name: "Xceed",
    client: "Xceed",
    location: "Data Center",
    description: "Power distribution panels and LV earthing systems for the Xceed data center.",
    overview:
      "Data-center fit-out for Xceed covering power distribution panels, low-voltage earthing, electrical systems, and integrated low-current security infrastructure.",
    scope: [
      "Power distribution panels and sub distribution panels",
      "Low-voltage earthing systems",
      "Light-current: access control, fire alarm, and CCTV",
      "HVAC and data and voice networks",
    ],
  },
  {
    id: "ict-dc-17",
    categoryId: "data-centers",
    code: "D · 17",
    name: "Egypt Air · Kyndryl",
    client: "Egypt Air · Kyndryl",
    location: "Egypt",
    description: "Distribution panels and equipment power feeds for Egypt Air data operations.",
    overview:
      "Power distribution and equipment feeds for Egypt Air in partnership with Kyndryl — engineered for airline-grade data-center reliability and operational uptime.",
    scope: [
      "Distribution panels",
      "Equipment power feeds",
      "Data-center electrical infrastructure",
    ],
  },
  {
    id: "ict-dc-18",
    categoryId: "data-centers",
    code: "D · 18",
    name: "Hitachi – ABB Arab",
    client: "Hitachi – ABB Arab",
    location: "Data Network",
    description: "Copper, fiber, and telephone infrastructure cabling for Hitachi – ABB Arab.",
    overview:
      "Structured copper, fiber, and telephone infrastructure cabling for Hitachi – ABB Arab — a complete data-network backbone for enterprise operations.",
    scope: [
      "Copper infrastructure cabling",
      "Fiber backbone installation",
      "Telephone network infrastructure",
      "Racks, patch panels, and accessories",
    ],
  },
  {
    id: "ict-dc-19",
    categoryId: "data-centers",
    code: "D · 19",
    name: "EMA",
    client: "European Medicines Agency",
    location: "European Medicines Agency",
    description: "Electrical, light current, and earthing systems for EMA facilities.",
    overview:
      "Electrical, light-current, and earthing infrastructure for the European Medicines Agency — security systems, access control, fire alarm, CCTV, and earthing for regulated pharmaceutical operations.",
    scope: [
      "Electrical works: main and sub distribution panels",
      "Light current: access control, fire alarm, and CCTV",
      "Earthing: low voltage and low current systems",
    ],
  },
  {
    id: "ict-dc-20",
    categoryId: "data-centers",
    code: "D · 20",
    name: "National Bank of Egypt",
    client: "National Bank of Egypt",
    location: "El Shriefen & El Borg",
    description: "Civil works and full data networks for NBE administrative facilities.",
    overview:
      "Civil works and full data network deployment for National Bank of Egypt at El Shriefen and El Borg — false ceiling, raised floor, wall cladding, electrical works, and structured cabling.",
    scope: [
      "Civil works: false ceiling, raised floor, and wall cladding",
      "Electrical works",
      "Full data network installation",
      "Administrative data-centre infrastructure",
    ],
  },
  {
    id: "ict-dc-21",
    categoryId: "data-centers",
    code: "D · 21",
    name: "ABB",
    client: "ABB",
    location: "Admin Buildings · All Egypt",
    description:
      "Data networks and administrative data centre across ABB administration buildings nationwide.",
    overview:
      "Data network renovation for ABB administration buildings across Egypt — copper and optical fiber cabling and full administrative data-centre refurbishment.",
    scope: [
      "Data network for administration buildings",
      "Copper cables and optical fiber (O/F) cables",
      "Renovation of all data network infrastructure",
      "Administrative data-centre refurbishment",
    ],
  },
  {
    id: "ict-dc-22",
    categoryId: "data-centers",
    code: "D · 22",
    name: "Partner Group · INI Investments",
    client: "Partner Group · INI Investments",
    location: "Egypt",
    description: "Data centre and light-current security systems for INI Investments.",
    overview:
      "Data-centre build and light-current security systems for Partner Group INI Investments — integrated infrastructure and physical security under one delivery team.",
    scope: [
      "Data-centre infrastructure build",
      "Light-current security systems",
      "Access control and CCTV integration",
    ],
  },
  {
    id: "ict-dc-23",
    categoryId: "data-centers",
    code: "D · 23",
    name: "Misr Iran Development Bank",
    client: "Misr Iran Development Bank",
    location: "Admin Buildings",
    description: "Data networks, data centre, and power panels for administrative facilities.",
    overview:
      "Data networks, administrative data centre, and power panel infrastructure for Misr Iran Development Bank — a complete banking technology backbone.",
    scope: [
      "Data networks",
      "Administrative data centre",
      "Power distribution panels",
    ],
  },
  {
    id: "ict-dc-24",
    categoryId: "data-centers",
    code: "D · 24",
    name: "Sanofi",
    client: "Sanofi",
    location: "Pharma · Egypt",
    description:
      "Data network renovation for Sanofi factory administration building and data center.",
    overview:
      "Data network design and renovation for Sanofi Factory — copper and optical fiber cabling and full administration building data-centre refurbishment for pharmaceutical operations.",
    scope: [
      "Data network for administration building",
      "Copper cables and optical fiber (O/F) cables",
      "Renovation of all data network infrastructure",
      "Data-centre refurbishment on administration building",
    ],
  },

  // ── Security Systems ───────────────────────────────────────────────
  {
    id: "ict-ss-01",
    categoryId: "security-systems",
    code: "S · 01",
    name: "IBM",
    client: "IBM",
    location: "Pyramids Heights · Smart Village",
    description: "Access control, CCTV, time and attendance, and intrusion systems.",
    overview:
      "Integrated physical security for IBM at Smart Village — access control, CCTV, time-and-attendance, and intrusion detection protecting mission-critical call-center operations.",
    scope: ["Access Control", "CCTV", "Time and Attendance", "Intrusion"],
  },
  {
    id: "ict-ss-02",
    categoryId: "security-systems",
    code: "S · 02",
    name: "Honda Egypt",
    client: "Honda Egypt",
    location: "Egypt",
    description: "Access control and time-and-attendance for Honda Egypt facilities.",
    overview:
      "Access control and time-and-attendance systems for Honda Egypt — workforce and perimeter security for automotive manufacturing operations.",
    scope: ["Access Control", "Time and Attendance"],
  },
  {
    id: "ict-ss-03",
    categoryId: "security-systems",
    code: "S · 03",
    name: "Aventis – Sanofi",
    client: "Aventis – Sanofi Pharma",
    location: "Egypt",
    description: "Access control, entrance gates, and time-and-attendance for pharmaceutical operations.",
    overview:
      "Security and workforce systems for Aventis – Sanofi Pharma — access control, entrance gates, and time-and-attendance across regulated pharmaceutical facilities.",
    scope: ["Access Control", "Entrance Gates", "Time and Attendance"],
  },
  {
    id: "ict-ss-04",
    categoryId: "security-systems",
    code: "S · 04",
    name: "Exxon Mobil",
    client: "Exxon Mobil",
    location: "Egypt",
    description: "Access control and CCTV for Exxon Mobil facilities.",
    overview:
      "Access control and CCTV systems for Exxon Mobil in Egypt — perimeter and facility security for energy-sector operations.",
    scope: ["Access Control", "CCTV"],
  },
  {
    id: "ict-ss-05",
    categoryId: "security-systems",
    code: "S · 05",
    name: "Orange",
    client: "Orange Egypt",
    location: "Nile City · Smart Village · Alexandria",
    description: "Access control, entrance gates, and time-and-attendance across Orange sites.",
    overview:
      "Physical security for Orange Egypt across Nile City, Smart Village, and Alexandria — access control, entrance gates, and time-and-attendance integrated with network operations.",
    scope: ["Access Control", "Entrance Gates", "Time and Attendance"],
  },
  {
    id: "ict-ss-06",
    categoryId: "security-systems",
    code: "S · 06",
    name: "General Motors Egypt",
    client: "General Motors Egypt",
    location: "Egypt",
    description: "Access control and entrance gates for General Motors Egypt.",
    overview:
      "Access control and entrance gate systems for General Motors Egypt — securing manufacturing and administrative facilities.",
    scope: ["Access Control", "Entrance Gates"],
  },
  {
    id: "ict-ss-07",
    categoryId: "security-systems",
    code: "S · 07",
    name: "Quintiles Egypt",
    client: "Quintiles Egypt",
    location: "Egypt",
    description: "Access control and CCTV for Quintiles clinical research operations.",
    overview:
      "Access control and CCTV for Quintiles Egypt — integrated physical security for clinical research and pharmaceutical operations.",
    scope: ["Access Control", "CCTV"],
  },
  {
    id: "ict-ss-08",
    categoryId: "security-systems",
    code: "S · 08",
    name: "NTRA",
    client: "NTRA",
    location: "Egypt",
    description: "Access control and time-and-attendance for NTRA facilities.",
    overview:
      "Access control and time-and-attendance systems for the National Telecommunications Regulatory Authority (NTRA) — securing regulatory and administrative facilities.",
    scope: ["Access Control", "Time and Attendance"],
  },
  {
    id: "ict-ss-09",
    categoryId: "security-systems",
    code: "S · 09",
    name: "Toyota Egypt",
    client: "Toyota Egypt",
    location: "Egypt",
    description: "Access control and time-and-attendance for Toyota Egypt.",
    overview:
      "Access control and time-and-attendance deployment for Toyota Egypt manufacturing and administrative operations.",
    scope: ["Access Control", "Time and Attendance"],
  },
  {
    id: "ict-ss-10",
    categoryId: "security-systems",
    code: "S · 10",
    name: "Novartis Pharma",
    client: "Novartis Pharma",
    location: "Egypt",
    description: "Access control and time-and-attendance for Novartis Pharma facilities.",
    overview:
      "Access control and time-and-attendance systems for Novartis Pharma in Egypt — workforce and facility security for pharmaceutical operations.",
    scope: ["Access Control", "Time and Attendance"],
  },
  {
    id: "ict-ss-11",
    categoryId: "security-systems",
    code: "S · 11",
    name: "Carrier – United Tech.",
    client: "Carrier – United Technologies",
    location: "Egypt",
    description: "Access control, CCTV, and time-and-attendance for Carrier facilities.",
    overview:
      "Integrated security for Carrier – United Technologies — access control, CCTV, and time-and-attendance protecting corporate and industrial facilities.",
    scope: ["Access Control", "CCTV", "Time and Attendance"],
  },
  {
    id: "ict-ss-12",
    categoryId: "security-systems",
    code: "S · 12",
    name: "ITIDA",
    client: "ITIDA",
    location: "Egypt",
    description: "Access control and time-and-attendance for ITIDA technology parks.",
    overview:
      "Access control and time-and-attendance for ITIDA — securing technology park facilities and innovation campuses.",
    scope: ["Access Control", "Time and Attendance"],
  },
  {
    id: "ict-ss-13",
    categoryId: "security-systems",
    code: "S · 13",
    name: "Telecom Egypt DC",
    client: "Telecom Egypt",
    location: "Data Center",
    description: "Access control and CCTV for the Telecom Egypt data center.",
    overview:
      "Access control and CCTV for Telecom Egypt's data center — physical security for carrier-grade infrastructure.",
    scope: ["Access Control", "CCTV"],
  },
  {
    id: "ict-ss-14",
    categoryId: "security-systems",
    code: "S · 14",
    name: "Alex Bank",
    client: "Alex Bank",
    location: "Cairo · Alexandria · Mansoura",
    description: "Access control across Alex Bank branches in Cairo, Alexandria, and Mansoura.",
    overview:
      "Access control deployment for Alex Bank across Cairo, Alexandria, and Mansoura branches — securing banking operations at multiple locations.",
    scope: [
      "Alex Bank Cairo Branch — Access Control",
      "Alexandria Branch — Access Control",
      "Mansoura Branch — Access Control",
    ],
  },
  {
    id: "ict-ss-15",
    categoryId: "security-systems",
    code: "S · 15",
    name: "Rotana Data Center",
    client: "Rotana",
    location: "Egypt",
    description: "Access control for the Rotana data center.",
    overview:
      "Access control system for Rotana Data Center — perimeter and facility security for media and enterprise infrastructure.",
    scope: ["Access Control"],
  },
  {
    id: "ict-ss-16",
    categoryId: "security-systems",
    code: "S · 16",
    name: "Al Futtaim – CFC",
    client: "Al Futtaim (CFC)",
    location: "Egypt",
    description: "Access control for Al Futtaim CFC facilities.",
    overview:
      "Access control system design, installation, and commissioning for Al Futtaim (CFC) facilities.",
    scope: ["Access Control"],
  },
  {
    id: "ict-ss-17",
    categoryId: "security-systems",
    code: "S · 17",
    name: "World Youth Forum",
    client: "World Youth Forum",
    location: "Sharm El Sheikh",
    description: "Access control and software services for World Youth Forum venues.",
    overview:
      "Access control and software services for the World Youth Forum — securing high-profile international event venues and delegate facilities.",
    scope: ["Access Control", "Software Services"],
  },
  {
    id: "ict-ss-18",
    categoryId: "security-systems",
    code: "S · 18",
    name: "WE – Tanta & Almaza",
    client: "Telecom Egypt",
    location: "Tanta · Almaza",
    description: "Access control and CCTV for WE branches in Tanta and Almaza.",
    overview:
      "Access control and CCTV for Telecom Egypt WE branches in Tanta and Almaza — branch-level physical security integrated with carrier operations.",
    scope: ["WE Tanta Branch — Access Control, CCTV", "WE Almaza Branch — Access Control, CCTV"],
  },
  {
    id: "ict-ss-19",
    categoryId: "security-systems",
    code: "S · 19",
    name: "Cairo Bank",
    client: "Cairo Bank",
    location: "Egypt",
    description: "Access control and CCTV for Cairo Bank operations.",
    overview:
      "Access control and CCTV systems for Cairo Bank — integrated physical security supporting secure banking operations.",
    scope: ["Access Control", "CCTV"],
  },
  {
    id: "ict-ss-20",
    categoryId: "security-systems",
    code: "S · 20",
    name: "ITS Turnkey Systems",
    client: "ITS (International Turnkey System)",
    location: "Egypt",
    description: "Access control, CCTV, and fire alarm for ITS facilities.",
    overview:
      "Comprehensive security package for International Turnkey Systems (ITS) — access control, CCTV, and fire alarm systems.",
    scope: ["Access Control", "CCTV", "Fire Alarm"],
  },
  {
    id: "ict-ss-21",
    categoryId: "security-systems",
    code: "S · 21",
    name: "Pearson Education",
    client: "Pearson Education",
    location: "Egypt",
    description: "Access control and CCTV for Pearson Education facilities.",
    overview:
      "Access control and CCTV for Pearson Education — securing educational and administrative premises.",
    scope: ["Access Control", "CCTV"],
  },
  {
    id: "ict-ss-22",
    categoryId: "security-systems",
    code: "S · 22",
    name: "Aman Financial",
    client: "Aman Financial",
    location: "Egypt",
    description: "Access control for Aman Financial facilities.",
    overview:
      "Access control systems for Aman Financial — perimeter and facility security for financial services operations.",
    scope: ["Access Control"],
  },
  {
    id: "ict-ss-23",
    categoryId: "security-systems",
    code: "S · 23",
    name: "National Bank of Egypt",
    client: "National Bank of Egypt",
    location: "Visa Branch · Data Center",
    description: "Access control and CCTV for NBE Visa branch and data center.",
    overview:
      "Physical security for National Bank of Egypt across the Visa branch and data center — access control and CCTV for banking infrastructure.",
    scope: [
      "National Bank of Egypt Visa Branch — Access Control",
      "National Bank of Egypt Data Center — Access Control, CCTV",
    ],
  },
  {
    id: "ict-ss-24",
    categoryId: "security-systems",
    code: "S · 24",
    name: "United Bank",
    client: "United Bank",
    location: "Egypt",
    description: "Access control and CCTV for United Bank operations.",
    overview:
      "Access control and CCTV deployment for United Bank — integrated physical security across banking facilities.",
    scope: ["Access Control", "CCTV"],
  },
  {
    id: "ict-ss-25",
    categoryId: "security-systems",
    code: "S · 25",
    name: "SIO",
    client: "SIO",
    location: "Egypt",
    description: "Access control and CCTV for SIO facilities.",
    overview:
      "Access control and CCTV systems for SIO — securing institutional and administrative facilities.",
    scope: ["Access Control", "CCTV"],
  },
  {
    id: "ict-ss-26",
    categoryId: "security-systems",
    code: "S · 26",
    name: "GAEB",
    client: "GAEB",
    location: "Egypt",
    description: "Access control and CCTV for GAEB facilities.",
    overview:
      "Access control and CCTV integration for GAEB — complete physical security across operational environments.",
    scope: ["Access Control", "CCTV"],
  },
  {
    id: "ict-ss-27",
    categoryId: "security-systems",
    code: "S · 27",
    name: "Technical Consultancy",
    client: "Technical Consultancy",
    location: "Egypt",
    description: "Access control, CCTV, and software services for consultancy operations.",
    overview:
      "Technical consultancy engagement covering access control, CCTV, and software services — integrated security and systems advisory for enterprise clients.",
    scope: ["Access Control", "CCTV", "Software Services"],
  },
];

const criticalNetworkProjects = ICT_PROJECT_ENTRIES.filter(
  (entry) => entry.categoryId === "critical-networks",
).map((entry, index) => buildIctProject(entry, index));

const dataCenterProjects = ICT_PROJECT_ENTRIES.filter(
  (entry) => entry.categoryId === "data-centers",
).map((entry, index) => buildIctProject(entry, index));

const securityProjects = ICT_PROJECT_ENTRIES.filter(
  (entry) => entry.categoryId === "security-systems",
).map((entry, index) => buildIctProject(entry, index));

export const ICT_PROJECTS: IctProject[] = [
  ...criticalNetworkProjects,
  ...dataCenterProjects,
  ...securityProjects,
];

export function getIctProjectsByCategory(categoryId: IctCategoryId): IctProject[] {
  if (categoryId === "all") return ICT_PROJECTS;
  return ICT_PROJECTS.filter((project) => project.categoryId === categoryId);
}

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
