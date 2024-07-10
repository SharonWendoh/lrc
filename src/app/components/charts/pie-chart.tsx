"use client"
import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { Card, CardContent, useMediaQuery, useTheme } from '@mui/material';

const data = [
  { id: 0, value: 10, label: 'series A' },
  { id: 1, value: 15, label: 'series B' },
  { id: 2, value: 20, label: 'series C' },
];

export default function PieActiveArc() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
    const isExtraLargeScreen = useMediaQuery(theme.breakpoints.up('xl'));
  return (
    <Card>
        <CardContent>
            <PieChart
            series={[
                {
                data,
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
