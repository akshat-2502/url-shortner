import { createRootRoute } from "@tanstack/react-router";
import RootLayout from "../RootLayout.jsx";
import { homePageRoute } from "./homepage.js";
import { authRoute } from "./auth.route.js";
import { dashboardRoute } from "./dashboard.js";
import { createUrlRoute } from "./createUrl.js";

export const rootRoute = createRootRoute({
  component: RootLayout,
});

export const routeTree = rootRoute.addChildren([
  homePageRoute,
  authRoute,
  dashboardRoute,
  createUrlRoute,
]);
