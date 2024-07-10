'use client'
import React from 'react'
import { Card, Box, CardContent, Typography, useMediaQuery, useTheme } from '@mui/material';

interface CardData {
    text: string;
    value: number;
  }

  export default function SimpleCard({
    text,
    value
  }: CardData){

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
    const isExtraLargeScreen = useMediaQuery(theme.breakpoints.up('xl'));

    return(
        <Card sx={{ 
            borderRadius: 2, 
            p: 2, 
            minWidth: 150, 
            height: isSmallScreen ? '100%' : isExtraLargeScreen ? 235 : isLargeScreen ? 150 : 137, // Adjust height based on screen size
            minHeight: 137,
            mx: isSmallScreen ? 1 : 'auto'
            }}>
            <CardContent>
                <Typography variant="subtitle1" sx={{ mb: 2, fontSize: isSmallScreen ? 14 : 18}}>
                        {text}
                </Typography>
                <Typography variant="subtitle1" sx={{ mb: 2, fontSize: isSmallScreen ? 14 : 18}}>
                    {text}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{fontSize: isSmallScreen ? 10 : 14}}>
                    {value.toLocaleString()} Ksh
                </Typography>
            </CardContent>
        </Card>
    )
  }
