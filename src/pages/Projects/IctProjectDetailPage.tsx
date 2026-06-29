import { Navigate, useParams } from "react-router-dom";
import ProjectDetailPage from "./ProjectDetailPage";
import { getIctProjectById, getIctProjectNeighbors } from "@/data/ict-projects";

const LIST_PATH = "/projects/ict";

export default function IctProjectDetailPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = getIctProjectById(projectId);

  if (!project) {
    return <Navigate to={LIST_PATH} replace />;
  }

  const { prev, next } = getIctProjectNeighbors(projectId);

  return (
    <ProjectDetailPage
      project={project}
      categoryLabel="ICT Infrastructure"
      backLabel="All ICT Projects"
      backPath={LIST_PATH}
      detailBasePath={LIST_PATH}
      prevProject={prev}
      nextProject={next}
    />
  );
}
