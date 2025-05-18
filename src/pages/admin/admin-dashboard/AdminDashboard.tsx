import { useEffect } from "react";
import { InfoProps } from "@/types";
import { useState } from "react";
import TemperatureChart from "@/components/TemperatureChart";
import BarChart from "@/components/BarChart";
import MultiLineChart from "@/components/MultiLineChart";
import TemperatureVsTDSChart from "@/components/TemperatureVsTDSChart";

interface DataPoint {
  time: string;
  temperature: number;
  tds: number;
  waterLevel: number;
}
const AdminDashboard = () => {
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
  return (
    <>
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
      <div className="mb-10">
      <TemperatureChart data={tempData || []} />
      </div>
      <div className="mb-10">
        <BarChart data={barData || []} />
      </div>
      <div className="mb-10">
        <MultiLineChart data={barData || []} />
      </div>
      <div className="mb-2">
        <TemperatureVsTDSChart data={chartData || []} />
      </div>
    </>
  );
};

export default AdminDashboard;
