import type { FinishingCategory, FinishingCategoryId, FinishingProject } from "@/types/finishing-project";

import key1 from "@/assets/finishingimages/3dkey1.png";
import key2 from "@/assets/finishingimages/3dkey2.png";
import key3 from "@/assets/finishingimages/3dkey3.png";
import key4 from "@/assets/finishingimages/3dkey4.png";
import key5 from "@/assets/finishingimages/3dkey5.png";
import key6 from "@/assets/finishingimages/3dkey6.png";
import key7 from "@/assets/finishingimages/3dkey7.png";
import key8 from "@/assets/finishingimages/3dkey8.png";
import compound1 from "@/assets/finishingimages/3dCompound.png";
import compound2 from "@/assets/finishingimages/3dCompound2.png";
import compound3 from "@/assets/finishingimages/3dCompound3.png";
import compound4 from "@/assets/finishingimages/3dCompound4.png";
import compound5 from "@/assets/finishingimages/3dCompound5.png";
import mivida1 from "@/assets/finishingimages/3dmivida1.png";
import mivida2 from "@/assets/finishingimages/3dmivida2.png";
import mivida3 from "@/assets/finishingimages/3dmivida3.png";
import hayah3d1 from "@/assets/finishingimages/3dhayah1.png";
import ds1 from "@/assets/finishingimages/3dDS1.png";
import ds2 from "@/assets/finishingimages/3dDS2.png";
import ds3 from "@/assets/finishingimages/3dDS3.png";
import imce2023_1 from "@/assets/finishingimages/3dIMCE1-2023.png";
import imce2023_2 from "@/assets/finishingimages/3dIMCE2-2023.png";
import imce2023_3 from "@/assets/finishingimages/3dIMCE3-2023.png";
import imce2024_1 from "@/assets/finishingimages/3dIMCE1-2024.png";
import imce2024_2 from "@/assets/finishingimages/3dIMCE2-2024.png";
import imce2024_3 from "@/assets/finishingimages/3dIMCE3-2024.png";
import think3d1 from "@/assets/finishingimages/3dthink1.png";
import think3d2 from "@/assets/finishingimages/3dthink2.png";
import media3d1 from "@/assets/finishingimages/3dmedia1.png";
import media3d2 from "@/assets/finishingimages/3dmedia2.png";
import tact3d1 from "@/assets/finishingimages/3dtact1.png";
import tact3d2 from "@/assets/finishingimages/3dtact2.png";

import onImce1 from "@/assets/finishingimages/ONimce1.png";
import onImce2 from "@/assets/finishingimages/ONimce2.png";
import onImce3 from "@/assets/finishingimages/ONimce3.png";
import onHayah1 from "@/assets/finishingimages/ONhayah1.png";
import onHayah2 from "@/assets/finishingimages/ONhayah2.png";
import onThink1 from "@/assets/finishingimages/ONthink1.png";
import onThink2 from "@/assets/finishingimages/ONthink2.png";
import onMedia1 from "@/assets/finishingimages/ONmedia1.png";
import onMedia2 from "@/assets/finishingimages/ONmedia2.png";
import onTact1 from "@/assets/finishingimages/ONtact1.png";
import onTact2 from "@/assets/finishingimages/ONtact2.png";
import onCaravans1 from "@/assets/finishingimages/ONcaravans1.png";
import onKetabak1 from "@/assets/finishingimages/ONketabak1.png";

import transCaravan1 from "@/assets/finishingimages/TRANScaravanhaya1.png";
import transCaravan2 from "@/assets/finishingimages/TRANScaravanhaya2.png";

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

type Seed = FinishingProject;

const SEEDS: Seed[] = [
  // 3D Projects
  {
    id: "fin-3d-keys-52",
    categoryId: "3d-projects",
    name: "Key / 52",
    features: ["Residential", "East Cairo", "Luxury Living", "Smart Automation"],
    description:
    "General-contracting and build scope for Hassan Allam Properties' KEYS | 52 a boutique serviced-apartment community of 52 keys in East Cairo. Work spanned structural execution, MEP and fit-out coordination, and premium finishing across marble foyers, plastered interiors and fully-serviced amenity spaces engineered to hotel-grade standards for an elite residential audience.",
    images: [key1, key2, key3, key4, key5, key6, key7, key8],
  },
  {
    id: "fin-3d-01",
    categoryId: "3d-projects",
    name: "Compound Apartment",
    features: ["Residential"],
    description:
      "This modern apartment exemplifies our commitment to creating elegant and functional living spaces. We seamlessly integrated clean lines, natural light, and a neutral color palette with vibrant accents to achieve a sophisticated yet inviting atmosphere.",
    images: [compound1, compound2, compound3, compound4, compound5],
  },
  {
    id: "fin-3d-02",
    categoryId: "3d-projects",
    name: "Mivida Living Space",
    features: ["Residential", "Interior"],
    description:
      "In keeping with the Mivida lifestyle, this modern bathroom design emphasizes comfort and relaxation. We incorporated natural light, soothing color palettes, and luxurious textures to create a spa-like atmosphere.",
    images: [mivida1, mivida2, mivida3],
  },
  {
    id: "fin-3d-03",
    categoryId: "3d-projects",
    name: "Hayah Karima & Ketabak",
    features: ["Public", "Community"],
    description:
      "A community-focused 3D visualisation for the Hayah Karima & Ketabak initiative — designed to support public engagement and reflect the programme's social impact across Egyptian communities.",
    images: [hayah3d1],
  },
  {
    id: "fin-3d-04",
    categoryId: "3d-projects",
    name: "DS+ Roof",
    features: ["Commercial", "Rooftop"],
    description:
      "This rooftop design reflects the dynamic and creative spirit of DS+. We incorporated bold colors, unique textures, and playful elements to create a space that is both inspiring and representative of the agency's brand identity.",
    images: [ds1, ds2, ds3],
  },
  {
    id: "fin-3d-05",
    categoryId: "3d-projects",
    name: "IMCE Expo 2023 Ebda Booth",
    features: ["Exhibition", "Brand"],
    description:
      "Designed for maximum impact at IMCE, the Ebda Booth featured a functional industrial aesthetic. We optimized space with clean lines and open layouts, creating a dynamic and engaging environment for visitors to explore Ebda's latest innovations.",
    images: [imce2023_1, imce2023_2, imce2023_3],
  },
  {
    id: "fin-3d-06",
    categoryId: "3d-projects",
    name: "IMCE Expo 2024 Ebda Booth",
    features: ["Exhibition", "Brand"],
    description:
      "Building upon the success of our 2023 booth, we further refined our industrial design approach for Ebda's presence at IMCE 2024. We incorporated new interactive elements and cutting-edge technology to showcase Ebda's continued evolution as a leader in manufacturing innovation.",
    images: [imce2024_1, imce2024_2, imce2024_3],
  },
  {
    id: "fin-3d-07",
    categoryId: "3d-projects",
    name: "Administrative Villa Think",
    features: ["Commercial", "Office"],
    description:
      "We transformed an administrative villa into a modern and inspiring workspace for Think. The design prioritizes collaboration and creativity, with open-plan layouts, flexible workspaces, and designated areas for brainstorming and teamwork.",
    images: [think3d1, think3d2],
  },
  {
    id: "fin-3d-08",
    categoryId: "3d-projects",
    name: "Administrative Villa Media-Magnet",
    features: ["Commercial", "Office"],
    description:
      "We created a modern and inspiring workspace for Media Magnet that prioritizes both comfort and functionality. The design incorporates comfortable seating, natural light, and a focus on employee well-being, creating a space where creativity can flourish.",
    images: [media3d1, media3d2],
  },
  {
    id: "fin-3d-09",
    categoryId: "3d-projects",
    name: "Administrative Villa Tact Innovations",
    features: ["Commercial", "Flagship"],
    description:
      "As a leading interior design and engineering firm, Tact Innovations — our site — required a workspace that reflected their innovative spirit. We designed a modern style for our administrative site that is both inspiring and functional, showcasing our expertise and creativity to clients and employees alike.",
    images: [tact3d1, tact3d2],
  },
  // On Ground
  {
    id: "fin-og-01",
    categoryId: "on-ground",
    name: "IMCE Expo Ebda Booth",
    features: [
      "Exhibition",
      "Live Build",
      "Booth Style: Industrial",
      "Location: New Cairo",
      "Status: Delivered",
    ],
    description:
      "Implemented for maximum impact at IMCE, the Ebda Booth featured a functional industrial aesthetic. We optimized space with clean lines and open layouts, creating a dynamic and engaging environment for visitors to explore Ebda's latest innovations.",
    images: [onImce1, onImce2, onImce3],
  },
  {
    id: "fin-og-02",
    categoryId: "on-ground",
    name: "Hayah Karima",
    features: [
      "Public",
      "Community Initiative",
      "Sector: Workspace",
      "Style: Modern Office",
      "Status: Delivered",
    ],
    description:
      "On-ground delivery of a modern workspace for the Hayah Karima community initiative — built to support public programmes with a functional, contemporary office environment.",
    images: [onHayah1, onHayah2],
  },
  {
    id: "fin-og-06",
    categoryId: "on-ground",
    name: "Caravans · Hayah Karima",
    features: ["MOBILE UNITS", "MULTIPLE CITIES"],
    description:
      "Equipped caravans and custom mobile units supplied across Egyptian cities for the national Hayah Karima initiative.",
    images: [onCaravans1],
  },
  {
    id: "fin-og-07",
    categoryId: "on-ground",
    name: "Hayah Karima & Ketabak",
    features: ["BOOTH", "LIBRARY", "CAIRO"],
    description:
      "Custom library-style booths and stands designed and built for the Hayah Karima and Ketabak reading programs.",
    images: [onKetabak1],
  },
  {
    id: "fin-og-03",
    categoryId: "on-ground",
    name: "Administrative Villa Think",
    features: [
      "Commercial",
      "Office Interior",
      "Type: Administrative Villa",
      "Style: Modern Office",
      "Location: New Cairo",
      "Status: Delivered",
    ],
    description:
      "We transformed an administrative villa into a modern and inspiring workspace for Think. The design prioritizes collaboration and creativity, with open-plan layouts, flexible workspaces, and designated areas for brainstorming and teamwork.",
    images: [onThink1, onThink2],
  },
  {
    id: "fin-og-04",
    categoryId: "on-ground",
    name: "Administrative Villa Media-Magnet",
    features: [
      "Commercial",
      "Creative Office",
      "Type: Workspace",
      "Style: Modern Office",
      "Location: New Cairo",
      "Status: Delivered",
    ],
    description:
      "We created a modern and inspiring workspace for Media Magnet that prioritizes both comfort and functionality. The design incorporates comfortable seating, natural light, and a focus on employee well-being, creating a space where creativity can flourish.",
    images: [onMedia1, onMedia2],
  },
  {
    id: "fin-og-05",
    categoryId: "on-ground",
    name: "Administrative Villa Tact Innovations",
    features: [
      "Commercial",
      "Flagship HQ",
      "Type: Workspace",
      "Style: Modern Office",
      "Location: New Cairo",
      "Status: Delivered",
    ],
    description:
      "As a leading interior design and engineering firm, Tact Innovations — our site — required a workspace that reflected their innovative spirit. We designed a modern style for our administrative site that is both inspiring and functional, showcasing our expertise and creativity to clients and employees alike.",
    images: [onTact1, onTact2],
  },
  // Transportation & Supplies
  {
    id: "fin-tr-01",
    categoryId: "transportation",
    name: "Hayah Karima Caravans",
    features: ["Transportation", "Social Initiative", "Location: Different Cities"],
    description:
      "We proudly played a role in the Hayah Karima initiative by supplying caravans across numerous Egyptian cities. Our commitment to social responsibility drives us to provide high-quality, sustainable solutions that improve the lives of communities in need.",
    images: [transCaravan1, transCaravan2],
  },
];

export const FINISHING_PROJECTS: FinishingProject[] = SEEDS;

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
