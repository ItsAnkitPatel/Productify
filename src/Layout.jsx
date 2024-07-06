import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MaxWidthWrapper from "./components/MaxWidthWrapper";
import Navbar from "./components/Navbar";

function Layout() {
  return (
    <>
      <MaxWidthWrapper>
        <ToastContainer autoClose={2000} position="top-center" stacked />
        <Navbar />
        <Outlet />
      </MaxWidthWrapper>
    </>
  );
}

export default Layout;
