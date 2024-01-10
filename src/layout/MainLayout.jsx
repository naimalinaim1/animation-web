// eslint-disable-next-line no-unused-vars
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../pages/Shared/Header";

const MainLayout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="w-full max-w-7xl mx-auto">
        <Outlet />
      </main>
      <footer>footer</footer>
    </>
  );
};

export default MainLayout;
