import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

interface DataPoint {
  time: string; // ISO formatda vaqt: "2025-05-18T08:00:00"
  temperature: number;
  tds: number;
  waterLevel: number;
}

interface Props {
  data: DataPoint[];
}

const BarChart: React.FC<Props> = ({ data }) => {
  const categories = data.map(point =>
    new Date(point.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  );

  const options: Highcharts.Options = {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Harorat, TDS va Suv sathining taqqoslanishi',
    },
    xAxis: {
      categories,
      title: {
        text: 'Vaqt',
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Qiymatlar',
      },
    },
    tooltip: {
      shared: true,
    },
    plotOptions: {
      column: {
        grouping: true,
        shadow: false,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: 'Harorat (°C)',
        type: 'column',
        data: data.map(point => point.temperature),
        color: '#FF5733',
      },
      {
        name: 'TDS (ppm)',
        type: 'column',
        data: data.map(point => point.tds),
        color: '#33C1FF',
      },
      {
        name: 'Suv sathi (m)',
        type: 'column',
        data: data.map(point => point.waterLevel),
        color: '#75FF33',
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default BarChart;
