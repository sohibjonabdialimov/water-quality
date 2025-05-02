import { Building, Calendar, ChevronsRight, Home, List } from "lucide-react";
import { NavLink, NavLinkRenderProps } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-72 bg-white flex flex-col h-full fixed left-0 top-0 z-[10]">
      <div className="h-16 px-8 bg-white flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-semibold text-textColor">
            Uzbek Tourism
          </h1>
          <div className="w-[25px] h-[25px] rounded-full flex items-center justify-center border-[2px] border-textColor p-0.5">
            <ChevronsRight className="text-xs" />
          </div>
        </div>
      </div>

      <nav className="flex-1">
        <ul className="flex flex-col gap-4 justify-between h-full px-4">
          <div className="flex flex-col gap-1">
            <NavLink
              to={"/admin/form"}
              className={({ isActive }: NavLinkRenderProps) =>
                `p-1.5 text-base flex items-center text-textColor gap-2 rounded-[10px] font-medium hover:bg-bg_color transition hover:bg-slate-100 group ${
                  isActive ? "bg-slate-200" : "bg-white"
                }`
              }
            >
              <div
                className={`w-[31px] h-[31px] flex items-center justify-center rounded-full transition-colors duration-200
     `}
              >
                <Building />
              </div>

              <span className="text-textColor font-semibold text-base">
                Create Place
              </span>
            </NavLink>
            <NavLink
              to={"/admin/city-list"}
              className={({ isActive }: NavLinkRenderProps) =>
                `p-1.5 text-base flex items-center text-textColor gap-2 rounded-[10px] font-medium hover:bg-bg_color transition hover:bg-slate-100 group ${
                  isActive ? "bg-slate-200" : "bg-white"
                }`
              }
            >
              <div
                className={`w-[31px] h-[31px] flex items-center justify-center rounded-full transition-colors duration-200
     `}
              >
                <List />
              </div>

              <span className="text-textColor font-semibold text-base">
                City List
              </span>
            </NavLink>
            <NavLink
              to={"/admin/booking"}
              className={({ isActive }: NavLinkRenderProps) =>
                `p-1.5 text-base flex items-center text-textColor gap-2 rounded-[10px] font-medium hover:bg-bg_color transition hover:bg-slate-100 group ${
                  isActive ? "bg-slate-200" : "bg-white"
                }`
              }
            >
              <div
                className={`w-[31px] h-[31px] flex items-center justify-center rounded-full transition-colors duration-200
     `}
              >
                <Calendar />
              </div>

              <span className="text-textColor font-semibold text-base">
                Booking
              </span>
            </NavLink>

            <NavLink
              to={"/"}
              className={({ isActive }: NavLinkRenderProps) =>
                `p-1.5 text-base flex items-center text-textColor gap-2 rounded-[10px] font-medium hover:bg-bg_color transition hover:bg-slate-100 group ${
                  isActive ? "bg-slate-200" : "bg-white"
                }`
              }
            >
              <div
                className={`w-[31px] h-[31px] flex items-center justify-center rounded-full transition-colors duration-200
     `}
              >
                <Home />
              </div>

              <span className="text-textColor font-semibold text-base">
                Main Page
              </span>
            </NavLink>
          </div>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
