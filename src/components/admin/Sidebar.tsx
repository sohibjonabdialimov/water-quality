import {
  Building,
  Calendar,
  ChartColumnIncreasing,
  Home,
  List,
  LogOut,
} from "lucide-react";
import { NavLink, NavLinkRenderProps, useNavigate } from "react-router-dom";
import logo from "@/assets/images/logo_k.png";
const sidebarItems = [
  {
    id: 0,
    title: "Dashboard",
    icon: <ChartColumnIncreasing />,
    path: "/admin/dashboard",
  },
  {
    id: 1,
    title: "Ma'lumot qo'shish",
    icon: <Building />,
    path: "/admin/info-create",
  },
  {
    id: 2,
    title: "Ma'lumotlar ro'yhati",
    icon: <List />,
    path: "/admin/info-list",
  },
  {
    id: 3,
    title: "Qo'shimcha ma'lumotlar",
    icon: <Calendar />,
    path: "/admin/extra-info",
  },
  {
    id: 4,
    title: "Bosh sahifa",
    icon: <Home />,
    path: "/",
  },
  {
    id: 5,
    title: "Chiqish",
    icon: <LogOut />,
    path: "/login",
  },
];
const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <aside className="w-72 bg-white flex flex-col h-full fixed left-0 top-0 z-[10]">
      <div className="h-16 px-8 py-2 bg-white flex items-center justify-center mt-2">
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          <img className="w-32" src={logo} alt="logo" />
        </div>
      </div>

      <nav className="flex-1 pt-[1rem]">
        <ul className="flex flex-col gap-4 justify-between h-full px-4">
          <div className="flex flex-col gap-2">
            {sidebarItems.map((item) => (
              <NavLink
                to={item.path}
                key={item.id}
                className={({ isActive }: NavLinkRenderProps) =>
                  `p-1.5 text-sm flex items-center text-textColor gap-2 rounded-[10px] hover:bg-bg_color transition hover:bg-slate-100 group ${
                    isActive ? "bg-slate-200" : "bg-white"
                  }`
                }
              >
                <div
                  className={`w-[31px] h-[31px] flex items-center justify-center rounded-full transition-colors duration-200
     `}
                >
                  {item.icon}
                </div>

                <span className="text-textColor font-medium">{item.title}</span>
              </NavLink>
            ))}
          </div>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
