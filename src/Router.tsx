import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const DashBoardPage = lazy(() => import("./pages/DashboardPage"));
const HelpDeskAegisnet = lazy(() => import("./pages/HelpDeskAegisnet"));
const NodesInformation = lazy(() => import("./pages/NodesInformation"));
const SupplierHelpDeskPage = lazy(() => import("./pages/SupplierHelpDeskPage"));
const RemoteAssistancePage = lazy(() => import("./pages/RemoteAssistancePage"));
const Page404 = lazy(() => import("./pages/Page404"));

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DashBoardPage />} />
      <Route path="/supplier-help-desk" element={<SupplierHelpDeskPage />} />
      <Route path="/help-desk-aegisnet" element={<HelpDeskAegisnet />} />
      <Route path="/remote-assistance" element={<RemoteAssistancePage />} />
      <Route path="/nodes-information" element={<NodesInformation />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
