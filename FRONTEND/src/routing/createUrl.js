import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./routeTree";
import CreateUrlPage from "../pages/CreateUrlPage";

export const createUrlRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/create",
  component: CreateUrlPage,
});
