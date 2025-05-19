import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./shared/layout";
import { lazy } from "react";
import NotFound from "@/shared/pages/NotFound";

const HomePage = lazy(() => import("@/features/home/pages/HomePage"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
