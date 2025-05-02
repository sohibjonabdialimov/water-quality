import logo from "@/assets/images/logo_w.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center py-4 px-10">
      <div className="cursor-pointer" onClick={() => navigate("/")}>
        <img className="w-44" src={logo} alt="logo" />
      </div>
      <div>
        <ul className="flex gap-4 items-center text-white">
          <li>
            <Link to={"/tourism"}>Turizm joylari</Link>
          </li>
          <li>
            <Link to={"/tourists"}>Sayohatchilar uchun ma'lumotlar</Link>
          </li>
          <li>
            <Link to={"/services"}>Xizmatlar</Link>
          </li>
          <li>
            <Link to={"/contact"}>Bog'lanish</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header