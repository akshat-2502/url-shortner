import { createRootRoute } from "@tanstack/react-router";
import RootLayout from "../App";
import { homePageRoute } from "./homepage";
import { authRoute } from "./auth.route";
import { dashboardRoute } from "./dashboard";

export const rootRoute = createRootRoute({
  component: <RootLayout />,
});

export const routeTree = rootRoute.addChildren([
  homePageRoute,
  authRoute,
  dashboardRoute,
]);
