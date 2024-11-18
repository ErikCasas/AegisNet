import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { AppRoutes } from "./types";

const DashBoardPage = lazy(() => import("./pages/DashboardPage"));
const HelpDeskAegisnet = lazy(() => import("./pages/HelpDeskAegisnet"));
const NodesInformation = lazy(() => import("./pages/NodesInformation"));
const SupplierHelpDeskPage = lazy(() => import("./pages/SupplierHelpDeskPage"));
const RemoteAssistancePage = lazy(() => import("./pages/RemoteConnectionPage"));
const Page404 = lazy(() => import("./pages/Page404"));

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path={AppRoutes.Dashboard} element={<DashBoardPage />} />
      <Route
        path={AppRoutes.SupplierHelpDeskPage}
        element={<SupplierHelpDeskPage />}
      />
      <Route path={AppRoutes.HelpDeskAegisnet} element={<HelpDeskAegisnet />} />
      <Route
        path={AppRoutes.RemoteAssistancePage}
        element={<RemoteAssistancePage />}
      />
      <Route path={AppRoutes.NodesInformation} element={<NodesInformation />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
