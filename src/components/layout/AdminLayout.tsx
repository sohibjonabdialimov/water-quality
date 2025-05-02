import { Outlet, useNavigate } from "react-router-dom"
import { useAuth } from "@/context/AuthContext ";
import { useEffect } from "react";
import AdminHeader from "../admin/AdminHeader";
import Sidebar from "../admin/Sidebar";

const AdminLayout = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  console.log(isLoggedIn);
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);
  return (
    <>
      <div className="flex h-screen bg-white w-full">
      <Sidebar />
      <div className="flex flex-col flex-1 h-full ml-72">
        <AdminHeader />
        <main className="flex-1 pt-6 pb-10 px-8 overflow-y-auto bg-gray-100 mt-16">
          <Outlet />
        </main>
      </div>
    </div>
    </>
  )
}

export default AdminLayout