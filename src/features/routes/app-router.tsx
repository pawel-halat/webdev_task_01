import { lazy, type FC } from "react";
import { Routes, Route } from "react-router-dom";

import routes from "./routes.const";

const HomePage = lazy(() => import("../../pages/home-page"));
const MapPage = lazy(() => import("../../pages/map-page"));
const RoadStatisticsPage = lazy(
  () => import("../../pages/road-statistics-page")
);
const TodoPage = lazy(() => import("../../pages/todo-page"));
const ErrorTestPage = lazy(() => import("../../pages/error-test-page"));
const NotFound = lazy(() => import("../../pages/not-found"));

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path={routes.home} element={<HomePage />} />
      <Route path={routes.map} element={<MapPage />} />
      <Route path={routes.roadStatistics} element={<RoadStatisticsPage />} />
      <Route path={routes.todoTable} element={<TodoPage />} />
      <Route path={routes.errorTest} element={<ErrorTestPage />} />
      <Route path={routes.notFound} element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
