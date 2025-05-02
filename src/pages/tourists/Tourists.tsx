// components/FAQAccordion.tsx
import Header from "@/components/header/Header";

import { Gift, MessageCircleWarning, Plane, Sun } from "lucide-react";
import globus from "@/assets/images/globus.jpg";
import gift from "@/assets/images/gift.jpg";
import fasl from "@/assets/images/fasl.jpg";
import sam1 from "@/assets/images/sam1.jpg";
import sam2 from "@/assets/images/sam2.jpg";
import sam3 from "@/assets/images/sam3.jpg";
import sam4 from "@/assets/images/sam4.jpg";
import sam5 from "@/assets/images/sam5.jpg";
import sam6 from "@/assets/images/sam6.png";
import sam7 from "@/assets/images/sam7.jpg";
import sam8 from "@/assets/images/sam8.jpg";
import phone from "@/assets/images/phone.jpg";

export default function Tourists() {
  return (
    <>
      <section>
        <div
          style={{ backgroundImage: `url("/src/assets/images/toursit.jpg")` }}
          className={`bg-cover bg-center bg-no-repeat h-[60vh]`}
        >
          <div className="absolute h-[60vh] inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 ">
            <Header />
            <div className="pt-20">
              <div className="px-10 pr-[300px] pb-[44px]">
                <h1 className="text-white text-[48px] leading-[1.2] mb-5 font-medium">
                  Sayyohlar uchun
                </h1>
                <p className="text-white/80 text-xl mb-16">
                  O‘zbekistonga sayohat haqida bilishingiz kerak bo‘lgan barcha
                  narsalar bitta sahifada
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="pt-[80px] pb-[60px] w-[90%] mx-auto flex gap-16">
        <div className="w-[calc(100%-350px)]">
          <div>
            <h1 className="text-[28px] font-medium mb-10">
              Foydali ma'lumotlar
            </h1>
            <div className="flex flex-col gap-12">
              <div>
                <div className="border-b border-gray-300 pb-4 mb-6 flex items-center gap-4">
                  <MessageCircleWarning className="text-red-600 w-8 h-8" />
                  <h3 className="text-xl font-semibold">Umumiy ma'lumotlar</h3>
                </div>
                <div className="flex flex-row items-start gap-8">
                  <div className="lg:w-3/5 text-base leading-relaxed">
                    <p className="text-[#4A4A4A] text-lg mb-1.5">
                      <span className="font-bold">
                        Geografik va fazoviy joylashuvi:
                      </span>{" "}
                      Yer sayyorasi, Yevrosiyo qit’asi, Markaziy Osiyo.
                    </p>
                    <p className="text-[#4A4A4A] text-lg mb-1.5">
                      <span className="font-bold">Maydoni:</span> 447,4 ming kv.
                      km.
                    </p>
                    <p className="text-[#4A4A4A] text-lg mb-1.5">
                      <span className="font-bold">Aholisi:</span> 34 million
                      kishi.
                    </p>
                    <p className="text-[#4A4A4A] text-lg mb-1.5">
                      <span className="font-bold">Millatlar:</span> mamlakatda
                      134 dan ortiq millat vakillari yashaydi, ammo aholining
                      asosiy qismi o‘zbeklardir (83,8%).
                    </p>
                    <p className="text-[#4A4A4A] text-lg mb-1.5">
                      <span className="font-bold">Hududlar:</span> 12 viloyat +
                      Qoraqalpog‘iston Respublikasi.
                    </p>
                    <p className="text-[#4A4A4A] text-lg mb-1.5">
                      <span className="font-bold">Mashhur shaharlari:</span>{" "}
                      Toshkent, Samarqand, Buxoro, Xiva, Shahrisabz, Termiz,
                      Qo‘qon, Farg‘ona, Mo‘ynoq.
                    </p>
                    <p className="text-[#4A4A4A] text-lg mb-1.5">
                      <span className="font-bold">Poytaxti:</span> Toshkent.
                    </p>
                    <p className="text-[#4A4A4A] text-lg mb-1.5">
                      <span className="font-bold">Til:</span> asosiy til –
                      o‘zbek tili, xalqaro aloqa tillari - rus, ingliz.
                    </p>
                    <p className="text-[#4A4A4A] text-lg mb-1.5">
                      <span className="font-bold">Din:</span> O‘zbekiston –
                      dunyoviy davlat, aholining ko‘p qismi musulmon.
                      Shuningdek, mamlakatda xristianlik, buddizm va boshqa
                      dinlarning vakillari istiqomat qiladi.
                    </p>
                    <p className="text-[#4A4A4A] text-lg mb-1.5">
                      <span className="font-bold">Soat mintaqasi:</span> UTC +5.
                    </p>
                    <p className="text-[#4A4A4A] text-lg mb-1.5">
                      <span className="font-bold">Internet zonasi:</span> .uz.
                    </p>
                    <p className="text-[#4A4A4A] text-lg mb-1.5">
                      <span className="font-bold">Xalqaro telefon kodi:</span>{" "}
                      +998.
                    </p>
                    <p className="text-[#4A4A4A] text-lg mb-1.5">
                      <span className="font-bold">Pul birligi:</span> so‘m.
                    </p>
                    <p className="text-[#4A4A4A] text-lg mb-1.5">
                      <span className="font-bold">Iqlimi:</span> Qishi yumshoq,
                      yоzi issiq.
                    </p>
                  </div>
                  <div className="lg:w-2/5 w-full">
                    <img
                      src={globus}
                      alt="Map of Uzbekistan"
                      className="w-full object-contain"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="border-b border-gray-300 pb-4 flex items-center gap-4 mb-6">
                  <Sun className="text-red-600 w-8 h-8" />
                  <h3 className="text-xl font-semibold">4 fasl</h3>
                </div>
                <div className="flex flex-col lg:flex-row items-start gap-8">
                  <div className="w-2/5 float-left inline-block">
                    <img
                      src={fasl}
                      alt="Map of Uzbekistan"
                      className="w-full object-contain"
                    />
                  </div>
                  <div className="lg:w-3/5 text-base text-justify leading-relaxed inline-block">
                    <p className="mb-2 text-lg font-normal text-[#4A4A4A]">
                      O‘zbekiston – quyoshli mamlakat, yilning istalgan vaqtida
                      bu yer chiroyli.
                    </p>
                    <p className="mb-2 text-lg font-normal text-[#4A4A4A]">
                      Bahor va kuz baxmal mavsumi bo‘lib, bu vaqtda Siz
                      o‘lkamizning tabiatidan zavqlanishingiz, mashhur diqqatga
                      sazovor joylarni ko‘rishingiz va Buyuk Ipak yo‘li bo‘ylab
                      o‘tishingiz mumkin.
                    </p>
                    <p className="mb-2 text-lg font-normal text-[#4A4A4A]">
                      Qishda haqiqiy qorli go‘zallikni ko‘rish uchun to‘rtta
                      tog‘-chang‘i kurortlaridan biriga borishingiz, shaharda
                      muzeylarga, san’at galereyalariga borishingiz, bahorda
                      bizning ajoyib milliy festivallarimizga tashrif
                      buyurishingiz mumkin, yozda esa shahar tashqarisiga yoki
                      tog‘lar tomon otlanib, O‘zbekistonning qo‘riqlanadigan
                      joylarida piyoda sayr qilgan holda toza tog‘ havosidan
                      bahramand bo‘'ling. Bular yilning istalgan vaqtida
                      shug‘ullanishingiz mumkin bo‘lgan ishlarning ozgina qismi
                      xolos.
                    </p>
                    <p className="mb-2 text-lg font-normal text-[#4A4A4A]">
                      O‘zbekistondagi iqlim asosan issiq va quruq, shuning uchun
                      yozda bu yerda ob-havoga oson chidash mumkin, qishi esa
                      asosan iliq bo‘ladi.
                    </p>
                    <p className="mb-2 text-lg font-normal text-[#4A4A4A]">
                      Eng sovuq oyda harorat -6 darajadan pastga tushishi
                      mumkin, eng issiq oyda esa harorat 32 darajadan oshadi.
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium my-2">
                    O‘zbekistondagi chilla
                  </h3>
                  <p className="mb-2 text-lg font-normal text-[#4A4A4A]">
                    O‘zbekistondagi chilla haqida eshitganmisiz? Chilla o‘zbek
                    tilida "40 kun" degan ma’noni anglatadi. Odamlar 40 kun
                    yozning jaziramasi va qishning eng sovuq davrini shunday deb
                    atashadi. Yozda chilla 20 iyundan keyin boshlanadi va avgust
                    oyining boshida tugaydi. Qishki chilla davri dekabr oyining
                    o‘rtalarida boshlanadi va deyarli yanvar oxirigacha davom
                    etadi. Shu bois, bu vaqt uchun quyosh kremi, ko‘zoynak va
                    qalpoqlarni tayyorlab qo‘ying.
                  </p>
                </div>
              </div>
              <div>
                <div className="border-b border-gray-300 pb-4 flex items-center gap-4 mb-6">
                  <Gift className="text-red-600 w-8 h-8" />
                  <h3 className="text-xl font-semibold">Bayramlar</h3>
                </div>
                <div className="flex flex-col lg:flex-row items-start gap-8">
                  <div className="lg:w-3/5 text-base leading-relaxed">
                    <p className="mb-2 text-lg font-normal text-[#4A4A4A]">
                      <span className="font-bold">1-yanvar - </span> Yangi yil
                    </p>
                    <p className="mb-2 text-lg font-normal text-[#4A4A4A]">
                      <span className="font-bold">14 yanvar - </span> Vatan
                      himoyachilari kuni
                    </p>
                    <p className="mb-2 text-lg font-normal text-[#4A4A4A]">
                      <span className="font-bold">8 mart – </span> Xalqaro
                      xotin-qizlar kuni
                    </p>
                    <p className="mb-2 text-lg font-normal text-[#4A4A4A]">
                      <span className="font-bold">21 mart – </span> Navro‘z
                      bayrami
                    </p>
                    <p className="mb-2 text-lg font-normal text-[#4A4A4A]">
                      <span className="font-bold">9 may – </span> Xotira va
                      qadrlash kuni
                    </p>
                    <p className="mb-2 text-lg font-normal text-[#4A4A4A]">
                      <span className="font-bold">1 sentyabr – </span>{" "}
                      Mustaqillik kuni
                    </p>
                    <p className="mb-2 text-lg font-normal text-[#4A4A4A]">
                      <span className="font-bold">1 oktyabr – </span>{" "}
                      O‘qituvchilar va murabbiylar kuni
                    </p>
                    <p className="mb-2 text-lg font-normal text-[#4A4A4A]">
                      <span className="font-bold">8 dekabr – </span>{" "}
                      Konstitutsiya kuni
                    </p>
                    <p className="mb-2 text-lg font-normal text-[#4A4A4A]">
                      <span className="font-bold">
                        Iyd al-Fitr (diniy bayram) –{" "}
                      </span>{" "}
                      sanasi o‘zgarib turadi
                    </p>
                    <p className="mb-2 text-lg font-normal text-[#4A4A4A]">
                      <span className="font-bold">
                        Iyd al-Adha (diniy bayram) –{" "}
                      </span>{" "}
                      sanasi o‘zgarib turadi
                    </p>
                  </div>
                  <div className="lg:w-2/5 w-full">
                    <img
                      src={gift}
                      alt="Map of Uzbekistan"
                      className="w-full object-contain"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="border-b border-gray-300 pb-4 flex items-center gap-4 mb-6">
                  <Plane className="text-red-600 w-8 h-8" />
                  <h3 className="text-xl font-semibold">Transport</h3>
                </div>
                <div className="flex flex-col gap-8">
                  <p className="text-[#4A4A4A] text-lg mb-1.5">
                    Siz O'zbekistonga samolyotda, poyezdda, xalqaro avtobuslarda
                    yetib borishingiz, ekstremal sayohatni yoqtiradiganlar esa
                    avtomobil, mototsikl va hatto velosipedda borishi mumkin.
                    Asosiysi, qay biri Siz uchun eng qulay bo‘lishi.
                    O‘zbekistonda avtomobillar o‘ng tomondan harakatlanadi.
                  </p>
                  <div>
                    <h3 className="text-xl font-medium my-6">Samolyotlar:</h3>
                    <div className="flex flex-row gap-8">
                      <div className="lg:w-2/5 text-base leading-relaxed">
                        <img
                          src={sam1}
                          alt="Map of Uzbekistan"
                          className="w-full object-contain"
                        />
                      </div>
                      <div className="lg:w-3/5 w-full">
                        <p className="text-[#4A4A4A] text-lg mb-1.5">
                          Bu O‘zbekistonga sayohat qilishning eng tezkor
                          yo‘lidir. Mamlakatning asosiy aeroporti Toshkentda
                          joylashgan. I.Karimov nomidagi Toshkent xalqaro
                          aeroportida yo‘lovchilar floti zamonaviy
                          Boeing-767-300, Boeing -757-200, Airbus-320-200,
                          Boeing 787-8 Dreamliner va British-Aerospace Avro RJ85
                          havo kemalariga ega. Ekonom va biznes-klasslarning
                          zamonaviy va qulay salonlari, multimediya xizmatlari,
                          mazali taomlar, samimiy styuardessalar – bunday
                          qulayliklarning barchasiga O‘zbekiston
                          aviakompaniyalari samolyotlarida parvoz qilganda ega
                          bo‘lish mumkin.
                        </p>
                        <p className="text-[#4A4A4A] text-lg mb-1.5">
                          O‘zbekistonning har bir mintaqasida xalqaro
                          aeroportlarning zamonaviy terminallari Siz uchun
                          ochiq.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium my-6">
                      Mamlakatning bosh aviatashuvchisi
                    </h3>
                    <div className="flex flex-row gap-8">
                      <div className="lg:w-3/5 w-full">
                        <p className="text-[#4A4A4A] text-lg mb-1.5">
                          "O‘zbekiston havo yo‘llari" AJ o‘z yo‘lovchilariga
                          xavfsizlik, ishonchlilik va qulaylikni ta’minlagan
                          holda dunyo bo‘ylab ko‘plab odamlarni tashiydi.
                          Kompaniya dunyoning 40dan ortiq shaharlaridan muntazam
                          reyslarni amalga oshiradi. Bundan tashqari, kompaniya
                          MDH davlatlariga va mamlakat ichkarisida muntazam
                          reyslarni bajaradi. Dunyoning 25 ta mamlakatida
                          aviatashuvchining vakolatxonalari faoliyat
                          ko‘rsatmoqda.
                        </p>
                      </div>
                      <div className="lg:w-2/5 text-base leading-relaxed">
                        <img
                          src={sam2}
                          alt="Map of Uzbekistan"
                          className="w-full object-contain"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium my-6">
                      O‘zbekistondagi xorijiy aviakompaniyalar
                    </h3>
                    <div className="flex flex-row gap-8">
                      <div className="w-2/5 text-base leading-relaxed">
                        <img
                          src={sam3}
                          alt="Map of Uzbekistan"
                          className="w-full object-contain"
                        />
                      </div>
                      <div className="lg:w-3/5 w-full">
                        <p className="text-[#4A4A4A] text-lg mb-1.5">
                          Yaqinda mamlakatimiz dunyodagi eng yirik transport
                          markaziga aylanadi, xorijiy aviakompaniyalar uchun
                          osmon ochiladi va O‘zbekistonga yangi charter reyslari
                          yo‘lga qo‘yiladi. O‘zbekiston har kuni Turkish
                          Airlines, "Aeroflot", UTair, Asiana Airlines, Korean
                          Air, Fly Dubai, S7 singari xalqaro
                          aviatashuvchilarning reyslarini qabul qilmoqda..
                          Shuningdek, “Atlas global” (Turkiya) , “Zhejang Loong
                          Airlines” (XXR) xorijiy aviakompaniyalari
                          mamlakatimizga yangi charter reyslarini joriy etishdi.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium my-6">Poyezdlar</h3>
                    <div className="flex flex-row gap-8">
                      <div className="lg:w-3/5 w-full">
                        <p className="text-[#4A4A4A] text-lg mb-1.5">
                          O‘zbekistonda jamoat transportining birinchi
                          turlaridan biri bugungi kunda mashhurlikda
                          aviaparvozlardan kam emas. Agar Siz O‘zbekiston
                          shaharlarining go‘zallaridan zavqlanmoqchi yoki,
                          aytaylik, Toshkentdan Samarqandga, u yerdan esa
                          Buxoroga yoki, hatto, Xivaga yetib bormoqchi
                          bo‘lsangiz, unda temir yo‘lda sayohat qilish qulayroq
                          bo‘ladi. Eng mashhur va tezyurar poyezdlardan biri bu
                          "Afrosiyob" tezyurar poyezdi bo‘lib, u bir kechayu
                          kunduzda ikki marta qatnaydi. Bu qulaylik, sifatli
                          taomlar va birinchi darajali xizmat ko‘rsatishdir.
                        </p>
                      </div>
                      <div className="w-2/5 text-base leading-relaxed">
                        <img
                          src={sam4}
                          alt="Map of Uzbekistan"
                          className="w-full object-contain"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium my-6">Poyezdlar</h3>
                    <div className="flex flex-row gap-8">
                      <div className="w-2/5 text-base leading-relaxed">
                        <img
                          src={sam5}
                          alt="Map of Uzbekistan"
                          className="w-full object-contain"
                        />
                      </div>
                      <div className="lg:w-3/5 w-full">
                        <p className="text-[#4A4A4A] text-lg mb-1.5">
                          Agar siz O‘zbekiston poytaxtida bo‘lib qolsangiz,
                          shaharning eng diqqatga sazovor joylaridan biri –
                          katta bo‘lmagan tarmoqqa ega Toshkent metrosiga
                          albatta tashrif buyuring. Bu yerda o‘z yo‘lingizni
                          osongina topishingiz mumkin bo‘lib, shu bilan birga,
                          har bir bekat aholi uchun poyezdlarni kutish joyi
                          bo‘lsa, sayyohlar uchun noyob san’at galereyasidir.
                        </p>
                        <p className="text-[#4A4A4A] text-lg mb-1.5">
                          Metro xizmatlaridan har kuni soat 06:00dan 00:00gacha
                          foydalanish mumkin.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium my-6">
                      Shaharlararo avtobuslar
                    </h3>
                    <div className="flex flex-row gap-8">
                      <div className="lg:w-3/5 w-full">
                        <p className="text-[#4A4A4A] text-lg mb-1.5">
                          Mamlakatimizda O‘zbekistonning barcha shaharlari va
                          qo‘shni davlatlar bilan bog‘laydigan shaharlararo va
                          xalqaro avtobuslar har kuni va har soatda qatnaydi.
                          Agar Siz, masalan, Toshkentdan Samarqandga yoki,
                          aytaylik, Buxoroga, u yerdan to‘g‘ridan-to‘g'ri Xivaga
                          borishni istasangiz, tezyurar poyezdda Buxoroga, keyin
                          esa Xivaga shaharlararo avtobusda borgan ma’qul. Bu
                          sayohatchi uchun oddiy sayohat yo‘nalishidir. Bu ham
                          tejamkor, ham yangi bilimlarga boy bo‘ladi.
                        </p>
                      </div>
                      <div className="w-2/5 text-base leading-relaxed">
                        <img
                          src={sam6}
                          alt="Map of Uzbekistan"
                          className="w-full object-contain"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium my-6">
                      Shahar avtobuslari
                    </h3>
                    <div className="flex flex-row gap-8">
                      <div className="w-2/5 text-base leading-relaxed">
                        <img
                          src={sam7}
                          alt="Map of Uzbekistan"
                          className="w-full object-contain"
                        />
                      </div>
                      <div className="lg:w-3/5 w-full">
                        <p className="text-[#4A4A4A] text-lg mb-1.5">
                          Shahar bo‘ylab harakatlanishning eng qulay va tejamkor
                          usullaridan biri – bu shahar transportidir. Hozirgi
                          kunda shahar avtobuslari zamonaviy
                          media-texnologiyalar, konditsioner, Wi-Fi bilan
                          jihozlangan, shuningdek, avtobus salonida nogironlar
                          uchun qulayliklar mavjud. Bir martalik yo‘l haqi 1700
                          so‘m. Chiptalarni avtobusning o‘zida nazoratchilan
                          sotib olish mumkin.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium my-6">Taksi</h3>
                    <div className="flex flex-row gap-8">
                      <div className="lg:w-3/5 w-full">
                        <p className="text-[#4A4A4A] text-lg mb-1.5">
                          Siz taksi xizmatlaridan shahar bo‘ylab aeroportga va
                          temir yo‘l bekatiga borish yoki, masalan, kun bo‘yi
                          qiziqarli joylarga ekskursiya qilish, shahardan
                          tashqariga chiqish yoki do‘stlaringiz bilan ulkan
                          mamlakatimizning boshqa shaharlariga borish uchun
                          foydalanishingiz mumkin. Toshkent va Samarqandda
                          Yandex.Taxi va My Taxi mobil ilovalari orqali taksiga
                          buyurtma berish mumkin.
                        </p>
                      </div>
                      <div className="w-2/5 text-base leading-relaxed">
                        <img
                          src={sam8}
                          alt="Map of Uzbekistan"
                          className="w-full object-contain"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium my-6">
                      Avtomobil ijarasi
                    </h3>
                    <div className="flex flex-row gap-8">
                      <p className="text-[#4A4A4A] text-lg mb-1.5">
                        Agar siz shahar atrofida sayr qilishni afzal ko‘rsangiz,
                        unda Siz uchun eng yaxshi yo‘l – bu mashina ijarasidir.
                        Toshkentda tanlash uchun turli toifadagi avtomobillarni
                        ijaraga beradigan ko‘plab kompaniyalar mavjud. Sizga
                        faqat pasport va haydovchilik guvohnomasi kerak bo‘ladi
                        xolos. Shuningdek, agar Siz O‘zbekistonga yaqinda kelgan
                        bo‘lsangiz, qulaylik uchun shahar xaritasini oling, u
                        shahardagi barcha kiosklarida sotiladi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="border-b border-gray-300 pb-4 flex items-center gap-4 mb-6">
                  <Plane className="text-red-600 w-8 h-8" />
                  <h3 className="text-xl font-semibold">
                    Favqulod vaziyatlar uchun raqamlar
                  </h3>
                </div>
                <div className="flex gap-8">
                  <div className="w-1/2">
                    <h3 className="text-xl font-medium my-6">
                      Shoshilinch xizmatlar:
                    </h3>

                    <p className="text-[#4A4A4A] text-lg mb-1.5">
                      Militsiya - 102;
                    </p>
                    <p className="text-[#4A4A4A] text-lg mb-1.5">
                      Tez yordam - 103;
                    </p>
                    <p className="text-[#4A4A4A] text-lg mb-1.5">
                      Avariyali gaz xizmati - 104;
                    </p>
                    <p className="text-[#4A4A4A] text-lg mb-1.5">
                      Ma’lumotlar bo‘limi - 109.
                    </p>
                    <p className="text-[#4A4A4A] text-lg mb-1.5">
                      Yong‘inga qarshi kurash xizmati (FVV) - 101;
                    </p>
                    <div></div>
                  </div>
                  <div className="w-1/2">
                    <img
                      src={phone}
                      alt="Map of Uzbekistan"
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky top-5 right-0 w-[350px] bg-[#F7F7F7] broder-[#dcdcdc] border rounded-[10px] p-7 pl-12 h-[42dvh]">
          <ul className="flex flex-col gap-4 list-disc marker:text-red-600">
            <li className="text-lg font-medium">
              <p>Foydali ma'lumotlar</p>
            </li>
            <li className="text-lg font-medium">
              <p>Transport vositalari</p>
            </li>
            <li className="text-lg font-medium">
              <p>Favqulod vaziyatlar uchun raqamlar</p>
            </li>
            <li className="text-lg font-medium">
              <p>Viza</p>
            </li>
            <li className="text-lg font-medium">
              <p>Va boshqa ma'lumotlar</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
