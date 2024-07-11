"use client"
import React from 'react';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import IconButton from '@mui/material/IconButton';
import CardActionArea from '@mui/material/CardActionArea';
import { styled } from '@mui/material/styles';

interface CardData {
    text: string;
    value: number;
  }

const StyledCard = styled(Card)(({ theme }) => ({
    borderRadius: '16px',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
}));

const CardHeader = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}));

const CardIcon = styled(Box)(({ theme }) => ({
    backgroundColor: '#F8F2EE',
    borderRadius: '50%',
    padding: theme.spacing(1),
}));

const CardFooter = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(1, 2),
    borderTop: `1px solid ${theme.palette.divider}`,
}));

const CardButton = styled(Button)(({ theme }) => ({
    color: theme.palette.success.main,
    textTransform: 'none',
}));

export default function StatsCard({
    text,
    value
}: CardData){
    return (
        <StyledCard>
            <CardContent>
                <CardHeader>
                    <Typography variant="subtitle2" color="textSecondary">
                        {text}
                    </Typography>
                    <CardIcon>
                        {/* Replace with your actual icon */}
                        <TrendingDownIcon color="primary" />
                    </CardIcon>
                </CardHeader>
                <Typography variant="h4" color="textPrimary" gutterBottom>
                    {value.toLocaleString()} Ksh
                </Typography>
                <Box display="flex" alignItems="center" color="error.main" mb={2}>
                    <TrendingDownIcon fontSize="small" />
                    <Typography variant="subtitle2" color="textSecondary" ml={0.5}>
                        10% Compared to last month
                    </Typography>
                </Box>
            </CardContent>
            <CardFooter>
                <CardButton>
                    View Snap Report
                </CardButton>
                <IconButton size="small" color="primary">
                    <ArrowForwardIosIcon />
                </IconButton>
            </CardFooter>
        </StyledCard>
    );
};



// 'use client'
// import React from 'react'
// import { Card, Box, CardContent, Typography, useMediaQuery, useTheme } from '@mui/material';

interface CardData {
    text: string;
    value: number;
  }


//   export default function SimpleCard({
//     text,
//     value
//   }: CardData){

//     const theme = useTheme();
//     const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
//     const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
//     const isExtraLargeScreen = useMediaQuery(theme.breakpoints.up('xl'));

//     return(
//         <Card sx={{ 
//             borderRadius: 2, 
//             p: 2, 
//             minWidth: 150, 
//             height: isSmallScreen ? '100%' : isExtraLargeScreen ? 235 : isLargeScreen ? 150 : 137, // Adjust height based on screen size
//             minHeight: 137,
//             mx: isSmallScreen ? 1 : 'auto'
//             }}>
//             <CardContent sx={{padding: 1}}>
//                 <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//                     <Typography variant="subtitle1" sx={{ fontSize: isSmallScreen ? 12 : 16}}>
//                             {text}
//                     </Typography>
//                 </Box>
//                 <Box>
//                     <Typography variant="subtitle1" sx={{ mb: 2, fontSize: isSmallScreen ? 14 : 18}}>
//                         {text}
//                     </Typography>
//                 </Box>
//                 <Typography variant="body2" color="text.secondary" sx={{fontSize: isSmallScreen ? 10 : 14}}>
//                     {value.toLocaleString()} Ksh
//                 </Typography>
//             </CardContent>
//         </Card>
//     )
//   }
// 