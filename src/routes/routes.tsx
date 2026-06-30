import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import MasterLayOut from "../layouts/MasterLayOut/MasterLayOut";
import NotFound from "@/components/NotFound";
import Home from "@/pages/Home/Home";
import AboutUs from "@/pages/AboutUs/AboutUs";

const IctProjectsPage = lazy(() => import("@/pages/Projects/IctProjectsPage"));
const IctProjectDetailPage = lazy(() => import("@/pages/Projects/IctProjectDetailPage"));
const FinishingProjectsPage = lazy(() => import("@/pages/Projects/FinishingProjectsPage"));
const FinishingProjectDetailRoute = lazy(
  () => import("@/pages/Projects/FinishingProjectDetailRoute"),
);
const SoftwareProjectsPage = lazy(() => import("@/pages/Projects/SoftwareProjectsPage"));
const SoftwareProjectDetailRoute = lazy(
  () => import("@/pages/Projects/SoftwareProjectDetailRoute"),
);

function ProjectRoute({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={null}>{children}</Suspense>;
}

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MasterLayOut />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "dashboard", element: <Home /> },
      { path: "about", element: <AboutUs /> },
      {
        path: "projects/ict",
        element: (
          <ProjectRoute>
            <IctProjectsPage />
          </ProjectRoute>
        ),
      },
      {
        path: "projects/ict/:projectId",
        element: (
          <ProjectRoute>
            <IctProjectDetailPage />
          </ProjectRoute>
        ),
      },
      {
        path: "projects/finishing",
        element: (
          <ProjectRoute>
            <FinishingProjectsPage />
          </ProjectRoute>
        ),
      },
      {
        path: "projects/finishing/:projectId",
        element: (
          <ProjectRoute>
            <FinishingProjectDetailRoute />
          </ProjectRoute>
        ),
      },
      {
        path: "projects/software",
        element: (
          <ProjectRoute>
            <SoftwareProjectsPage />
          </ProjectRoute>
        ),
      },
      {
        path: "projects/software/:projectId",
        element: (
          <ProjectRoute>
            <SoftwareProjectDetailRoute />
          </ProjectRoute>
        ),
      },
    ],
  },
]);
