import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

// main layout
import MainLayout from "../layout/MainLayout";
import ErrorPage from "./ErrorPage";

// pages (using lazy loading)
const Home = lazy(() => import("../pages/Home/Home"));
const Portfolio = lazy(() => import("../pages/Portfolio/Portfolio"));
const Process = lazy(() => import("../pages/Process/Process"));
const CaseStudy = lazy(() => import("../pages/CaseStudy/CaseStudy"));
const ContactUs = lazy(() => import("../pages/ContactUs/ContactUs"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <MainLayout />
      </Suspense>
    ),
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
      {
        path: "/contact-us/",
        element: <ContactUs />,
      },
    ],
  },
]);

export default router;
