import logo from "@/assets/images/logo_k.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center py-4 px-10">
      <div className="cursor-pointer" onClick={() => navigate("/")}>
        <img className="w-32" src={logo} alt="logo" />
      </div>
      <div>
        <ul className="flex gap-4 items-center text-textDark">
          <Button className="h-[45px] rounded-[15px]">
            <Link className="text-base" to={"/login"}>Kirish</Link>
          </Button>
        </ul>
      </div>
    </div>
  )
}

export default Header