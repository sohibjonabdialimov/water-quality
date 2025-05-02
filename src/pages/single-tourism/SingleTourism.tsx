import Header from "@/components/header/Header";

const tourismData = [
  {
    title: "Sport turizmi",
    image:
      "https://uzbekistan.travel/storage/app/uploads/public/5e5/e2b/47f/thumb_169_600_0_0_0_auto.jpg",
  },
  {
    title: "Etnik turizm",
    image:
      "https://uzbekistan.travel/storage/app/uploads/public/668/623/bbd/thumb_3708_600_0_0_0_auto.jpg",
  },
  {
    title: "Yoshlar turizmi",
    image:
      "https://uzbekistan.travel/storage/app/uploads/public/669/dea/046/thumb_3769_600_0_0_0_auto.png",
  },
  {
    title: "Ekoturizm",
    image:
      "https://uzbekistan.travel/storage/app/uploads/public/668/51c/ab3/thumb_3704_600_0_0_0_auto.jpg",
  },
  {
    title: "Gastronomiya turizmi",
    image:
      "https://uzbekistan.travel/storage/app/uploads/public/5ea/292/d77/thumb_699_600_0_0_0_auto.jpg",
  },
  {
    title: "Tibbiy turizm",
    image:
      "https://uzbekistan.travel/storage/app/uploads/public/5e5/f9e/4b8/thumb_198_600_0_0_0_auto.jpg",
  },
  {
    title: "Madaniyat turizmi",
    image:
      "https://uzbekistan.travel/storage/app/uploads/public/5e6/099/8eb/thumb_205_600_0_0_0_auto.jpg",
  },
  {
    title: "Adabiy turizm",
    image:
      "https://uzbekistan.travel/storage/app/uploads/public/668/627/3c4/thumb_3709_600_0_0_0_auto.jpg",
  },
  {
    title: "Turizm hamma uchun",
    image:
      "https://uzbekistan.travel/storage/app/uploads/public/600/7c5/b1a/thumb_1527_600_0_0_0_auto.jpg",
  },
  {
    title: "Sanoat turizmi",
    image:
      "https://uzbekistan.travel/storage/app/uploads/public/653/a17/fbf/thumb_2792_600_0_0_0_auto.jpg",
  },
  {
    title: "Sarguzasht turizmi",
    image:
      "https://uzbekistan.travel/storage/app/uploads/public/653/a18/f9b/thumb_2794_600_0_0_0_auto.jpg",
  },
  {
    title: "Geoturizm",
    image:
      "https://uzbekistan.travel/storage/app/uploads/public/653/a19/4c2/thumb_2796_600_0_0_0_auto.jpg",
  },
  {
    title: "Shop turizmi",
    image:
      "https://uzbekistan.travel/storage/app/uploads/public/653/a19/900/thumb_2797_600_0_0_0_auto.jpg",
  },
];

const SingleTourism = () => {
  return (
    <>
      <section>
        <div
          style={{
            backgroundImage: `url("https://uzbekistan.travel/themes/travel/assets/img/p2.jpg")`,
          }}
          className={`bg-cover bg-center bg-no-repeat h-[60vh]`}
        >
          <div className="absolute h-[60vh] inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 ">
            <Header />
            <div className="pt-20">
              <div className="px-10 pr-[300px] pb-[44px]">
                <h1 className="text-white text-[48px] leading-[1.2] mb-5 font-medium">
                  Turizm hamma uchun
                </h1>
                <p className="text-white/80 text-xl mb-16">
                  Ushbu bo‘limda siz O‘zbekistonni yangidan kashf etasiz! Sport,
                  etno, tarix, gastronomiya yoki tibbiyot - bu yerda har kim har
                  qanday didga mos keladigan turizm turini topishi mumkin!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="pt-[80px] pb-[100px] w-[90%] mx-auto">
        <div className="grid grid-cols-3 gap-x-8 gap-y-10">
          {tourismData.map((item, index) => (
            <div key={index} className="w-full rounded-[13px] relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover rounded-[13px]"
              />
              <p className="absolute rounded-[13px] bottom-0 left-0 w-full text-white text-2xl font-medium bg-black/50 p-5">
                {item.title}
              </p>
            </div>
          ))}
        </div>
        <h1 className="text-5xl font-medium mt-20 mb-8">Turizm turlari</h1>
        <p className="text-[22px] leading-relaxed text-[#535353] mb-5">
          Dunyoda vaqtni qiziqarli va mazmunli o‘tkazishning juda ko‘p usullari
          mavjud: sayohat yoki sarguzashtlar, biror narsani o‘rganish, ziyoratga
          borish, sivilizatsiya tegmagan noyob joylarni ko‘rish, davolanish,
          faol dam olish, ekstremal sport bilan shug‘ullanish yoki faqat oila
          yoki do‘stlar bilan tabiat qo‘ynida vaqt o‘tkazish, bularning barchasi
          turizm va umuman turizm sanoati bilan bog‘liq. O‘zbekistonda
          turizmning uchta asosiy turi mavjud: kirish, chiqish va ichki turizm.
        </p>
        <p className="text-[22px] leading-relaxed text-[#535353] mb-5">
          Kirish va ichki turizmga asosiy va maxsus turistik mahsulotlar kiradi:
          turistik diqqatga sazovor joylarga ekskursiyalar; mehmonxonalar, dam
          olish maskanlari, kurortlar, sanatoriylar, turizm qishloqlari, o‘tov
          lagerlari, kempinglarda joylashish; milliy taomlar va vinolarni tatib
          ko‘rish; bayram va festivallarda ishtirok etish; mamlakat bo‘ylab
          qulay sayohat qilish.
        </p>
        <p className="text-[22px] leading-relaxed text-[#535353] mb-5">
          O‘zbekistonda sayohat va dam olishning barcha turlari bo‘yicha sport,
          milliy, yoshlar, ekologik, gastronomik, tibbiy, madaniy, tadbir,
          ziyorat, adabiy, qishki, velosport va boshqa turizm turlariga bo‘lish
          mumkin, ularning ayrimlarini tanlashda mavsumiylik e’tiborga olinishi
          kerak.
        </p>
        <p className="text-[22px] leading-relaxed text-[#535353] mb-5">
          O‘zbekistonga kelgan sayyohlar yolg‘iz, do‘stlari yoki oila a’zolari
          bilan yoxud sayohatchilarning o‘z maqsadlari va rejalashtirilgan
          sayohat byudjetiga muvofiq oldindan rejalashtirilgan yo‘nalish bo‘ylab
          qiziqarli va hayajonli manzillarga olib boradigan gid bilan birga
          guruh tarkibida sayohat qiladilar.
        </p>
        <p className="text-[22px] leading-relaxed text-[#535353] mb-5">
          Mamlakatda juda ko‘p sayyohlik kompaniyalari mavjud bo‘lib, ular
          kichik bir kunlik, tor maqsadli turlardan tortib, ko‘p kunlik kompleks
          turgacha bo‘lgan keng doiradagi sayohat xizmatlarini taqdim etadilar,
          bu xizmatlardan foydalangan sayyohlar yaxshi dam olishi, aqliy va
          jismoniy jihatdan kuchlarini tiklashi, salomatligini mustahkamlashi,
          Markaziy Osiyo va O‘zbekistonning mahalliy madaniyati bilan
          tanishishi, bayram, ko‘ngilochar tadbirlarda ishtirok etishi mumkin
          bo‘lgan joylarga buyurtma berish orqali, shu jumladan, mamlakatning
          eng muhim va mashhur diqqatga sazovor joylariga tashrif buyurish yoki
          sport dasturlari va tadbirlari, ko‘rgazma va yarmarkalarga tashrif
          buyurish, kundalik va uy-ro‘zg‘or buyumlari, noyob mahsulotlar va
          suvenirlarni xarid qilish imkoniyatiga ega bo‘ladilar.
        </p>
      </div>
    </>
  );
};

export default SingleTourism;
