import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";

import Login from "./pages/login/Login";
import AdminLayout from "./components/layout/AdminLayout";
import { AuthProvider } from "./context/AuthContext ";
import DashboardLayout from "./components/layout/DashboardLayout";
import { Toaster } from "./components/ui/toaster";
import AdminDashboard from "./pages/admin/admin-dashboard/AdminDashboard";
import AdminForm from "./pages/admin/admin-form/AdminForm";
import ExtraInfo from "./pages/admin/extra-info/ExtraInfo";
import InfoList from "./pages/admin/info-list/InfoList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Router>
            <Routes>
              <Route path="/" element={<DashboardLayout />}>
                <Route index element={<Home />} />
              </Route>
              <Route path="login" element={<Login />} />
              <Route path="admin" element={<AdminLayout />}>
                <Route path="dashboard" element={<AdminDashboard />} />
                <Route path="info-create" element={<AdminForm />} />
                <Route path="extra-info" element={<ExtraInfo />} />
                <Route path="info-list" element={<InfoList />} />
              </Route>
            </Routes>
          </Router>
          <Toaster />
        </AuthProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
