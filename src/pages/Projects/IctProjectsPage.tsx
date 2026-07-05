import ProjectGalleryPage from "./ProjectGalleryPage";
import { ICT_PROJECTS } from "@/data/ict-projects";

const ICT_LIST_PATH = "/projects/ict";

export default function IctProjectsPage() {
  return (
    <ProjectGalleryPage
      eyebrow="Projects"
      titleLine1="ICT"
      titleLine2="Infrastructure"
      subtitle="Three decades of mission-critical networks, data centers, and 
security systems for enterprise and government."
      projects={ICT_PROJECTS}
      detailBasePath={ICT_LIST_PATH}
    />
  );
}
