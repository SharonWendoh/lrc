"use client"
import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { Card, CardContent, useMediaQuery, useTheme } from '@mui/material';

const data = [
  { id: 0, value: 10, label: 'Pooled', color: '#175c33' },
  { id: 1, value: 15, label: 'Queued', color: '#cbeecd' },
  { id: 2, value: 20, label: 'Completed', color: '#63bb71' },
  { id: 3, value: 10, label: 'Success', color: '#2c9a48' },
  { id: 4, value: 15, label: 'Retried', color: '#258b43' },
  { id: 5, value: 20, label: 'Failed', color: '#1f6935' },
];

export default function PieActiveArc() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
    const isExtraLargeScreen = useMediaQuery(theme.breakpoints.up('xl'));
  return (
    <Card sx={{ 
        borderRadius: 2, 
        p: 2, 
        minWidth: 150, 
        height: isSmallScreen ? '100%' : isExtraLargeScreen ? 450 : isLargeScreen ? 420 : 400, // Adjust height based on screen size
        minHeight: 400,
        mx: isSmallScreen ? 1 : 'auto'
        }} >
        <CardContent>
            <PieChart
            series={[
                {
                  data: data.map(item => ({
                    ...item,
                    color: item.color, // Use the color specified in data
                })),
                color: '#175c33',
                highlightScope: { faded: 'global', highlighted: 'item' },
                faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                },
            ]}
            height={300}
            />
        </CardContent>
    </Card>
  );
}
