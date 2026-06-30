import type {
  SoftwareDepartment,
  SoftwareDepartmentId,
  SoftwareProject,
} from "@/types/software-project";
import hasMeaImg from "@/assets/softwarepageimages/harvard.png";
import hahQsImg from "@/assets/softwarepageimages/HAH.png";
import rookyaImg from "@/assets/softwarepageimages/ROOKYA.png";
import rawabitImg from "@/assets/softwarepageimages/RAWABIT.png";
import globalHousingImg from "@/assets/softwarepageimages/GLOBALHOUSING.png";
import ribatImg from "@/assets/softwarepageimages/RIBAT.png";
import wave4petImg from "@/assets/softwarepageimages/wave4pet-mobo.png";
import cfhImg from "@/assets/softwarepageimages/cairocapital-mobo.png";
import sharedrobeImg from "@/assets/softwarepageimages/sharedrobe-mobo.png";
import keysImg from "@/assets/softwarepageimages/keys-mobo.png";
import hudhudImg from "@/assets/softwarepageimages/hudhud-mobo.png";
import nacdwImg from "@/assets/softwarepageimages/nacdw-mobo.png";
import tutImg from "@/assets/softwarepageimages/tut.png";
import ioscoImg from "@/assets/softwarepageimages/iosco.png";

export const SOFTWARE_DEPARTMENTS: SoftwareDepartment[] = [
  {
    id: "web",
    index: "01",
    label: "Web",
    headline: "Platforms built for scale and trust",
    intro:
      "Enterprise web applications, marketplaces, and event systems — engineered for performance, security, and seamless user experiences across browsers.",
  },
  {
    id: "mobile",
    index: "02",
    label: "Mobile",
    headline: "Apps built for life on the move",
    intro:
      "Cross-platform mobile products for finance, services, media, and field operations — fast, reliable, and designed for real-world daily use.",
  },
];

type Seed = Omit<SoftwareProject, "departmentId"> & { departmentId: SoftwareDepartmentId };

const SEEDS: Seed[] = [
  {
    id: "sw-has-mea",
    departmentId: "web",
    title: "HAS-MEA",
    subtitle: "Harvard Alumni Summit",
    image: hasMeaImg,
    demoUrl: "https://has-mea.com/",
    description:
      "The Harvard Alumni Summit for the Middle East & Africa required a high-stakes, end-to-end event management system for their prestigious gathering in Cairo. The platform needed to handle complex logistics, including tiered ticketing for exclusive local tours and secure access control for an elite global audience.",
    solutions: [
      {
        title: "Event Management Core",
        description:
          "Developed a custom, high-performance management system using a Laravel backend to ensure security and reliability for all event operations.",
      },
      {
        title: "Smart Ticketing & Access",
        description:
          "Engineered a specialized ticketing engine for limited-capacity tours and breakout sessions, combined with a QR code validation system for seamless and secure entry.",
      },
      {
        title: "Scalable Infrastructure",
        description:
          "Deployed on a robust, scalable environment designed to handle the high-traffic demands of international delegates and ensure uninterrupted service.",
      },
    ],
  },
  {
    id: "sw-ai-qs",
    departmentId: "web",
    title: "AI-Powered Quantity Surveying",
    subtitle: "HAH",
    image: hahQsImg,
    demoUrl: "https://qs-bice.vercel.app/",
    description:
      "As the BIM arm of Hassan Allam, the client handles vast volumes of architectural data. Traditional quantity surveying — measuring materials and estimating costs from complex drawings — is a labor-intensive process prone to manual error and bottlenecks. The client required an intelligent solution to automate data extraction from engineering files without sacrificing precision.",
    solutions: [
      {
        title: "AI Automation",
        description:
          "Engineered an AI QS system that automatically parses technical drawings to perform instant Quantity Take-Offs (QTO).",
      },
      {
        title: "Intelligent Processing",
        description:
          "Implemented custom Python logic to detect and measure MEP components, such as insulation and piping, with high accuracy.",
      },
      {
        title: "Data Integrity",
        description:
          "Built a seamless pipeline that converts complex visual data into structured cost plans, ensuring accuracy for project budgeting.",
      },
    ],
  },
  {
    id: "sw-rookya",
    departmentId: "web",
    title: "Rookya Insurance",
    subtitle: "HAH",
    image: rookyaImg,
    demoUrl: "https://rooya.thinkstudio.ai/",
    description:
      "Hassan Allam's subsidiary needed a centralized digital ecosystem to support premium insurance products and bring together key service workflows in one place — unifying scattered information, streamlining premium offerings, and building a scalable foundation for future digital growth.",
    solutions: [
      {
        title: "Intelligence",
        description: "Advanced logic to integrate insurance data across products and service workflows.",
      },
      {
        title: "Architecture",
        description: "Robust Python backend for complex data flows and reliable operations at scale.",
      },
      {
        title: "Experience",
        description: "Premium React/Next.js web interface delivering a streamlined user journey.",
      },
    ],
  },
  {
    id: "sw-rawabit",
    departmentId: "web",
    title: "Rawabit Al-Emaar Platform",
    subtitle: "KSA",
    image: rawabitImg,
    demoUrl: "https://elinks.sa/",
    description:
      "The Saudi construction sector often faces fragmentation between project owners and service providers. The client required a digital bridge to connect owners with accredited contractors, ensuring transparency, quality, and financial security in a market characterized by complex logistics and high-stakes investments.",
    solutions: [
      {
        title: "Marketplace Ecosystem",
        description:
          "Built a comprehensive platform for finding, comparing, and contracting with verified construction, restoration, and finishing service providers.",
      },
      {
        title: "Secure Financial Management",
        description:
          "Developed an integrated financial gateway for secure payments, minimizing risk for both project owners and contractors.",
      },
      {
        title: "Quality Governance",
        description:
          "Implemented a rigorous evaluation system and technical follow-up modules to ensure execution standards match the client's high expectations.",
      },
      {
        title: "Modern Web Stack",
        description:
          "Leveraged a high-performance React/Next.js frontend to deliver a seamless and simplified contracting user experience.",
      },
    ],
  },
  {
    id: "sw-iskan",
    departmentId: "web",
    title: "Global Housing Platform Iskan",
    subtitle: "KSA",
    image: globalHousingImg,
    demoUrl: "https://grh.sa/home",
    description:
      "The institutional and labor housing sector faced significant challenges regarding organization, transparency, and compliance with government regulations. The client required a comprehensive digital platform to act as a bridge connecting property owners, recruitment companies, and individuals to simplify the process of finding and leasing housing while ensuring total quality.",
    solutions: [
      {
        title: "Integrated Connectivity",
        description:
          "Built a reliable platform that links property owners with recruitment agencies and individuals within a single digital ecosystem.",
      },
      {
        title: "Compliance & Governance",
        description:
          "Developed a system to ensure full compliance with government procedures and regional regulations.",
      },
      {
        title: "Institutional Management",
        description:
          "Designed management tools that prioritize absolute transparency in financial and contractual dealings.",
      },
    ],
  },
  {
    id: "sw-ribat",
    departmentId: "web",
    title: "Ribat Platform",
    subtitle: "KSA",
    image: ribatImg,
    demoUrl: "https://ribat.sa/",
    description:
      "Our client aimed to transform digital matchmaking in Saudi Arabia — moving beyond casual introductions to establish a structured, high-integrity platform that champions user privacy, serious intent, and emotional security within a culturally sensitive context.",
    solutions: [
      {
        title: "Privacy-First Architecture",
        description:
          "Developed a secure digital space using a robust Laravel backend, ensuring complete confidentiality and data protection for sensitive user profiles and interactions.",
      },
      {
        title: "Intelligent Matching Logic",
        description:
          "Implemented clear, structured data flows within the Laravel framework to guide users from initial interest to an assured choice with total transparency and compatibility.",
      },
      {
        title: "Premium User Experience",
        description:
          "Crafted a digital companion interface using React and Next.js, designed to provide a calm, clear, and professional journey for every user.",
      },
      {
        title: "Validated Journey",
        description:
          "Built custom modules to optimize the user experience, respecting time and emotional investment by focusing on high-integrity interactions over high-volume traffic.",
      },
    ],
  },
  {
    id: "sw-wave4pet",
    departmentId: "mobile",
    title: "wave4pet",
    subtitle: "KSA",
    image: wave4petImg,
    description:
      "A leading veterinary service provider in Saudi Arabia sought a digital ecosystem to modernize animal care delivery. The goal was to build wave4pet, an ultimate companion platform empowering mobile veterinarians to provide high-precision service while managing complex logistics across the Kingdom.",
    solutions: [
      {
        title: "High-Performance Mobile Engine",
        description:
          "Developed a specialized cross-platform application using Flutter to ensure a premium, reliable experience for practitioners in the field.",
      },
      {
        title: "Localized Workflow Optimization",
        description:
          "Designed a professional dashboard tailored to the specific scheduling and client management needs of the KSA veterinary sector.",
      },
      {
        title: "Telehealth Integration",
        description:
          "Engineered a secure, real-time video consultation module to facilitate remote expert advice and pre-visit assessments across vast geographic areas.",
      },
      {
        title: "Scalable Backend",
        description:
          "Built on a robust Laravel infrastructure to handle secure medical data and high-concurrency communications.",
      },
    ],
  },
  {
    id: "sw-cfh",
    departmentId: "mobile",
    title: "CFH — Wealth Management in Your Pocket",
    subtitle: "Cairo Financial Holding",
    image: cfhImg,
    description:
      "In Egypt's dynamic financial market, traditional asset management often struggles with delayed reporting and outdated communication. Cairo Financial Holding (CFH) needed a powerful, end-to-end digital solution to give investors real-time control over their assets while upholding the strong trust associated with Egypt's leading investment experts.",
    solutions: [
      {
        title: "End-to-End Asset Platform",
        description:
          "Engineered a high-performance mobile application designed for speed, reliability, and total transparency in asset tracking.",
      },
      {
        title: "Scalable Egyptian Engineering",
        description:
          "Built the platform using a robust, local infrastructure designed to handle high-concurrency financial data while remaining fast and intuitive.",
      },
      {
        title: "Real-Time Visibility",
        description:
          "Developed a live dashboard providing institutional and individual users with instant updates on portfolio growth and market positioning.",
      },
      {
        title: "Secure Investment Gateway",
        description:
          "Implemented enterprise-grade security protocols to ensure peace of mind for users managing high-value capital.",
      },
    ],
  },
  {
    id: "sw-sharedrobe",
    departmentId: "mobile",
    title: "Sharedrobe",
    subtitle: "Fashion Ecosystem",
    image: sharedrobeImg,
    description:
      "The fashion industry faces a significant challenge with fast-fashion waste. Sharedrobe envisioned a community-powered platform to promote a circular wardrobe concept, empowering users to borrow, share, and resell pre-loved styles.",
    solutions: [
      {
        title: "Cross-Platform Performance",
        description:
          "Developed a high-performance mobile application using Flutter, ensuring a seamless, social-media-like experience for users across both iOS and Android devices.",
      },
      {
        title: "Intelligent Wardrobe Management",
        description:
          "Built a digital closet feature allowing users to organize outfits, track their style insights, and effortlessly convert their physical closet into a live marketplace.",
      },
      {
        title: "Social-Commerce Integration",
        description:
          "Engineered a dynamic social feed where users can discover styles, engage with inspiration posts from others, and follow fashion influencers within the community.",
      },
      {
        title: "Transactional Architecture",
        description:
          "Implemented a secure and robust backend to manage the complexities of a multi-sided marketplace, including rental tracking, sales, and peer-to-peer sharing logistics.",
      },
    ],
  },
  {
    id: "sw-keys",
    departmentId: "mobile",
    title: "Keys / Concierge",
    subtitle: "The Smart Service Hub",
    image: keysImg,
    description:
      "Accessing everyday services — from home maintenance to personal lifestyle management — often involves fragmented processes and unverified providers. Our client sought a concierge-style digital marketplace to bridge this gap, connecting users with high-quality services through a high-trust, unified mobile experience.",
    solutions: [
      {
        title: "Centralized Service Architecture",
        description:
          "Developed a comprehensive marketplace that revolutionizes service access by connecting users with a network of verified providers, ensuring reliability and quality.",
      },
      {
        title: "Global Accessibility",
        description:
          "Implemented robust multi-language support to ensure a seamless experience for a diverse user base, reflecting the platform's technology-with-purpose philosophy.",
      },
      {
        title: "Smart Home Dashboard",
        description:
          "Engineered a minimalist, intuitive home screen allowing users to manage multiple service requests from a single, high-end interface, simplifying complex tasks.",
      },
      {
        title: "End-to-End Lifecycle",
        description:
          "Built an integrated pipeline that manages the entire user journey, from the initial digital request to final service completion, for complete transparency and satisfaction.",
      },
    ],
  },
  {
    id: "sw-hudhud",
    departmentId: "mobile",
    title: "Hudhud هدهد",
    subtitle: "The Future of News",
    image: hudhudImg,
    description:
      "In an era of information overload, users require more than just a news aggregator — they need a technology-with-purpose solution that filters noise and provides actionable intelligence. The goal for Hudhud was to create a premium, all-in-one ecosystem that combines real-time reporting with personalized AI, multimedia content, and professional consultancy access.",
    solutions: [
      {
        title: "Cross-Platform Excellence",
        description:
          "Developed a high-performance mobile application using Flutter to deliver a minimal luxury experience across all devices, ensuring broad accessibility and seamless interaction.",
      },
      {
        title: "Multi-Modal Content",
        description:
          "Engineered specialized modules for high-fidelity podcasts and video streaming, creating a rich, engaging media environment that caters to diverse consumption preferences.",
      },
      {
        title: "AI News Assistant",
        description:
          "Integrated advanced LLM and AI agent logic to provide personalized news recommendations tailored to specific user interests, enhancing content relevance.",
      },
      {
        title: "Professional Integration",
        description:
          "Built a seamless consultancy request system, transforming the platform from a news tool into a professional gateway for expert services.",
      },
    ],
  },
  {
    id: "sw-nacdw",
    departmentId: "mobile",
    title: "NACDW",
    subtitle: "Volunteer & Event Ecosystem",
    image: nacdwImg,
    description:
      "As the unified umbrella for Egyptian civil society, the National Council for Women's Development (NACDW) orchestrates extensive national campaigns involving thousands of participants. They needed a robust, high-speed mobile solution to precisely manage volunteer check-ins and event entries — ensuring logistical data accurately reflected their significant community impact.",
    solutions: [
      {
        title: "High-Performance Architecture",
        description:
          "Developed a cross-platform mobile application using Flutter, guaranteeing a responsive and consistent user experience across a wide array of mobile devices and operating systems.",
      },
      {
        title: "Digital Governance",
        description:
          "Built secure and compliant data pipelines that directly support NACDW's strategic objective of unifying civil work databases and enhancing governance through advanced technological solutions.",
      },
      {
        title: "Real-Time Entry Management",
        description:
          "Engineered a rapid and dependable digital gateway for event organizers to efficiently manage entries, significantly reducing bottlenecks during large-scale distribution and service events nationwide.",
      },
      {
        title: "Streamlined Coordination",
        description:
          "Provided field officers with an intuitive interface for precise, real-time tracking of volunteer contributions and critical project milestones, improving overall operational transparency and efficiency.",
      },
    ],
  },
  {
    id: "sw-tut",
    departmentId: "web",
    title: "TUT",
    subtitle: "The Gateway to Egyptian Craftsmanship",
    image: tutImg,
    demoUrl: "https://tradeontut.com/",
    description:
      "Egypt's rich cultural tapestry is home to unparalleled craftsmanship, yet local artisans often lack a premium global stage to showcase their work. The client required an exclusive digital gateway — TUT — to curate and deliver fine-end Egyptian brands to a global audience, bridging the gap between ancient heritage and modern elegance.",
    solutions: [
      {
        title: "Curated Marketplace",
        description:
          "Developed a multivendor commerce ecosystem designed to host an exclusive collection of luxury fashion and authentic, locally-made decor, ensuring product authenticity and exclusivity.",
      },
      {
        title: "Sustainable Infrastructure",
        description:
          "Engineered a robust backend using Laravel to manage complex vendor logistics, ensuring ethical practices and efficient operations are at the forefront of the platform.",
      },
      {
        title: "Bespoke Digital Identity",
        description:
          "Crafted a premium, high-performance web interface tailored to mirror the exquisite quality and meticulous artistry of the handcrafted goods, providing an intuitive and aesthetically pleasing user experience.",
      },
      {
        title: "Global Stage",
        description:
          "Optimized the platform for international reach, providing local creators with a world-class venue to share their story of heritage and quality with a global audience.",
      },
    ],
  },
  {
    id: "sw-iosco",
    departmentId: "web",
    title: "IOSCO International Conference",
    subtitle: "Lucky Tours",
    image: ioscoImg,
    description:
      "Lucky Tours required a specialized digital infrastructure to manage the complex hospitality and accommodation needs for the IOSCO Annual Meeting, a global event for world-leading securities regulators — creating a real-time bridge between event registration and hotel booking systems for hundreds of international delegates.",
    solutions: [
      {
        title: "Streamlined Booking Journey",
        description:
          "Developed a module for the Lucky Tours portal, simplifying the transition from event registration to accommodation booking.",
      },
      {
        title: "Data Sync",
        description:
          "Implemented secure pipelines to sync delegate information with hotel management systems, reducing manual entry and errors.",
      },
      {
        title: "Robust Infrastructure",
        description:
          "Leveraged a strong backend to ensure the platform remained responsive during peak high-traffic periods from global delegates.",
      },
    ],
  },
];

export const SOFTWARE_PROJECTS: SoftwareProject[] = SEEDS;

export function getSoftwareProjectsByDepartment(
  departmentId: SoftwareDepartmentId,
): SoftwareProject[] {
  return SOFTWARE_PROJECTS.filter((p) => p.departmentId === departmentId);
}

export function getSoftwareProjectById(id: string | undefined) {
  if (!id) return undefined;
  return SOFTWARE_PROJECTS.find((p) => p.id === id);
}

export function getSoftwareDepartment(id: SoftwareDepartmentId) {
  return SOFTWARE_DEPARTMENTS.find((d) => d.id === id);
}

export function getSoftwareProjectNeighbors(id: string | undefined) {
  const project = getSoftwareProjectById(id);
  if (!project) return { prev: undefined, next: undefined };
  const siblings = getSoftwareProjectsByDepartment(project.departmentId);
  const index = siblings.findIndex((p) => p.id === id);
  return {
    prev: index > 0 ? siblings[index - 1] : undefined,
    next: index < siblings.length - 1 ? siblings[index + 1] : undefined,
  };
}
