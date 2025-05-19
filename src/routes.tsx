import { Navigate, Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { MainLayout } from "@/shared/layout";
import NotFound from "@/shared/pages/NotFound";
import { ROUTES } from "@/shared/constants";

const HomePage = lazy(() => import("@/features/home/pages/HomePage"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>

      <Route path={ROUTES.error.ui.notFound} element={<NotFound />} />
      <Route path="*" element={<Navigate to={ROUTES.error.ui.notFound} />} />
    </Routes>
  );
};

export default AppRoutes;
