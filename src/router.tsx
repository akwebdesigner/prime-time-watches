import { createHashHistory, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const router = createRouter({
    routeTree,
    history: createHashHistory(),
    defaultPreloadStaleTime: 0,
  });

  return router;
};
