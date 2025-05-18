import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

interface DataPoint {
  time: string; // ISO format: "2025-05-18T08:00:00"
  temperature: number;
  tds: number;
  waterLevel: number;
}

interface Props {
  data: DataPoint[];
}

const MultiLineChart: React.FC<Props> = ({ data }) => {
  const formattedTemperature = data.map((point) => [
    new Date(point.time).getTime(),
    point.temperature,
  ]);

  const formattedTDS = data.map((point) => [
    new Date(point.time).getTime(),
    point.tds,
  ]);

  const formattedWaterLevel = data.map((point) => [
    new Date(point.time).getTime(),
    point.waterLevel,
  ]);

  const options: Highcharts.Options = {
    chart: {
      type: "spline",
    },
    title: {
      text: "Harorat, TDS va Suv sathining vaqt bo‘yicha o‘zgarishi",
    },
    xAxis: {
      type: "datetime",
      title: {
        text: "Vaqt",
      },
    },
    yAxis: {
      title: {
        text: "Qiymatlar",
      },
    },
    tooltip: {
      shared: true,
      xDateFormat: "%Y-%m-%d %H:%M",
    },
    series: [
      {
        name: "Harorat (°C)",
        type: "spline",
        data: formattedTemperature,
        color: "#FF5733",
      },
      {
        name: "TDS (ppm)",
        type: "spline",
        data: formattedTDS,
        color: "#33C1FF",
      },
      {
        name: "Suv sathi (m)",
        type: "spline",
        data: formattedWaterLevel,
        color: "#75FF33",
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default MultiLineChart;
