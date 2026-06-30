export type PartnerLogo = {
  src: string;
  alt: string;
};

export type PartnerSection = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  logos: PartnerLogo[];
};

function logoAltFromPath(path: string): string {
  const filename = path.split("/").pop()?.replace(/\.[^.]+$/i, "") ?? "Partner";
  if (filename.startsWith("GOV")) {
    return `Government partner ${filename.replace("GOV", "")}`;
  }
  return filename.replace(/[-_]/g, " ");
}

function mergeLogoModules(...moduleGroups: Record<string, string>[]): PartnerLogo[] {
  return moduleGroups
    .flatMap((modules) => Object.entries(modules))
    .map(([path, src]) => ({ src, alt: logoAltFromPath(path) }))
    .sort((a, b) => a.alt.localeCompare(b.alt));
}

const ICT_LOGOS = mergeLogoModules(
  import.meta.glob<string>("@/assets/QUIP-LOGOS/*.png", { eager: true, import: "default" }),
);

const SOFTWARE_LOGOS = mergeLogoModules(
  import.meta.glob<string>("@/assets/software-logos/*.png", { eager: true, import: "default" }),
  import.meta.glob<string>("@/assets/software-logos/*.webp", { eager: true, import: "default" }),
  import.meta.glob<string>("@/assets/software-logos/*.svg", { eager: true, import: "default" }),
);

const FINISHING_LOGOS = mergeLogoModules(
  import.meta.glob<string>("@/assets/tact-logo/*.png", { eager: true, import: "default" }),
  import.meta.glob<string>("@/assets/tact-logo/*.jpg", { eager: true, import: "default" }),
  import.meta.glob<string>("@/assets/tact-logo/*.jpeg", { eager: true, import: "default" }),
  import.meta.glob<string>("@/assets/tact-logo/*.webp", { eager: true, import: "default" }),
  import.meta.glob<string>("@/assets/tact-logo/*.svg", { eager: true, import: "default" }),
);

export const PARTNER_SECTIONS: PartnerSection[] = [
  {
    id: "ict-partners",
    eyebrow: "ICT Infrastructure",
    title: "Trusted to Build What Keeps the Region Connected",
    description:
      "Governments, enterprises, and institutions across the Middle East partner with QUIP for networks, security, and communications infrastructure — engineered for reliability, scale, and long-term performance.",
    logos: ICT_LOGOS,
  },
  {
    id: "software-partners",
    eyebrow: "Software & AI",
    title: "Where Ambition Meets Execution in Code",
    description:
      "From fast-growing startups to established organizations, our software partners choose QUIP to deliver platforms and digital products that are robust, intuitive, and built to evolve with their business.",
    logos: SOFTWARE_LOGOS,
  },
  {
    id: "finishing-partners",
    eyebrow: "Finishing & Construction",
    title: "Craftsmanship Trusted by Developers & Owners",
    description:
      "Leading developers and property owners rely on QUIP for finishing and fit-out excellence — transforming spaces with precision, quality materials, and delivery you can count on from handover to the final detail.",
    logos: FINISHING_LOGOS,
  },
];
