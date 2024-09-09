import React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { COLORS, transformData } from './Charts';

function SimpleBarChart({ data }) {
  const hasCrops = data.length > 0 && data[0].crops && data[0].crops.length > 0;

  const renderBars = () => {
    if (data[0]?.crops) {
      const transformedData = transformData(data);

      const cropNames = transformedData.reduce((acc, item) => {
        return [...acc, ...Object.keys(item).filter((key) => key !== 'name')];
      }, []);

      const uniqueCropNames = [...new Set(cropNames)];

      return uniqueCropNames.map((cropName, idx) => (
        <Bar
          key={cropName}
          dataKey={cropName}
          stackId="a"
          fill={COLORS[idx % COLORS.length]}
        />
      ));
    } else {
      return <Bar dataKey="value" fill="#a2ca71" />;
    }
  };

  return (
    <ResponsiveContainer
      width="100%"
      height={450}
      maxWidth={500}
      maxHeight={600}
    >
      <BarChart
        data={hasCrops ? transformData(data) : data}
        margin={{
          top: 20,
          right: 20,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        {renderBars()}
      </BarChart>
    </ResponsiveContainer>
  );
}

export default SimpleBarChart;
