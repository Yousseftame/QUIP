export type CertificationGroup = {
  id: string;
  provider: string;
  items: string[];
};

export const CERTIFICATION_GROUPS: CertificationGroup[] = [
  {
    id: "rm",
    provider: "R&M · REICHLE & DE-MASSARI",
    items: [
      "Authorized Star Partner",
      "R&M freenet OC Installation Manager",
      "R&M freenet OC Designer",
      "LAN Installation Manager",
    ],
  },
  {
    id: "lenel",
    provider: "LENEL · UTC",
    items: [
      "Certified Professional: Access Control",
      "Lenel Certified Associate",
      "EMEA OnGuard Professional Access",
      "OnGuard 7.5 Enterprise",
    ],
  },
  {
    id: "siemon",
    provider: "SIEMON CABLING SYSTEM",
    items: [
      "Certified Installer / Designer",
      "Certificate of Approval",
      "Authorized Designer / Installer",
      "BICSI-recognized (RCDD · Installer · Technician)",
    ],
  },
  {
    id: "utc-fire",
    provider: "UTC FIRE & SECURITY",
    items: [
      "Maestro Fire Graphics Course",
      "Ziton ZP2 Fire Detection",
      "Ziton ZP3 Fire Detection",
      "Fire detection & graphics systems",
    ],
  },
];
