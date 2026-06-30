import { Navigate, useParams } from "react-router-dom";
import SoftwareProjectDetailPage from "./SoftwareProjectDetailPage";
import {
  getSoftwareDepartment,
  getSoftwareProjectById,
  getSoftwareProjectNeighbors,
} from "@/data/software-projects";

const LIST_PATH = "/projects/software";

export default function SoftwareProjectDetailRoute() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = getSoftwareProjectById(projectId);

  if (!project) {
    return <Navigate to={LIST_PATH} replace />;
  }

  const department = getSoftwareDepartment(project.departmentId);
  if (!department) {
    return <Navigate to={LIST_PATH} replace />;
  }

  const { prev, next } = getSoftwareProjectNeighbors(projectId);

  return (
    <SoftwareProjectDetailPage
      project={project}
      department={department}
      backPath={LIST_PATH}
      detailBasePath={LIST_PATH}
      prevProject={prev}
      nextProject={next}
    />
  );
}
