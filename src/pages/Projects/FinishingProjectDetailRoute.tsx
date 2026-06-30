import { Navigate, useParams } from "react-router-dom";
import FinishingProjectDetailPage from "./FinishingProjectDetailPage";
import {
  getFinishingCategory,
  getFinishingProjectById,
  getFinishingProjectNeighbors,
} from "@/data/finishing-projects";

const LIST_PATH = "/projects/finishing";

export default function FinishingProjectDetailRoute() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = getFinishingProjectById(projectId);

  if (!project) {
    return <Navigate to={LIST_PATH} replace />;
  }

  const category = getFinishingCategory(project.categoryId);
  if (!category) {
    return <Navigate to={LIST_PATH} replace />;
  }

  const { prev, next } = getFinishingProjectNeighbors(projectId);

  return (
    <FinishingProjectDetailPage
      project={project}
      category={category}
      backPath={LIST_PATH}
      detailBasePath={LIST_PATH}
      prevProject={prev}
      nextProject={next}
    />
  );
}
