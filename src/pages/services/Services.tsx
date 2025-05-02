import Header from "@/components/header/Header";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section>
        <div
          style={{ backgroundImage: `url("/src/assets/images/service.jpg")` }}
          className={`bg-cover bg-center bg-no-repeat h-[60vh]`}
        >
          <div className="absolute h-[60vh] inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 ">
            <Header />
            <div className="pt-20">
              <div className="px-10 pr-[300px] pb-[44px]">
                <h1 className="text-white text-[48px] leading-[1.2] mb-5 font-medium">
                  Bizning xizmatlar
                </h1>
                <p className="text-white/80 text-xl mb-16">
                  O'zbekiston bo'ylab sayohat qilish uchun eng yaxshi xizmatlar
                  va imkoniyatlar
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="pt-[80px] pb-[100px] w-[90%] mx-auto flex gap-16">
        <div className="w-[calc(100%-350px)] flex flex-col gap-12">
          <h1 className="text-[2.6rem] font-medium mb-0">
            Biz taklif qiladigan xizmatlar
          </h1>
          <h4 className="text-[22px] leading-normal text-[#222] italic mb-0">
            Uzbek Travel sizning O‘zbekistondagi sayohatingizni unutilmas qilish
            uchun turli xizmatlarni taklif etadi. Bizning asosiy maqsadimiz –
            har bir mehmonimizga qulaylik, xavfsizlik va haqiqiy milliy
            mehmondo‘stlikni taqdim etishdir.
          </h4>
          <div>
            <h4 className="text-[26px] leading-normal text-[#222] italic mb-4">
              ✈️ Sayohat va ekskursiyalarni tashkil qilish
            </h4>
            <p className="text-[21px] text-[#919193] mb-5">
              O‘zbekistonning tarixiy shaharlari – Samarqand, Buxoro, Xiva,
              Toshkent va boshqa hududlar bo‘ylab individual va guruhli
              sayohatlar. Har bir yo‘nalish professional gidlar hamrohligida
              tashkil etiladi.
            </p>
          </div>
          <div>
            <h4 className="text-[26px] leading-normal text-[#222] italic mb-4">
              🏨 Mehmonxona va joylashtirish xizmati
            </h4>
            <p className="text-[21px] text-[#919193] mb-5">
              Har bir byudjetga mos turar joylar – zamonaviy mehmonxonalar,
              milliy uylar, hostellar va dam olish maskanlarini bron qilish
              imkoniyati.
            </p>
          </div>
          <div>
            <h4 className="text-[26px] leading-normal text-[#222] italic mb-4">
              🚗 Transport xizmati
            </h4>
            <p className="text-[21px] text-[#919193] mb-5">
              Yengil avtomobil, mikroavtobus, avtobus va hatto temiryo‘l
              chiptalarini tashkil etish. Shaharda yoki shaharlararo qulay va
              xavfsiz harakatlanish.
            </p>
          </div>
          <div>
            <h4 className="text-[26px] leading-normal text-[#222] italic mb-4">
              📸 Foto va video xizmatlari
            </h4>
            <p className="text-[21px] text-[#919193] mb-5">
              Sayohatingizni professional suratlar va videolarga muhrlaymiz.
              Shaxsiy fotosessiyalar va dron orqali suratga olish xizmatlari
              mavjud.
            </p>
          </div>
          <div>
            <h4 className="text-[26px] leading-normal text-[#222] italic mb-4">
              🗺️ Maxsus yo‘nalishlar va festivallar
            </h4>
            <p className="text-[21px] text-[#919193] mb-5">
              Milliy festivallar, urf-odatlar, to‘ylar va boshqa madaniy
              tadbirlarda ishtirok etish imkoniyati. Turli mavsumiy
              ekskursiyalar – tog‘ yurishlari, cho‘l safari, gastronomik turlar
              va boshqalar.
            </p>
          </div>
          <div>
            <h4 className="text-[26px] leading-normal text-[#222] italic mb-4">
              🌐 Tarjimon va gid xizmati
            </h4>
            <p className="text-[21px] text-[#919193] mb-5">
              Ko‘p tilli gidlar va tarjimonlar sizning qulayligingiz uchun.
              Ingliz, rus, fransuz, arab va boshqa tillarda xizmat ko‘rsatamiz.
            </p>
          </div>
        </div>
        <div className="sticky top-5 right-0 w-[550px] bg-[#F7F7F7] broder-[#dcdcdc] border rounded-[10px] p-7 pl-12 h-[20rem]">
          <ul className="flex flex-col gap-4 list-disc marker:text-red-600">
            <li className="text-lg font-medium">
              <p>✈️ Sayohat va ekskursiyalarni tashkil qilish</p>
            </li>
            <li className="text-lg font-medium">
              <p>🏨 Mehmonxona va joylashtirish xizmati</p>
            </li>
            <li className="text-lg font-medium">
              <p>🚗 Transport xizmati</p>
            </li>
            <li className="text-lg font-medium">
              <p>📸 Foto va video xizmatlari</p>
            </li>
            <li className="text-lg font-medium">
              <p>🗺️ Maxsus yo‘nalishlar va festivallar</p>
            </li>
            <li className="text-lg font-medium">
              <p>🌐 Tarjimon va gid xizmati</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-[90%] mx-auto pb-[100px]">
        <div className="flex gap-8 justify-between">
          <div className="w-[55%]">
            <h2 className="text-[1.4rem] font-medium mb-8 border-b border-[#dcdcdc] pb-4">
              Biz haqimizda ko'proq ma'lumot olish uchun biz bilan bog'laning
            </h2>
            <div className="flex flex-col gap-4">
              <div className="flex gap-2 items-center">
                <MapPin className="text-danger" />
                <p className="text-[1.2rem] text-[#444] font-normal">
                  <span className="font-bold">Manzil: </span>
                  Toshkent, Amir Temur shoh koʻchasi, 108
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <Phone className="text-danger" />
                <p className="text-[1.2rem] text-[#444] font-normal">
                  <span className="font-bold">Telefon: </span>
                  +998 99 123 45 67
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <Mail className="text-danger" />
                <p className="text-[1.2rem] text-[#444] font-normal">
                  <span className="font-bold">Email: </span>
                  info@uzbektravel.uz
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <Clock className="text-danger" />
                <p className="text-[1.2rem] text-[#444] font-normal">
                  <span className="font-bold">Ish vaqti: </span>
                  Dushanba - Juma: 09:00 - 18:00
                </p>
              </div>
            </div>
          </div>
          <div
            className="w-[45%]"
            style={{ position: "relative", overflow: "hidden" }}
          >
            <a
              href="https://yandex.uz/maps/org/181817256792/?utm_medium=mapframe&utm_source=maps"
              style={{
                color: "#eee",
                fontSize: 12,
                position: "absolute",
                top: 0,
              }}
            >
              Muhammad al-Xorazmiy nomidagi Toshkent Axborot Texnologiyalari
              Universiteti
            </a>
            <a
              href="https://yandex.uz/maps/10335/tashkent/category/university/184106140/?utm_medium=mapframe&utm_source=maps"
              style={{
                color: "#eee",
                fontSize: 12,
                position: "absolute",
                top: 14,
              }}
            >
              OO‘Yu Toshkentda
            </a>
            <iframe
              src="https://yandex.uz/map-widget/v1/?ll=69.286834%2C41.340865&mode=search&oid=181817256792&ol=biz&z=16.6"
              className="w-full h-[400px]"
              frameBorder={1}
              style={{ position: "relative" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
