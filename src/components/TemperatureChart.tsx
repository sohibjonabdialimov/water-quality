// TemperatureChart.tsx
import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

interface TemperatureDataPoint {
  time: string; 
  temperature: number;
}

interface Props {
  data: TemperatureDataPoint[];
}

const TemperatureChart: React.FC<Props> = ({ data }) => {
  const formattedData = data.map(point => [
    new Date(point.time).getTime(),
    point.temperature,
  ]);

  const options: Highcharts.Options = {
    chart: {
      type: 'spline', // or 'line'
    },
    title: {
      text: 'Haroratning vaqt o‘tishi bilan o‘zgarishi',
    },
    xAxis: {
      type: 'datetime',
      title: {
        text: 'Vaqt',
      },
    },
    yAxis: {
      title: {
        text: 'Harorat (°C)',
      },
    },
    tooltip: {
      xDateFormat: '%Y-%m-%d %H:%M',
      shared: true,
      valueSuffix: ' °C',
    },
    series: [
      {
        name: 'Harorat',
        type: 'spline',
        data: formattedData,
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default TemperatureChart;
