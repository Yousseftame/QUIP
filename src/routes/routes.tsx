import { createBrowserRouter } from "react-router-dom";
import MasterLayOut from "../layouts/MasterLayOut/MasterLayOut";
import NotFound from "@/components/NotFound";
import Home from "@/pages/Home/Home";
import AboutUs from "@/pages/AboutUs/AboutUs";
import IctProjectsPage from "@/pages/Projects/IctProjectsPage";
import IctProjectDetailPage from "@/pages/Projects/IctProjectDetailPage";
import FinishingProjectsPage from "@/pages/Projects/FinishingProjectsPage";
import FinishingProjectDetailRoute from "@/pages/Projects/FinishingProjectDetailRoute";
import SoftwareProjectsPage from "@/pages/Projects/SoftwareProjectsPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MasterLayOut />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "dashboard", element: <Home /> },
      { path: "about", element: <AboutUs /> },
      { path: "projects/ict", element: <IctProjectsPage /> },
      { path: "projects/ict/:projectId", element: <IctProjectDetailPage /> },
      { path: "projects/finishing", element: <FinishingProjectsPage /> },
      { path: "projects/finishing/:projectId", element: <FinishingProjectDetailRoute /> },
      { path: "projects/software", element: <SoftwareProjectsPage /> },
    ],
  },

  
]);
