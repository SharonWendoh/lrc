"use client"
import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { Card, CardContent, useMediaQuery, useTheme } from '@mui/material';
import { useState } from 'react';
import useResizeObserver from '../resize';

const months = [
  new Date(1990, 0, 1),
  new Date(1991, 0, 1),
  new Date(1992, 0, 1),
  new Date(1993, 0, 1),
  new Date(1994, 0, 1),
  new Date(1995, 0, 1),
  new Date(1996, 0, 1),
  new Date(1997, 0, 1),
  new Date(1998, 0, 1),
  new Date(1999, 0, 1),
  new Date(2000, 0, 1),
  new Date(2001, 0, 1),
  
];

const Successful = [
  28129, 28294.264, 28619.805, 28336.16, 28907.977, 29418.863, 29736.645, 30341.807,
  31323.078, 32284.611, 33409.68, 33920.098, 
];

const Failed = [
  26189, 25792.014, 25790.186, 26349.342, 27277.543, 27861.215, 28472.248, 29259.764,
  30077.385, 30932.537, 31946.037, 32660.441, 
];


export default function StackedAreas() {

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isExtraLargeScreen = useMediaQuery(theme.breakpoints.up('xl'));

  const [dimensions, setDimensions] = useState({ width: 600, height: 400 });

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
        <LineChart
        xAxis={[
          {
            id: 'Months',
            data: months,
            scaleType: 'time',
            valueFormatter: (date) => date.getFullYear().toString(),
          },
        ]}
        series={[
          {
            id: 'Failed',
            label: 'Failed',
            data: Failed,
            stack: 'total',
            area: true,
            showMark: false,
            color: '#fee0e0'
          },
          {
            id: 'Successful',
            label: 'Successful',
            data: Successful,
            stack: 'total',
            area: true,
            showMark: false,
            color: '#c8eecd'
          },
        ]}
        width={dimensions.width}
        height={dimensions.height}
        margin={{ left: 70 }}
      />
      </CardContent>
    </Card>
  );
}
