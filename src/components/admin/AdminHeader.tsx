import { BellIcon, User } from "lucide-react";

const AdminHeader = () => {
  return (
    <>
      <header className="h-16 fixed top-0 left-[17rem] right-0 w-[calc(w-full - 16rem)] bg-white flex items-center justify-between px-5 z-40">
        <div className="flex w-[400px]">
          <input
            type="text"
            placeholder="Qidirish..."
            className="px-3 w-full text-sm py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-textColor placeholder:text-gray-500 placeholder:text-sm"
          />
        </div>
        <div className="flex gap-3 items-center">
          <div className="flex items-center gap-0.5 flex-col">
            <button className="flex justify-center items-center bg-bg_color text-textColor rounded-full">
              <BellIcon />
            </button>
            <span className="text-sm font-medium">Bildirishnomalar</span>
          </div>
          <div className="flex items-center gap-0.5 flex-col">
            <button className="flex justify-center items-center bg-bg_color text-textColor rounded-full">
              <User />
            </button>
            <span className="text-sm font-medium">Sohibjon Abdialimov</span>
          </div>
        </div>
      </header>
    </>
  );
};

export default AdminHeader;
