import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/images/light_logo.png";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-mainBlue py-16 px-10">
      <div className="flex justify-between gap-8">
        <div className="">
          <div className="cursor-pointer" onClick={() => navigate("/")}>
            <img className="w-32" src={logo} alt="logo" />
          </div>
          <div className="flex gap-10">
            <div>
              <h4 className="text-white text-[20px] leading-normal font-medium">
                +998(97) 636-79-75
              </h4>
              <p className="text-lightColor text-lg font-normal">
                Telefon raqam
              </p>
            </div>
            <div>
              <Link
                to={"mailto:info@uzbek-tour.uz"}
                className="text-white text-[20px] leading-normal font-medium"
              >
                hydrowatch@gmail.com
              </Link>
              <p className="text-lightColor text-lg font-normal">
                Savollar uchun
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-2 items-center mt-[40px] mb-[30px]">
            <div>
              <h4 className="text-white text-[20px] leading-normal font-medium">
              Toshkent sh, Yunusobod tuman, Amir Temur ko'chasi
              </h4>
              <p className="text-lightColor text-lg font-normal">
                Manzil
              </p>
            </div>
          </div>
          <div className="flex gap-5">
            <Link
              className="hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] transition duration-300 w-[45px] h-[45px] bg-[#33589E] rounded-full flex items-center justify-center "
              to={"https://www.facebook.com/uzbektour"}
            >
              <Facebook className="text-white" />
            </Link>
            <Link
              className="hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] transition duration-300 w-[45px] h-[45px] bg-[linear-gradient(135deg,_#4c5ad1_0%,_#ff3756_42%,_#ff3e37_60%,_#ffd42b_100%)] rounded-full flex items-center justify-center "
              to={"https://www.instagram.com/uzbektour"}
            >
              <Instagram className="text-white" />
            </Link>
            <Link
              className="hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] transition duration-300 w-[45px] h-[45px] bg-[#24A4F2] rounded-full flex items-center justify-center "
              to={"https://www.instagram.com/uzbektour"}
            >
              <Twitter className="text-white" />
            </Link>
            <Link
              className="hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] transition duration-300 w-[45px] h-[45px] bg-[#FF000E] rounded-full flex items-center justify-center "
              to={"https://www.youtube.com/channel/UC-9-kyTW8ZkZNDHQJ6FgpwQ"}
            >
              <Youtube className="text-white" />
            </Link>
          </div>
        </div>
      </div>
      <p
        className="text-center pt-[80px]"
        style={{ color: "rgba(255, 255, 255, 0.53)" }}
      >
        Copyright © 2025 Hydro Watch
      </p>
    </footer>
  );
};

export default Footer;
