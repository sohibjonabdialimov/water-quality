// components/FAQAccordion.tsx
import Header from "@/components/header/Header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircleWarning } from "lucide-react";

const questions = [
  {
    id: 1,
    title: "Ko‘p beriladigan savollar",
    children: [
      {
        id: 1,
        title: "O‘zbekiston qayerda joylashgan?",
        description:
          "O‘zbekiston Markaziy Osiyoning qoq markazida joylashgan, bu holat mamlakatda yil davomida iliq va bulutsiz ob-havo bo‘lishi imkonini beradi. Respublika hududida ko‘plab noyob tabiiy va me’moriy obidalarni topish mumkin.",
      },
      {
        id: 2,
        title: "Sizning milliy taomlaringiz nimadan iborat?",
        description:
          "O‘zbekistonning milliy taomlari - bu go‘shtdir! Ming yillar davomida mahalliy oshpazlar respublikamiz hududida paydo bo‘lgan retseptlarni saqlamoqda va takomillashtirib kelmoqda. Bu yerda yuzlab turli xil taomlar tayyorlanadi, ammo palov butun gastronomik tadbirning kulminatsiyasi hisoblanadi. 2016-yil 1-dekabrda u YUNESKO insoniyatning nomoddiy madaniy merosi ro‘yxatiga kiritildi. O‘zbek taomlari haqida ko‘proq ma’lumot oling.",
      },
      {
        id: 3,
        title: "O‘zbekiston nimani degani?",
        description:
          "O‘zbekiston Respublikasi 1991-yil mustaqillikka erishgan. Ushbu toponim “o‘zbek” - “erkin odam” va “iston” - “mamlakat” so‘zlarini birlashtirish natijasida hosil bo‘lgan.",
      },
      {
        id: 4,
        title: "Dunyoga mashhur o‘zbeklar bormi?",
        description:
          "O‘zbekiston hududida ko‘plab taniqli odamlar tug‘ilgan! Butun dunyoda Avitsenna nomi bilan tanilgan Abu Ali ibn Sino buyuk tabib, faylasuf, musiqashunos va shoir bo‘lgan. Amir Temur yoki, boshqacha aytganda, Temurlang O‘rta Osiyoning eng katta hukmdorlaridan biri bo‘lgan. U Chingizxonning to‘g‘ridan-to‘g‘ri qarindoshi edi. O‘zining zakovati va qobiliyati tufayli u o‘z bayrog‘i ostida butun O‘rta Osiyoni Xitoygacha birlashtira oldi. Alisher Navoiy – taniqli o‘zbek shoiri va davlat arbobi. Uning 30dan ortiq she’riy to‘plami, dostonlari va ilmiy asarlari bizgacha yetib kelgan. Uning eng mashhur asari 'Xamsa' deb nomlangan bo‘lib, u xalq eposiga asoslangan beshta doston to‘plamidir.",
      },
      {
        id: 5,
        title: "Yangi yilni o‘zbekistonliklar qanday nishonlaydi?",
        description:
          "Tarixan shunday bo‘lganki, O‘zbekistonda Yangi yil ikki marta nishonlanadi. Birinchisi – xalqaro miqyosda qabul qilingan 1-yanvar. Bu vaqtda mamlakatni shod-xurramlik to‘lqini qoplab oladi! Odamlar dam olishadi, bir-birlarini tabriklashadi va albatta sovg‘alar ulashishadi! Ikkinchi Yangi yil 21-martda nishonlanadi va Navro‘z deb nomlanadi. Bu kunni ota-bobolarimiz tasodifan tanlamagan. Aynan 21-martda kun bilan tun teng keladi, bu esa Yerning yangi quyosh sikliga kirishini anglatadi.",
      },
      {
        id: 6,
        title: "O‘zbekistonda plyajlar bormi?",
        description:
          "O‘zbekiston O‘rta Osiyoda joylashganligi sababli, u okeanga to‘g‘ridan-to‘g‘ri chiqa olmaydi, ammo mamlakatda sun’iy va tabiiy bir nechta ajoyib suv havzalari mavjud. Bularga Chorvoq suv ombori, Aydarko‘l ko‘li, Nefrit ko‘llari va boshqalar kiradi.",
      },
      {
        id: 7,
        title: "O‘zbekistonda eng ko‘p tashrif buyuriladigan joy qaysi?",
        description:
          "Samarqand shahridagi Registon maydoni O‘'zbekistondagi eng mashhur joydir. Ushbu maskan o‘z hududidagi 1420-1660-yillarda qurilgan uchta ulug‘vor Sherdor, Tillaqori va Ulug‘bek madrasalari bilan mashhur.",
      },
      {
        id: 8,
        title: "O‘zbekistonda eng katta qaysi bayram nishonlanadi?",
        description:
          "Navro‘z deb nomlangan bahorgi tengkunlik bayrami O‘zbekistonda juda keng nishonlanadi. Ushbu bayram Xurosonda bundan 3 ming yil avval paydo bo‘lgan va bu kun tasodifan tanlanmagan. Ushbu 21-martda kun bilan tun teng kelib, yangi astronomik yilning boshlanishini anglatadi. Bayramga tayyorgarlik qadimgi urf-odatlar va marosimlarga to‘la bo‘lib, ulardan eng mazalisi sumalakdir! Ushbu taomni tayyorlash uchun odatda barcha qarindoshlar yig‘ilib, bayramdan oldingi tunda ayollar ulkan qozon atrofida yig‘ilishadi, o‘yin-kulgu qilishadi, qo‘shiqlar kuylashadi va, o‘z navbatida, ushbu bug‘doy boshoqlaridan tayyorlanadigan taomni kavlashadi. Ertalab barcha do‘stlar va oila a’zolari bilan ushbu noyob ta’m va juda to‘yimli taomni baham ko‘rish odatiy holdir. Aytishlaricha, sumalak yeyishni boshlashdan oldin niyat qilish kerak va u albatta amalga oshadi!",
      },
    ],
  },
  {
    id: 2,
    title: "Pasport",
    children: [
      {
        id: 1,
        title:
          "O‘zbekistonga borish uchun pasport/ xorijiy pasportning amal qilish muddati qanday bo‘lishi kerak?",
        description:
          "Pasportning amal qilish muddati mamlakatda bo‘lishning kutilgan vaqtidan kam bo‘lmasligi kerak. Diplomatik pasportlar, havo kemasi ekipajiga tegishlilik guvohnomalari yoki dengizchining guvohnomalari ushbu hujjatga tenglashtirilib, agar bunday identifikatorlar mavjud bo‘lsa, u holda sizga pasport kerak emas bo‘ladi.",
      },
      {
        id: 2,
        title:
          "Agar mening pasportim amal qilish muddati bir oy ichida tugasa, men O‘zbekistonga bora olamanmi?",
        description:
          "Xorijiy pasportingizning amal qilish muddati vizaga to‘g‘ri kelishi va vizangizning tugashidan ko‘pi bilan 90 kun oldin tugamasligi kerak.",
      },
      {
        id: 3,
        title:
          "Safar paytida pasport yo‘qoldi yoki o‘g‘irlandi. Nima qilish kerak?",
        description:
          "Xavotir olmang, bunday holat keng tarqalgan va siz yagona emassiz. Bunday sharoitda siz xotirjam bo‘lishingiz va gid yoki mehmonxonadagi resepshnga joyiga murojaat qilishingiz kerak, shunda ular sizga davlatingizning O‘zbekistondagi diplomatik vakolatxonasiga murojaat qilishga yordam berishadi. Sizdan xorijiy pasportingiz va fotosuratingiz nusxasini taqdim etishingiz so‘raladi. Shundan so‘ng, sizga vatanga qaytishingiz uchun vaqtinchalik hujjatlar beriladi. Pasportingiz yo‘qolganligi to‘g‘risida zudlik bilan politsiyaga murojaat qilishingiz kerak.",
      },
    ],
  },
  {
    id: 3,
    title: "Viza",
    children: [
      {
        id: 1,
        title: "O‘zbekistonga viza qanday olinadi?",
        description:
          "O‘zbekistonga viza olishni haqida o‘ylayapsizmi? Sizdan talab qilinadigan narsa – internet va pasportingiz mavjud bo‘lishi. e-visa.gov.uz saytiga kiring, u yerda siz O‘zbekistonga elektron turistik viza olish uchun murojaat qilishingiz mumkin bo‘ladi. Agar siz O‘zbekiston bilan vizasiz aloqa mavjud bo‘lgan 86 mamlakat ro‘yxatiga kirsangiz, chiptalarni osongina sotib oling, chamadonlaringizni yig‘ing va Welcome to Uzbekistan!",
      },
      {
        id: 2,
        title:
          "Mamlakat uchun vizasiz rejim mavjud. O‘zbekistonda necha kun qolishimiz mumkin?",
        description:
          "Avvaliga, siz qaysi davlatdan ketayotganingizni aniqlab olish lozim. Biz bilan vizasiz aloqalar o‘rnatgan davlatlar bor (ayrim MDH mamlakatlari). Fuqarolari bizda 30 kungacha, 60 kungacha va 7 kungacha bo‘lishi mumkin bo‘lgan davlatlar mavjud. Biz bilan vizasiz aloqalar o‘rnatgan mamlakatlarning to‘liq ro'yxati bilan https://mfa.uz/ru/consular/visa/ saytida tanishishingiz mumkin.",
      },
      {
        id: 3,
        title:
          "E-visa orqali arizani berdim, lekin tasdiqni olmadim. Nima qilishim kerak?",
        description:
          "Biz bilan bog‘lanishingiz mumkin. Biz elektron vizani ishlab chiquvchilar bilan bog‘lanamiz va sizning elektron vizaga bergan arizangiz bo‘yicha yuzaga kelgan holat va muammolarni bilib olamiz.",
      },
    ],
  },
  {
    id: 4,
    title: "Parvoz",
    children: [
      {
        id: 1,
        title:
          "O‘zbekistonga uchadigan samolyot turi, reys haqida ma’lumotni qanday olishim mumkin?",
        description:
          "Jadvalda ko‘rsatilgan va chipta sotib olayotganingizda Sizga ma’lum bo‘lgan samolyot turi texnik yoki tijorat sabablariga ko‘ra o‘zgartirilishi mumkin. Siz uchadigan samolyot turini bilish uchun reysga chiqishni ro‘yxatga oladigan aeroport xodimiga murojaat qilishingiz kerak.",
      },
      {
        id: 2,
        title:
          "Reyslar, chiptalarni sotib olish va joyni bron qilish shartlari haqida ma’lumotni qanday va qayerdan olish mumkin?",
        description:
          "Joylar soni, reyslar jadvali va tariflar to‘g‘risida ma’lumotni Siz uzairways.com saytida yoki 'O‘zbekiston havo yo‘llari' aviakompaniyasining vakolatxonasi bilan bog‘lanib yoki chiptalarni sotish ofisiga murojaat qilib bilib olishingiz mumkin.",
      },
      {
        id: 3,
        title:
          "O‘zbekistondan jo‘nash kuni aeroportga soat nechada kelishim kerak?",
        description:
          "O‘zbekistonga uchib keladigan va undan uchib ketadigan barcha reyslarni ro‘yxatdan o‘tkazish uchishdan 3 soat oldin amalga oshiriladi. Agar Siz parvoz uchun ro‘yxatdan o‘tgan bo‘lsangiz, ammo hanuz erkin zonada yurgan bo‘lsangiz, ismingiz reysga chiqishingiz uchun karnay orqali e’lon qilinadi.",
      },
    ],
  },
  {
    id: 5,
    title: "O‘zbekistonda vaqtincha yashash uchun ro‘yxatdan o‘tish",
    children: [
      {
        id: 1,
        title:
          "Men onlayn ro‘yxatdan o‘tganman, yana mehmonxonada, militsiyada yoki boshqa joyda ro‘yxatdan o‘tishim kerakmi?",
        description:
          "Endi sayyohlar mustaqil ravishda ro‘yxatdan o‘tishlari mumkin bo‘lib, albatta mehmonxonalarda yashashi va ichki ishlar bo‘limlarida ro‘yxatdan o‘tishi shart emas. Buni 3ta oddiy usul bilan amalga oshirish mumkin: 1. Mehmonni o‘zingizning uyingizda ro‘yxatdan o‘tkazish uchun siz “E-mehmon” mehmonlarni onlayn ro‘yxatdan o‘tkazish maxsus tizimidan foydalanishingiz mumkin. Mobil dasturni yuklab oling va avval tizimda o‘zingiz ro‘yxatdan o‘ting. 2. “e-mehmon.uz” internet saytidan foydalangan holda. Saytga kiramiz va Siz qaysi shaxslar (jismoniy yoki yuridik) turiga kirishingizni tanlaymiz, keyin hammasi xuddi mobil ilovadagi kabi bajariladi. Ma’lumotlarni kiritamiz va turistik yig‘imni to‘laymiz. Ro‘yxatdan o‘tish yakunlandi. 3. Uchinchi usul o‘z transportida yoki piyoda sayohat qilgan, transport vositasida yoki chodirda tunaydigan mustaqil sayyohlar uchun mo‘ljallangan. Ular istagan joylashtirish vositasining xodimlari yoki texnik vositasi yordamida (ularga mehmonxonalar, xususiy va mehmonni kutish uylari, tibbiyot muassasalari, dam olish maskanlari, motellar, pansionatlar va vaqtincha turar joy xizmatlarini ko‘rsatadigan boshqa joylar kiradi) o‘zlarini e-mehmon tizimida ro‘yxatdan o'tkazishlari kerak. Bunda sayyoh turistik yig‘imni joylashtirish vositasiga to‘laydi. Mustaqil sayyohlar mehmonxonalar, otellar, turistik bazalar, dam olish maskanlari va h.ning xodimlari, agar ularga murojaat qilinsa, ro‘yxatdan o‘tishga majburligigi bilishlari muhimdir.",
      },
      {
        id: 2,
        title:
          "Men 30 kun davomida O‘zbekistonning bir nechta shahariga bir martadan tashrif buyurmoqchiman. Men to‘xtash joyida ro‘yxatdan o‘tishim kerakmi yoki bir marta ro‘yxatdan o‘tishim kifoya qiladimi?",
        description:
          "O‘zbekistonga tashrif buyurgan har bir sayyoh faqat bir marta e-mehmon tizimida ro‘yxatdan o‘tishi va O‘zbekistonning barcha shaharlariga sayohat qilishi kifoya.",
      },
    ],
  },
];
export default function Questions() {
  return (
    <>
      <section>
        <div
          style={{ backgroundImage: `url("/src/assets/images/questions.jpg")` }}
          className={`bg-cover bg-center bg-no-repeat h-[60vh]`}
        >
          <div className="absolute h-[60vh] inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 ">
            <Header />
            <div className="pt-20">
              <div className="px-10 pr-[300px] pb-[44px]">
                <h1 className="text-white text-[48px] leading-[1.2] mb-5 font-medium">
                  Ko‘p beriladigan savollar
                </h1>
                <p className="text-white/80 text-xl mb-16">
                  Turistlarning O‘zbekistonga sayohatga kelishga oid tez-tez
                  beriladigan savollari mavzusi: pasportlar, vizalar,
                  shaharlarda yashash va harakatlanish to‘g‘risidagi ma’lumotlar
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="pt-[80px] pb-[100px] w-[90%] mx-auto flex gap-16">
        <div className="w-[calc(100%-350px)] flex flex-col gap-16">
          {questions.map((question) => (
            <div className="">
              <h2 className="text-[28px] leading-[1.2] font-medium mb-5">
                {question.title}
              </h2>
              <Accordion type="multiple">
                {question.children.map((child) => (
                  <AccordionItem value={child.id.toString()}>
                    <div className="flex items-start gap-4">
                      <MessageCircleWarning className="text-red-600 w-8 h-8 mt-5" />

                      <div className="w-full">
                        <AccordionTrigger className="text-left font-semibold text-xl font-sans">
                          {child.title}
                        </AccordionTrigger>
                        <AccordionContent className="text-[#4A4A4A] text-base font-sans">
                          {child.description}
                        </AccordionContent>
                      </div>
                    </div>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
        <div className="sticky top-5 right-0 w-[350px] bg-[#F7F7F7] broder-[#dcdcdc] border rounded-[10px] p-7 pl-12 h-[30rem]">
          <ul className="flex flex-col gap-4 list-disc marker:text-red-600">
            <li className="text-lg font-medium">
              <p>Ko‘p beriladigan savollar</p>
            </li>
            <li className="text-lg font-medium">
              <p>Pasport</p>
            </li>
            <li className="text-lg font-medium">
              <p>Viza</p>
            </li>
            <li className="text-lg font-medium">
              <p>Parvoz</p>
            </li>
            <li className="text-lg font-medium">
              <p>Ro‘yxatdan o‘tish</p>
            </li>
            <li className="text-lg font-medium">
              <p>Sayohat</p>
            </li>
            <li className="text-lg font-medium">
              <p>Aloqa</p>
            </li>
            <li className="text-lg font-medium">
              <p>Sug‘urta</p>
            </li>
            <li className="text-lg font-medium">
              <p>Joylashish</p>
            </li>
            <li className="text-lg font-medium">
              <p>Chipta sotib olish</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
