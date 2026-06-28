import { createBrowserRouter } from "react-router-dom";
import MasterLayOut from "../layouts/MasterLayOut/MasterLayOut";
import NotFound from "@/components/NotFound";
import Home from "@/pages/Home/Home";


export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MasterLayOut />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "dashboard", element: <Home /> },
    ],
  },

  
]);
