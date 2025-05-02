import Header from "@/components/header/Header";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
    };

    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/feedback`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const resData = await response.json();


    if (resData.data.success) {
      console.log("Ariza yuborildi");
      toast({
        title: "Ariza yuborildi",
        description: "Biz siz bilan tez orada bog'lanishadi",
      });
      form.reset();
    }else{
      toast({
        title: "Xatolik",
        description: "Iltimos qaytadan uruning",
      });
    }
  };
  return (
    <>
      <section>
        <div
          style={{ backgroundImage: `url("/src/assets/images/services.png")` }}
          className={`bg-cover bg-center bg-no-repeat h-[60vh]`}
        >
          <div className="absolute h-[60vh] inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 ">
            <Header />
            <div className="pt-20">
              <div className="px-10 pr-[300px] pb-[44px]">
                <h1 className="text-white text-[48px] leading-[1.2] mb-5 font-medium">
                  Biz bilan bog'laning
                </h1>
                <p className="text-white/80 text-xl mb-16">
                  Ariza va takliflaringizni shu yerda qoldiring
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="pt-[80px] pb-[100px] w-[90%] mx-auto flex gap-16">
        <div className="flex flex-col gap-12">
          <h1 className="text-[2.6rem] font-medium mb-0 text-center">
            Biz bilan bog'laning
          </h1>
          <h4 className="text-[22px] leading-normal text-gray-500 italic mb-8 text-center">
            Uzbek Travel sizning O‘zbekistondagi sayohatingizni unutilmas va
            qulay qilish uchun har doim tayyor. Savol, taklif yoki izohlaringiz
            bo‘lsa, biz bilan bog‘lanishdan tortinmang. Bizning jamoa sizning
            har bir murojaatingizga e’tibor bilan yondashadi va imkon qadar tez
            orada javob beradi.
          </h4>
          <div className="flex gap-16">
            <div className="w-[55%]">
              <div className="flex flex-col gap-4 border-b border-[#dcdcdc] pb-12 mb-10">
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
              <form onSubmit={handleSubmit} className="grid gap-8 py-4">
                <h3 className="text-[22px] leading-normal text-[#444] mb-0 font-semibold">
                  Ariza va takliflaringizni shu yerda qoldiring
                </h3>
                <div className="flex flex-col items-start gap-2">
                  <Label htmlFor="name" className="text-right text-lg">
                    Ismingiz
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Ismingizni kiriting..."
                    className="col-span-3 h-[42px] text-lg"
                  />
                </div>
                <div className="flex flex-col items-start gap-2">
                  <Label htmlFor="username" className="text-right text-lg">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Emailingizni kiriting..."
                    className="col-span-3 h-[42px] text-lg"
                  />
                </div>
                <div className="flex flex-col items-start gap-2">
                  <Label htmlFor="username" className="text-right text-lg">
                    Telefon raqamingiz
                  </Label>
                  <Input
                    id="phone"
                    type="number"
                    name="phone"
                    placeholder="Telefon raqamingizni kiriting..."
                    className="col-span-3 h-[42px] text-lg"
                  />
                </div>
                <div className="flex flex-col items-start gap-2">
                  <Label htmlFor="username" className="text-right text-lg">
                    Xabar qoldirish
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Xabar qoldirish..."
                    className="col-span-3 resize-none h-[100px] text-lg"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-1/3 h-[42px] text-base text-white"
                >
                  Ariza yoki taklifni yuborish
                </Button>
              </form>
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
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Ariza qoldirish</DialogTitle>
            <DialogDescription>
              O'zbekiston bo'ylab sayohat qilish uchun eng yaxshi xizmatlar va
              imkoniyatlar
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <Button type="submit">Arizani yuborish</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Contact;
