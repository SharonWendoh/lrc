"use client";
import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { Card, CardContent, useMediaQuery, useTheme } from '@mui/material';
import { useState } from 'react';
import useResizeObserver from '../../resize';

// Define the mock dataset
const mockDataset = [
  { month: 'January', normal: 200, accelerated: 300 },
  { month: 'February', normal: 250, accelerated: 350 },
  { month: 'March', normal: 300, accelerated: 400 },
  { month: 'April', normal: 280, accelerated: 320 },
  { month: 'May', normal: 350, accelerated: 450 },
  { month: 'June', normal: 320, accelerated: 380 },
  { month: 'July', normal: 400, accelerated: 450 },
  { month: 'August', normal: 420, accelerated: 500 },
  { month: 'September', normal: 380, accelerated: 450 },
  { month: 'October', normal: 300, accelerated: 350 },
  { month: 'November', normal: 270, accelerated: 300 },
  { month: 'December', normal: 250, accelerated: 280 },
];

export default function VerticalBars() {
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
        xAxis={[
          {
            scaleType: 'band',
            dataKey: 'month',
            label: 'Months',
          },
        ]}
        yAxis={[
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
          layout="vertical"
      />
      </CardContent>
    </Card>
    
  );
}
