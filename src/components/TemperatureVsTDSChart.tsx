import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

interface DataPoint {
  temperature: number;
  tds: number;
}

interface Props {
  data: DataPoint[];
}

const TemperatureVsTDSChart: React.FC<Props> = ({ data }) => {
  const formattedData = data.map(point => [point.temperature, point.tds]);

  const options: Highcharts.Options = {
    chart: {
      type: 'scatter',
      zoomType: 'xy',
    },
    title: {
      text: 'Harorat va TDS o‘rtasidagi bogʻliqlik',
    },
    xAxis: {
      title: {
        text: 'Harorat (°C)',
      },
    },
    yAxis: {
      title: {
        text: "TDS (ppm)",
      },
    },
    tooltip: {
      pointFormat: 'Harorat: <b>{point.x}°C</b><br/>TDS: <b>{point.y} ppm</b>',
    },
    series: [
      {
        name: 'Nuqtalar',
        type: 'scatter',
        data: formattedData,
        color: '#FF33AA',
        marker: {
          radius: 5,
          symbol: 'circle',
        },
    }],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default TemperatureVsTDSChart;
