import Header from "@/components/header/Header";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { CityDataProps } from "@/types";

const data = [
  {
    id: 1,
    title: "Tabiat",
    description:
      "Xushmanzara tog‘lar, gullagan vodiylar, jazirama cho‘llar, daryolar va zilol ko‘llar - bu go‘zallikning barchasidan O‘zbekistonda bahramand bo‘lishingiz mumkin!",
    link: "/nature",
    image: "/src/assets/images/hero1.webp",
  },
  {
    id: 2,
    title: "O'zbek taomlari",
    description:
      "Xushbo‘y palov, ishtahani qo‘zg‘atadigan qozon kabob, somsa, yopgan non va sho‘rva – o‘z rang-barangligi va betakror ta’mi bilan O‘zbekiston aholisi va mehmonlarining hayratga soladi.",
    link: "/food",
    image: "/src/assets/images/hero2.webp",
  },
  {
    id: 3,
    title: "Madaniy meros",
    description:
      "O‘zbekiston madaniyati, Markaziy Osiyo xalqlarining ko‘p asrlik an’analari va turmush tarzi bilan chambarchas bog‘liq boy tarixga ega",
    link: "/culture",
    image: "/src/assets/images/hero3.webp",
  },
  {
    id: 4,
    title: "Xalq san'ati",
    description:
      "Noyob naqshlar bilan burkangan O‘zbekiston amaliy san’ati asarlarining mazmuni va ahamiyati ko‘p asrlar davomida rivojlanib kelgan",
    link: "/art",
    image: "/src/assets/images/hero4.webp",
  },
  {
    id: 5,
    title: "Me’morchlik",
    description:
      "Moviy rang naqshlar va rang-barang rasmlar bilan bezatilgan ulug‘vor me’moriy ansambllar, saroylar, masjidlar va minoralar O‘zbekistonga tashrif buyuruvchi millionlab mehmonlarni ko‘p asrlar davomida hayratga solib kelmoqda.",
    link: "/architecture",
    image: "/src/assets/images/hero5.webp",
  },
];

//   {
//     id: 1,
//     title: "Toshkent",
//     description: "Zamonaviy megapolis",
//     image:
//       "https://uzbekistan.travel/storage/app/uploads/public/677/7d4/547/thumb_4157_600_0_0_0_auto.jpeg",
//   },
//   {
//     id: 2,
//     title: "Samarqand",
//     description: "Madaniyatlar chorrahasi",
//     image:
//       "https://uzbekistan.travel/storage/app/uploads/public/677/7d3/957/thumb_4156_600_0_0_0_auto.png",
//   },
//   {
//     id: 3,
//     title: "Buxoro",
//     description: "Islom madaniyatining poytaxti",
//     image:
//       "https://uzbekistan.travel/storage/app/uploads/public/671/74c/365/thumb_3943_600_0_0_0_auto.jpg",
//   },
//   {
//     id: 4,
//     title: "Xiva",
//     description: "Turk dunyosini poytaxti",
//     image:
//       "https://uzbekistan.travel/storage/app/uploads/public/676/a5f/65e/thumb_4123_600_0_0_0_auto.jpg",
//   },
//   {
//     id: 5,
//     title: "Shahrisabz",
//     description: "Amir Temur vatani",
//     image:
//       "https://uzbekistan.travel/storage/app/uploads/public/670/e08/ea9/thumb_3928_600_0_0_0_auto.jpg",
//   },
//   {
//     id: 6,
//     title: "Mo'ynoq",
//     description: "Orol sahrosi",
//     image:
//       "https://uzbekistan.travel/storage/app/uploads/public/670/e09/78d/thumb_3929_600_0_0_0_auto.jpg",
//   },
//   {
//     id: 7,
//     title: "Zomin",
//     description: "O'zbek Shvetsariyasi",
//     image:
//       "https://uzbekistan.travel/storage/app/uploads/public/5eb/476/f7b/thumb_774_600_0_0_0_auto.jpg",
//   },
//   {
//     id: 8,
//     title: "Termiz",
//     description: "Qadimiy svilizatsiya va din markazi",
//     image:
//       "https://uzbekistan.travel/storage/app/uploads/public/668/38e/fa0/thumb_3658_600_0_0_0_auto.jpg",
//   },
// ];

const placesData = [
  {
    id: 1,
    title: "Virtual galereyalar",
    image:
      "https://uzbekistan.travel/storage/app/uploads/public/67b/6ab/4b2/thumb_4640_740_0_0_0_auto.png",
  },
  {
    id: 2,
    title: "Chorsu Art-galereyalar",
    image:
      "https://uzbekistan.travel/storage/app/uploads/public/66b/9c1/00e/thumb_3802_740_0_0_0_auto.jpg",
  },
  {
    id: 3,
    title: "Toshkent fotosuratlar uyi",
    image:
      "https://uzbekistan.travel/storage/app/uploads/public/679/9f2/2fa/thumb_4391_740_0_0_0_auto.jpg",
  },
  {
    id: 4,
    title: "Qatag'on qurbonlari xotirasi muzeyi",
    image:
      "https://uzbekistan.travel/storage/app/uploads/public/67b/6ab/f4e/thumb_4645_740_0_0_0_auto.png",
  },
  {
    id: 5,
    title: "Marg'ilon hunarmandchilik markazi",
    image:
      "https://uzbekistan.travel/storage/app/uploads/public/67b/6ab/aa5/thumb_4643_740_0_0_0_auto.png",
  },
  {
    id: 6,
    title: "Mustaqillik maydoni",
    image:
      "https://uzbekistan.travel/storage/app/uploads/public/67b/6ab/6b6/thumb_4641_740_0_0_0_auto.png",
  },
  {
    id: 7,
    title: "Jahon otin Uyavsiy uy-muzeyi",
    image:
      "https://uzbekistan.travel/storage/app/uploads/public/67b/6ab/255/thumb_4639_740_0_0_0_auto.jpg",
  },
  {
    id: 8,
    title: "Yapon bog'i",
    image:
      "https://uzbekistan.travel/storage/app/uploads/public/614/078/c96/thumb_1894_740_0_0_0_auto.jpg",
  },
  {
    id: 9,
    title: "Erkin Vohidov memorial muzeyi",
    image:
      "https://uzbekistan.travel/storage/app/uploads/public/679/9f3/e17/thumb_4394_740_0_0_0_auto.jpg",
  },
];
const Home = () => {
  const navigate = useNavigate();
  const [city, setCity] = useState<CityDataProps[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/cities`
      );
      const data = await response.json();
      setCity(data);
      console.log(data);
    };

    fetchData();
  }, []);
  return (
    <div>
      <section>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                style={{ backgroundImage: `url(${item.image})` }}
                className={`bg-cover bg-center bg-no-repeat h-screen`}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative z-10 ">
                  <Header />
                  <div className="pt-44">
                    <div className="px-10 w-3/5">
                      <h1 className="text-white text-7xl font-bold mb-8">
                        {item.title}
                      </h1>
                      <p className="text-white text-2xl mb-16">
                        {item.description}
                      </p>
                      <Button
                        className="text-xl py-6 px-8"
                        variant={"destructive"}
                      >
                        Batafsil
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className="text-center bg-white py-20 px-32">
        <h1 className="text-[2.6rem] font-medium mb-10">
          O‘zbekistonni o‘zingiz uchun kashf eting!!
        </h1>
        <h4 className="text-[26px] leading-normal text-[#222] italic mb-7">
          O‘zbekiston Sharqning sirli mamlakatidir. U yerda tarixlar afsonalarda
          to‘plangan, quyosh yil bo‘yi porlab, tabiatning betakrorligi va
          odamlarning yuraklari tozaligi buning nishonasidir
        </h4>
        <p className="text-[21px] text-[#919193] mb-5 ">
          Ushbu muborak zaminga kelgan har bir mehmon xursandchilik bilan kutib
          olinadi va bir marta tashrif buyurgan kishi yana qaytib kelishni
          xohlaydi.
        </p>
        <Button
          onClick={() => navigate("/uzbekistan")}
          className="text-xl py-6 px-8"
          variant={"destructive"}
        >
          Batafsil
        </Button>
      </section>
      <section className="categorySlider px-10">
        <h1 className="text-#1F2937 text-[2.5rem] sm:font-medium font-medium">
          Eng yaxshi joylar
        </h1>
        <Swiper
          spaceBetween={20}
          grabCursor={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Navigation]}
          slidesPerView={1}
          navigation={true}
          loop={true}
          className="mt-5 sm:mt-0 rounded-2xl"
        >
          {placesData.map((item) => {
            return (
              <SwiperSlide
                className="relative !h-72 rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
                key={item.id}
              >
                <img
                  src={`${item.image}`}
                  alt={item.title}
                  className="w-full h-full object-cover transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50"></div>

                <div className="absolute bottom-6 left-8 text-white w-full text-2xl font-medium z-10">
                  <h2>{item.title}</h2>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
      <section className="px-10 py-28">
        <h1 className="text-[2.5rem] font-medium mb-3">
          O'zbekiston shaharlari
        </h1>
        <p className="text-[#6B7280] text-xl mb-8">
          Sayyohlar uchun mashhur yo'nalish
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {city?.map((city, index) => (
            <div
              onClick={() => navigate(`/city/${city._id}`)}
              key={index}
              className="relative h-80 rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
            >
              <img
                src={`${import.meta.env.VITE_API_URL}/${city.heroImg}`}
                alt={city.cityName}
                className="w-full h-full object-cover transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30"></div>

              <div className="absolute bottom-4 text-white w-full text-2xl font-semibold z-10 flex flex-col gap-0 items-center">
                <h2>{city.cityName}</h2>
                <p className="text-[#E5E7EB] text-base rounded-xl text-center">
                  {city.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
