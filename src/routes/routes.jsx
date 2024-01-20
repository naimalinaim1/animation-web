import { createBrowserRouter } from "react-router-dom";
// main layout
import MainLayout from "../layout/MainLayout";
import ErrorPage from "./ErrorPage";
// pages
import Home from "../pages/Home/Home";
import Portfolio from "../pages/Portfolio/Portfolio";
import Process from "../pages/Process/Process";
import CaseStudy from "../pages/CaseStudy/CaseStudy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/portfolio/",
        element: <Portfolio />,
      },
      {
        path: "/video-process/",
        element: <Process />,
      },
      {
        path: "/case-study/",
        element: <CaseStudy />,
      },
    ],
  },
]);

export default router;
