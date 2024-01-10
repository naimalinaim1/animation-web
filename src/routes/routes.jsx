import { createBrowserRouter } from "react-router-dom";
// main layout
import MainLayout from "../layout/MainLayout";
import ErrorPage from "./ErrorPage";
// pages
import Home from "../pages/Home/Home";

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
    ],
  },
]);

export default router;
