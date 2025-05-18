import BarChart from "@/components/BarChart";
import MultiLineChart from "@/components/MultiLineChart";
import TemperatureChart from "@/components/TemperatureChart";
import TemperatureVsTDSChart from "@/components/TemperatureVsTDSChart";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { InfoProps } from "@/types";
import { dataFormat } from "@/utils/dataFormat";
import { useEffect, useState } from "react";

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
    dataIndex: "waterLevel",
    key: "waterLevel",
  },
  {
    title: <p>Temperatura, (0&#176;C)</p>,
    dataIndex: "temperature",
    key: "temperature",
  },
  {
    title: "Sho'rlanganligi, (ppm)",
    dataIndex: "tds",
    key: "tds",
  },
];

interface DataPoint {
  time: string;
  temperature: number;
  tds: number;
  waterLevel: number;
}
const Home = () => {
  const [data, setData] = useState<InfoProps[]>([]);
  const [tempData, setTempData] = useState<
    { time: string; temperature: number }[]
  >([]);
  const [barData, setBarData] = useState<DataPoint[]>([]);
  const [chartData, setChartData] = useState<DataPoint[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/root`);
      const data = await response.json();
      setData(data);
      setTempData(
        data.map((item: InfoProps) => ({
          time: item.createdAt,
          temperature: +item.temperature,
        }))
      );
      setBarData(
        data.map((item: InfoProps) => ({
          time: item.createdAt,
          temperature: +item.temperature,
          tds: +(+item.tds / 10).toFixed(2),
          waterLevel: +item.waterLevel,
        }))
      );
      setChartData(
        data.map((item: InfoProps) => ({
          temperature: +item.temperature,
          tds: +(+item.tds / 10).toFixed(2),
        }))
      );
    };
    fetchData();
  }, []);
  console.log(barData);
  return (
    <div className="py-4 px-10">
      <div className="flex justify-between items-center w-full flex-wrap mb-10 gap-3">
        <div className="flex-auto h-[8rem] flex items-center flex-col justify-between text-center bg-[#fff] rounded-lg shadow-[0px_4px_10px_3px_rgba(0,0,0,0.1)] py-6">
          <h3 className="text-[#a8a8a8] uppercase text-base font-semibold">
            O'rtacha temperatura <span className="uppercase"> (&#176;C)</span>
          </h3>
          <p className="text-3xl text-[#757575FF] font-bold">
            {(
              data.reduce((acc, curr) => acc + +curr.temperature, 0) /
              data.length
            ).toFixed(2)}
          </p>
          {/* <CustomProgressBar color="#6BB2D7FF" progress={+(data.reduce((acc, curr) => acc + +curr.temperature, 0) / data.length).toFixed(2)} /> */}
        </div>
        <div className="flex-auto shadow-[0px_4px_10px_3px_rgba(0,0,0,0.1)] h-[8rem] flex items-center flex-col justify-between text-center bg-[#fff] rounded-lg py-6">
          <h3 className="text-[#a8a8a8] uppercase text-base font-semibold">
            Suv sathi <span className="lowercase"> (sm)</span>
          </h3>
          <p className="text-3xl text-[#757575FF] font-bold">
            {(
              data.reduce((acc, curr) => acc + +curr.waterLevel, 0) /
              data.length
            ).toFixed(2)}
          </p>
          {/* <CustomProgressBar color="#00FF00FF" progress={90.3} /> */}
        </div>
        <div className="flex-auto h-[8rem] flex items-center flex-col justify-between text-center bg-[#fff] rounded-lg shadow-[0px_4px_10px_3px_rgba(0,0,0,0.1)] py-6">
          <h3 className="text-[#a8a8a8] uppercase text-base font-semibold">
            Sho'rlanganligi <span className="lowercase"> (ppm)</span>
          </h3>
          <p className="text-3xl text-[#757575FF] font-bold">
            {(
              data.reduce((acc, curr) => acc + +curr.tds, 0) / data.length
            ).toFixed(2)}
          </p>
          {/* <CustomProgressBar color="#82A6F6FF" progress={45.5} /> */}
        </div>
      </div>
      <TemperatureChart data={tempData || []} />
      <BarChart data={barData || []} />
      <MultiLineChart data={barData || []} />
      <TemperatureVsTDSChart data={chartData || []} />
      <div className="h-[calc(100vh-5rem)] flex gap-3 mb-12">
        <div className="scrollbar-custom sm:w-[65%] w-full h-full overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 border rounded-[15px] shadow-lg">
          <Table className="rounded-b-[15px] border-collapse min-w-max border-spacing-0 overflow-hidden shadow-sm p-4">
            <TableHeader className="bg-bgDark">
              <TableRow className="shadow-2xl">
                {columns.map((column) => (
                  <TableHead className="text-start py-4 px-2" key={column.key}>
                    {column.title}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((item, index) => (
                <TableRow
                  className="bg-[#fff] hover:bg-[#F5F6FA]"
                  key={item._id}
                >
                  <TableCell className="py-4 font-medium border-b border-[#E4E6EE] pl-6">
                    {index + 1}
                  </TableCell>
                  <TableCell className="border-b border-[#E4E6EE]">
                    {dataFormat(item.createdAt)}
                  </TableCell>
                  <TableCell className="border-b border-[#E4E6EE]">
                    {item.waterLevel}
                  </TableCell>
                  <TableCell className="border-b border-[#E4E6EE]">
                    {item.temperature}
                  </TableCell>
                  <TableCell className="border-b border-[#E4E6EE]">
                    {item.tds}
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
                <p className="">Yunusobod tumani, Amir Temur ko'chasi</p>
              </div>
              <div className="flex justify-between text-[#5c5c5c] py-1">
                <p>Telefon:</p>
                <p className="">+998(97) 636-79-75</p>
              </div>
            </div>
            <div className="px-3 border-b-[1px] border-[#b3b3b3]">
              <div className="flex justify-between text-[#5c5c5c] py-1">
                <p>Ma'lumotlar yangilanishi:</p>
                <p className="">Holatga qarab</p>
              </div>
            </div>
            <div className="px-3">
              <div className="py-1 flex justify-between text-[#5c5c5c] gap-2">
                <p>Dastur nomi:</p>
                <p className="flex-1">
                  IoT asosida yer osti suv sathi va sifat ko‘rsatgichlarini
                  monitoring qilish
                </p>
              </div>
              <div className="py-1 flex justify-between text-[#5c5c5c]">
                <p>Dastur versiyasi:</p>
                <p className="">1.0.0</p>
              </div>
            </div>
          </div>
          <div
            className="flex-1 rounded-lg"
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
              Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari
              universiteti
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
              src="https://yandex.uz/map-widget/v1/org/181817256792/?ll=69.286834%2C41.340865&z=16"
              width={560}
              height={400}
              frameBorder={1}
              style={{ position: "relative" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
