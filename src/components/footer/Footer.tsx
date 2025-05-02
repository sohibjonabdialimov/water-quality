import { Facebook, Instagram, MapPin, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    title: "Turistlarga",
    children: [
      {
        id: 1,
        title: "Ko‘p beriladigan savollar",
        link: "/questions",
      },  
      {
        id: 2,
        title: "Ichki turizm",
        link: "/",
      },
      {
        id: 3,
        title: "Ziyorat turizm obyektlari reestri",
        link: "/",
      },
      {
        id: 4,
        title: "Gid-ekskursiya yetakchilari Yagona elektron reyestri",
        link: "/",
      },
    ],
  },
  {
    id: 2,
    title: "Agentliklarga",
    children: [
      {
        id: 1,
        title: "Xalqaro ko'rgazmalar",
        link: "/",
      },
      {
        id: 2,
        title: "Turlarni targ'ib qilish",
        link: "/",
      },
      {
        id: 3,
        title: "Turizm sohasidagi qonunlar",
        link: "/",
      },
      {
        id: 4,
        title: "Turistik marshrutlar",
        link: "/",
      },
    ],
  },
  {
    id: 3,
    title: "Ma'lumotlar",
    children: [
      {
        id: 1,
        title: "Biz haqimizda",
        link: "/",
      },
      {
        id: 2,
        title: "Sayyohlarning kelishi",
        link: "/",
      },
    ],
  },
  {
    id: 4,
    title: "OAV",
    children: [
      {
        id: 1,
        title: "Turizm yangiliklari",
        link: "/",
      },
      {
        id: 2,
        title: "O'zbekiston yangiliklari",
        link: "/",
      },
      {
        id: 3,
        title: "Mukofotlar",
        link: "/",
      },
      {
        id: 5,
        title: "E'lonlar",
        link: "/",
      },
    ],
  },
];
const Footer = () => {
  return (
    <footer className="bg-[#151515] py-16 px-10">
      <div className="grid grid-cols-3 gap-8">
        <div className="grid grid-cols-4 gap-5 col-span-2">
          {data.map((item) => (
            <div key={item.id}>
              <h3 className="text-white text-[28px] leading-normal mb-8 font-medium">{item.title}</h3>
              {item.children.map((child) => (
                <Link key={child.id} className="hover:text-white text-lg block leading-[1.2] mb-4 font-normal text-lightColor transition duration-300" to={child.link}>
                  {child.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      <div className="col-span-1">
        <div>
          <h3 className="text-white text-[28px] leading-normal mb-8 font-medium">
          Aloqa
          </h3>
          <div className="flex gap-10">
            <div>
              <h4 className="text-white text-[20px] leading-normal font-medium">+998 71 200 00 88</h4>
              <p className="text-lightColor text-lg font-normal">Ish vaqti: 9:00-18:00, Du-Ju</p>
            </div>
            <div>
              <Link to={"mailto:info@uzbek-tour.uz"} className="text-white text-[20px] leading-normal font-medium">info@uzbek-tour.uz</Link>
              <p className="text-lightColor text-lg font-normal">Savollar uchun</p>
            </div>
          </div>
          <div className="flex gap-2 items-center mt-[40px] mb-[30px]">
          <MapPin className="text-white" />
          <p className="text-white text-lg leading-[1.2] font-medium">100015, Toshkent sh, Oybek ko‘chasi 18-uy
          O‘zbekiston</p>
          </div>
          <p className="text-white text-lg leading-[1.2] font-medium mb-7">Xavfsiz turizm uchun yagona Call-markaz - 1173</p>
          <div className="flex gap-5">
            <Link className="hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] transition duration-300 w-[45px] h-[45px] bg-[#33589E] rounded-full flex items-center justify-center " to={"https://www.facebook.com/uzbektour"}>
              <Facebook className="text-white" />
            </Link>
            <Link className="hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] transition duration-300 w-[45px] h-[45px] bg-[linear-gradient(135deg,_#4c5ad1_0%,_#ff3756_42%,_#ff3e37_60%,_#ffd42b_100%)] rounded-full flex items-center justify-center " to={"https://www.instagram.com/uzbektour"}>
              <Instagram className="text-white" />
            </Link>
            <Link className="hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] transition duration-300 w-[45px] h-[45px] bg-[#24A4F2] rounded-full flex items-center justify-center " to={"https://www.instagram.com/uzbektour"}>
              <Twitter className="text-white" />
            </Link>
            <Link className="hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] transition duration-300 w-[45px] h-[45px] bg-[#FF000E] rounded-full flex items-center justify-center " to={"https://www.youtube.com/channel/UC-9-kyTW8ZkZNDHQJ6FgpwQ"}>
              <Youtube className="text-white" />
            </Link>
          </div>
        </div>
      </div>
      </div>
        <p className="text-center pt-[80px]" style={{color: "rgba(255, 255, 255, 0.53)"}}>Copyright © 2018-2025 Uzbek-Travel</p>
    </footer>
  )
}

export default Footer