import { createBrowserRouter } from "react-router-dom";
// main layout
import MainLayout from "../layout/MainLayout";
import ErrorPage from "./ErrorPage";
// pages
import Home from "../pages/Home/Home";
import Portfolio from "../pages/Portfolio/Portfolio";

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
    ],
  },
]);

export default router;
