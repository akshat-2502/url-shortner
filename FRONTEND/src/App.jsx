import React from "react";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import { Outlet } from "@tanstack/react-router";

const RootLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default RootLayout;
