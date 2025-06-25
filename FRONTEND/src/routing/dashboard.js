import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./routeTree";
import Dashboard from "../pages/Dashboard";
import { checkAuth } from "../utils/helper";

export const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
  component: Dashboard,
  beforeLoad: checkAuth,
});
