import React from "react";
import { Outlet } from "@tanstack/react-router";
import Navbar from "./components/Navbar";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default RootLayout;
