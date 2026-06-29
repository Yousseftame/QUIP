import ProjectGalleryPage from "./ProjectGalleryPage";
import { ICT_PROJECTS } from "@/data/ict-projects";

const ICT_LIST_PATH = "/projects/ict";

export default function IctProjectsPage() {
  return (
    <ProjectGalleryPage
      eyebrow="Projects"
      titleLine1="ICT"
      titleLine2="Infrastructure"
      subtitle="Network, security, and low-current systems delivered across the Middle East — from structured cabling to full-scale integration."
      projects={ICT_PROJECTS}
      detailBasePath={ICT_LIST_PATH}
    />
  );
}
