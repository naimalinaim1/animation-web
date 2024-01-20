// eslint-disable-next-line no-unused-vars
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../pages/Shared/Header";
import Footer from "../pages/Shared/Footer";
import ScrollToTop from "../components/ScrollToTop";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      {/* scroll to top */}
      <ScrollToTop />
    </>
  );
};

export default MainLayout;
