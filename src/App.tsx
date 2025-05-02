import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";

import Login from "./pages/login/Login";
import AdminLayout from "./components/layout/AdminLayout";
import { AuthProvider } from "./context/AuthContext ";
import DashboardLayout from "./components/layout/DashboardLayout";
import { Toaster } from "./components/ui/toaster";
import AdminDashboard from "./pages/admin/admin-dashboard/AdminDashboard";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/cities`
      );
      const data = await response.json();
      console.log(data);
    };

    fetchData();
  }, []);
  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<DashboardLayout />}>
              <Route index element={<Home />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
            </Route>
          </Routes>
        </Router>
        <Toaster />
      </AuthProvider>
    </>
  );
}

export default App;
