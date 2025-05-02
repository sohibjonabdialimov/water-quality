import CustomProgressBar from "@/components/CustomProgressBar";
import { waterData } from "@/data";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const columns = [
  {
    title: "№",
    dataIndex: "id",
    key: "id",
    width: "",
  },
  {
    title: "O'lchangan vaqti",
    dataIndex: "sana",
    key: "sana",
    render: (text: string) => <a>{text}</a>,
    width: "15%",
  },
  {
    title: "Suv sathi, (sm)",
    dataIndex: "chuqurlik",
    key: "chuqurlik",
  },
  {
    title: <p>Temperatura, (0&#176;C)</p>,
    dataIndex: "tC",
    key: "tC",
  },
  {
    title: "Sho'rlanganligi, (TDS)",
    dataIndex: "tds",
    key: "tds",
  },
  {
    title: "Eh",
    dataIndex: "eh",
    key: "eh",
  },
];
const Home = () => {
  return (
    <div className="py-4 px-10">
      <div className="flex justify-between items-center w-full flex-wrap mb-10 gap-3">
        <div className="flex-auto h-[8rem] flex items-center flex-col justify-between text-center bg-[#fff] rounded-lg shadow-[0px_4px_10px_3px_rgba(0,0,0,0.1)] pt-4">
          <h3 className="text-[#a8a8a8] uppercase text-base font-semibold">
            Temperatura
          </h3>
          <p className="text-2xl text-[#757575FF] font-bold">18.6</p>
          <CustomProgressBar color="#6BB2D7FF" progress={50} />
        </div>
        <div className="flex-auto shadow-[0px_4px_10px_3px_rgba(0,0,0,0.1)] h-[8rem] flex items-center flex-col justify-between text-center bg-[#fff] rounded-lg pt-4">
          <h3 className="text-[#a8a8a8] uppercase text-base font-semibold">
            Suv sathi
          </h3>
          <p className="text-2xl text-[#757575FF] font-bold">18.6</p>
          <CustomProgressBar color="#00FF00FF" progress={90.3} />
        </div>
        <div className="flex-auto h-[8rem] flex items-center flex-col justify-between text-center bg-[#fff] rounded-lg shadow-[0px_4px_10px_3px_rgba(0,0,0,0.1)] pt-4">
          <h3 className="text-[#a8a8a8] uppercase text-base font-semibold">
            Sho'rlanganligi
          </h3>
          <p className="text-2xl text-[#757575FF] font-bold">18.6</p>
          <CustomProgressBar color="#82A6F6FF" progress={45.5} />
        </div>
        <div className="flex-auto h-[8rem] flex items-center flex-col justify-between text-center bg-[#fff] rounded-lg shadow-[0px_4px_10px_3px_rgba(0,0,0,0.1)] pt-4">
          <h3 className="text-[#a8a8a8] uppercase text-base font-semibold">
            Ishqor miqdori
          </h3>
          <p className="text-2xl text-[#757575FF] font-bold">18.6</p>
          <CustomProgressBar color="#6A9308FF" progress={67.0} />
        </div>
      </div>
      <div className="h-[calc(100vh-5rem)] flex gap-3">
        <div className="scrollbar-custom sm:w-[65%] w-full h-full overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 border rounded-[15px] shadow-lg">
          <Table className="rounded-b-[15px] border-collapse min-w-max border-spacing-0 overflow-hidden shadow-sm p-4">
            <TableHeader className="bg-bgDark">
              <TableRow className="shadow-2xl">
                {columns.map((column) => (
                  <TableHead className="text-center" key={column.key}>
                    {column.title}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {waterData.map((item, index) => (
                <TableRow
                  className="bg-[#fff] hover:bg-[#F5F6FA]"
                  key={item.id}
                >
                  <TableCell className="font-medium border-b border-[#E4E6EE] pl-6">
                    {index + 1}
                  </TableCell>
                  <TableCell className="border-b border-[#E4E6EE]">
                    {item.sana}
                  </TableCell>
                  <TableCell className="border-b border-[#E4E6EE]">
                    {item.chuqurlik}
                  </TableCell>
                  <TableCell className="border-b border-[#E4E6EE]">
                    {item.tC}
                  </TableCell>
                  <TableCell className="border-b border-[#E4E6EE]">
                    {item.tds}
                  </TableCell>
                  <TableCell className="border-b border-[#E4E6EE]">
                    {item.eh}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="sm:w-[35%] w-full h-full flex flex-col gap-2 shadow-lg border rounded-[15px] bg-white">
          <div>
            <h2 className="text-[#333] font-semibold text-lg text-center py-3 border-b-[1px] border-[#b3b3b3]">
              Qurilma tafsilotlari
            </h2>
            <div className="py-1 px-3 border-b-[1px] border-[#b3b3b3]">
              <div className="flex justify-between text-[#5c5c5c] py-1">
                <p>Holati:</p>
                <div className="flex items-center gap-1">
                  <span className="inline-block w-[15px] h-[15px] rounded-full bg-[#f63030]"></span>
                  <p className="uppercase text-[#f63030]">OFFLINE</p>
                </div>
              </div>
              <div className="flex justify-between text-[#5c5c5c] py-1">
                <p>Nomi:</p>
                <p className="">Donyorshayx N16, 9арж</p>
              </div>
              <div className="flex justify-between text-[#5c5c5c] py-1">
                <p>Telefon:</p>
                <p className="">+998(91) 788-17-77</p>
              </div>
              <div className="flex justify-between text-[#5c5c5c] py-1">
                <p>Kadastr raqami:</p>
                <p className="">1710137</p>
              </div>
              <div className="flex justify-between text-[#5c5c5c] py-1">
                <p>Chuqurlik sensori:</p>
                <p className="">11.65</p>
              </div>
            </div>
            <div className="px-3 border-b-[1px] border-[#b3b3b3]">
              <div className="flex justify-between text-[#5c5c5c] py-1">
                <p>Ma'lumotlar yangilanishi:</p>
                <p className="">Holatga qarab</p>
              </div>
            </div>
            <div className="px-3">
              <div className="py-1 flex justify-between text-[#5c5c5c]">
                <p>Dastur nomi:</p>
                <p className="">
                  Gidrogeokimyoviy parametrlarini o‘lchov qurilmasi
                </p>
              </div>
              <div className="py-1 flex justify-between text-[#5c5c5c]">
                <p>Dastur versiyasi:</p>
                <p className="">5.6.12</p>
              </div>
            </div>
          </div>
          <div
            className="flex-1 rounded-lg"
            style={{ position: "relative", overflow: "hidden" }}
          >
            <a
              href="https://yandex.uz/maps?utm_medium=mapframe&utm_source=maps"
              style={{
                color: "#eee",
                fontSize: 12,
                position: "absolute",
                top: 0,
              }}
            >
              Yandex&nbsp;Xarita
            </a>
            <a
              href="https://yandex.uz/maps/geo/4040491070/?ll=66.972087%2C39.177573&utm_medium=mapframe&utm_source=maps&z=14.78"
              style={{
                color: "#eee",
                fontSize: 12,
                position: "absolute",
                top: 14,
              }}
            >
              Doniyorshayx aholi punkti — Yandex&nbsp;Xarita
            </a>
            <iframe
              src="https://yandex.uz/map-widget/v1/?ll=66.972087%2C39.177573&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgo0MDQwNDkxMDcwEktPyrt6YmVraXN0b24sIFFhc2hxYWRhcnlvIHZpbG95YXRpLCBLaXRvYiB0dW1hbmksIERvbml5b3JzaGF5eCBhaG9saSBwdW5rdGkiCg1t8oVCFR-3HEI%2C&z=14.78"
              width="100%"
              height={"100%"}
              frameBorder={1}
              allowFullScreen={true}
              style={{ position: "relative" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
