import { lazy } from "react";
import { PUBLIC_ROUTE } from "./route.constants";
export const publicRoutes = [
  {
    path: PUBLIC_ROUTE.LANDING,
    component: lazy(() => import("@iso/containers/Home/Home")),
    exact: true
  },
  {
    path: PUBLIC_ROUTE.PAGE_500,
    component: lazy(() => import("@iso/containers/Pages/500/500"))
  },
  {
    component: lazy(() => import("@iso/containers/Pages/404/404"))
  }
];
