import logo from "@/assets/images/logo_k.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { User } from "lucide-react";
const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center py-4 px-10">
      <div className="cursor-pointer" onClick={() => navigate("/")}>
        <img className="w-32" src={logo} alt="logo" />
      </div>
      <div className="flex items-center gap-4">
        <ul className="flex gap-4 items-center text-textDark">
          <Button className="h-[40px] rounded-[10px]">
            <Link className="text-sm" to={"/login"}>
              Ma'lumot qo'shish
            </Link>
          </Button>
        </ul>
        <div className="flex items-center gap-0.5 flex-col">
          <button className="flex justify-center items-center bg-bg_color text-textColor rounded-full">
            <User />
          </button>
          <span className="text-sm font-medium">Sohibjon Abdialimov</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
