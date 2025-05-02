import Header from "@/components/header/Header";
import { CityDataProps } from "@/types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleCity = () => {
  const { id } = useParams();
  const [city, setCity] = useState<CityDataProps | null>(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const fetchCity = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/cities/${id}`
      );
      const data = await response.json();
      console.log(data);
      setCity(data);
    };
    fetchCity();
  }, [id]);

  console.log(city);

  return (
    <>
      <section>
        <div
          style={{ backgroundImage: `url(${city?.bg})` }}
          className={`bg-cover bg-center bg-no-repeat h-[60vh]`}
        >
          <div className="absolute h-[60vh] inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 ">
            <Header />
            <div className="pt-20">
              <div className="px-10 pr-[300px] pb-[44px]">
                <h1 className="text-white text-[48px] leading-[1.2] mb-5 font-medium">
                  {city?.cityName}
                </h1>
                <p className="text-white/80 text-xl mb-16">{city?.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="pt-[80px] pb-[100px] w-[90%] mx-auto flex gap-16">
        <div className="w-[calc(100%-350px)] flex flex-col gap-16">
          <div>
            <h1 className="text-[28px] font-medium mb-3">{city?.heroTitle}</h1>
            <p className="text-xl leading-relaxed text-[#4A4A4A] mb-4">
              {city?.heroDesc}
            </p>
            <img
              src={`${import.meta.env.VITE_API_URL}/${city?.heroImg}`}
              alt=""
              className="w-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-[28px] font-medium mb-3">
              Eng mashhur diqqatga sazovor joylar
            </h1>
            <p className="text-xl leading-relaxed text-[#4A4A4A] mb-4">
              {city?.popularDesc}
            </p>
            <ul className="list-none">
              {city?.popularArr.map((item) => (
                <li className="text-lg font-medium text-[#4A4A4A] mb-2.5">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className="text-[28px] font-medium mb-5">
              Shahar haqida video
            </h1>
            <iframe
              width={940}
              height={480}
              src={city?.videoUrl}
              title="Cities of Uzbekistan - Bukhara"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <div>
            <h1 className="text-[28px] font-medium mb-5">Iqlim 🌡</h1>
            <p className="text-xl leading-relaxed text-[#4A4A4A] mb-4">
              {city?.tempDesc}
            </p>
          </div>
          <div>
            <h1 className="text-[28px] font-medium mb-5">
              Sovg'alar va suvenirlar 🛍
            </h1>
            <p className="text-xl leading-relaxed text-[#4A4A4A] mb-4">
              {city?.giftDesc}
            </p>
            <div className="grid grid-cols-3 gap-4">
              {city?.giftImages.map((item) => (
                <img
                  src={`${import.meta.env.VITE_API_URL}/${item}`}
                  alt=""
                  className="w-full object-cover h-[200px]"
                />
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-[28px] font-medium mb-5">Oshxona 🍽</h1>
            <p className="text-xl leading-relaxed text-[#4A4A4A] mb-4">
              {city?.kitchenDesc}
            </p>
            <div className="grid grid-cols-3 gap-4">
              {city?.kitchenImages.map((item) => (
                <img
                  src={`${import.meta.env.VITE_API_URL}/${item}`}
                  alt=""
                  className="w-full object-cover h-[200px]"
                />
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-[28px] font-medium mb-5">
              Fotosuratlar zonalari 🙋‍♂️
            </h1>
            <p className="text-xl leading-relaxed text-[#4A4A4A] mb-4">
              Fotosuratlar har qanday sayohatning ajralmas qismi hisoblanadi!
              Ushbu bo‘limda sizni mazkur shaharning eng go‘zal joylari bilan
              tanishtiramiz.
            </p>
            <p className="text-xl leading-relaxed text-[#4A4A4A] mb-4">
              P.S. O‘zbekistonning diniy diqqatga sazovor joylarini ziyorat
              qilishda ayollarga tananing ochiq joylarini (yelkalari, bel va
              oyoqlari) yopishlari tavsiya etilishini yodingizda saqlang. Bunday
              joylar tegishli shartli belgilar bilan alohida
              belgilangan.☪️☦️✡️✝️{" "}
            </p>
            <div className="grid grid-cols-1">
              {city?.images.map((item) => (
                <div>
                  <img
                    src={`${import.meta.env.VITE_API_URL}/${item}`}
                    alt=""
                    className="w-full object-cover"
                  />
                  <p className="text-lg font-medium text-[#4A4A4A] my-5">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-[28px] font-medium mb-5">Tarix 🏺</h1>
            <p className="text-xl leading-relaxed text-[#4A4A4A] mb-4">
              {city?.historyDesc}
            </p>
          </div>
          <div>
            <h1 className="text-[28px] font-medium mb-5">Xarita 🗺</h1>
            <div
              className="w-full"
              style={{ position: "relative", overflow: "hidden" }}
            >
              <iframe
                src={`https://yandex.uz/map-widget/v1/?ll=${city?.coordinates.longitude}%2C${city?.coordinates.latitude}`}
                height={400}
                frameBorder={1}
                style={{ position: "relative", width: "100%" }}
              />
            </div>
          </div>
        </div>
        <div className="sticky top-5 right-0 w-[350px] bg-[#F7F7F7] broder-[#dcdcdc] border rounded-[10px] p-7 pl-12 h-[75vh]">
          <ul className="flex flex-col gap-4 list-disc marker:text-red-600">
            <li className="text-lg font-medium">
              <p>Shahar haqida</p>
            </li>
            <li className="text-lg font-medium">
              <p>Qadamjolar</p>
            </li>
            <li className="text-lg font-medium">
              <p>Shahar haqida video</p>
            </li>
            <li className="text-lg font-medium">
              <p>Fotogalleriya</p>
            </li>
            <li className="text-lg font-medium">
              <p>Iqlim</p>
            </li>
            <li className="text-lg font-medium">
              <p>Sovg'alar va suvenirlar</p>
            </li>
            <li className="text-lg font-medium">
              <p>Oshxona</p>
            </li>
            <li className="text-lg font-medium">
              <p>Fotosuratlar zonalari</p>
            </li>
            <li className="text-lg font-medium">
              <p>Tarix</p>
            </li>
            <li className="text-lg font-medium">
              <p>Xarita</p>
            </li>
            <li className="text-lg font-medium">
              <p>Hudud</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SingleCity;
