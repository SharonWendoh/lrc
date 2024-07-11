"use client"
import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { Card, CardContent, useMediaQuery, useTheme } from '@mui/material';
import { useState } from 'react';
import useResizeObserver from '../../resize';

// Define the mock dataset
const mockDataset = [
  { system: 'CBS', normal: 300, accelerated: 200 },
  { system: 'CSDB', normal: 400, accelerated: 200 },
  { system: 'M-PESA', normal: 500, accelerated: 300 },
  { system: 'CRM', normal: 400, accelerated: 300 },
  { system: 'SDP', normal: 600, accelerated: 300 },
  { system: 'LIPA MDOGO MDOGO', normal: 500, accelerated: 350 },
];

const chartSetting = {
  xAxis: [
    {
      label: 'Number of lines',
    },
  ],
  // width: 500,
  // height: 400,
};

const valueFormatter = (value: number | null) => `${value}`;

export default function HorizontalBars() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isExtraLargeScreen = useMediaQuery(theme.breakpoints.up('xl'));

  const [dimensions, setDimensions] = useState({ width: 600, height: 350 });

  const [setRef] = useResizeObserver((entry) => {
    setDimensions({
      width: entry.contentRect.width,
      height: entry.contentRect.height,
    });
  });
  return (
    <Card 
    ref={setRef}
    sx={{ 
      borderRadius: 2, 
      p: 2, 
      minWidth: 150, 
      height: isSmallScreen ? '100%' : isExtraLargeScreen ? 450 : isLargeScreen ? 420 : 400, // Adjust height based on screen size
      minHeight: 400,
      mx: isSmallScreen ? 1 : 'auto'
      }} >
      <CardContent>
      <BarChart
        dataset={mockDataset}
        yAxis={[
          {
            scaleType: 'band',
            dataKey: 'system',
            label: 'Systems',
          },
        ]}
        xAxis={[
          {
            label: 'Number of lines',
          },
        ]}
        series={[
          {
            dataKey: 'normal',
            stack: 'lines',
            label: 'Normal lines',
            color: '#175c33'
          },
          {
            dataKey: 'accelerated',
            stack: 'lines',
            label: 'Accelerated lines',
            color: '#63bb71'
          },
        ]}
        // width={600}
        // height={350}
        // layout="vertical"
        width={dimensions.width}
          height={dimensions.height}
          layout="horizontal"
      />
      </CardContent>
    </Card>
  );
}
