'use client'
import React, { useState } from "react";
import SideNav from "@/app/components/app-bars/side-bar";
import TopAppBar from "@/app/components/app-bars/top-app-bar";
import { Box } from '@mui/material';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

    const handleDrawerOpen = () => {
        setSidebarOpen(true);
    };

    const handleDrawerClose = () => {
        setSidebarOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
        <TopAppBar />
        <SideNav open={isSidebarOpen} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose} />
        <Box 
                component="main"
                bgcolor={"#E8E8E8"}
                sx={{ 
                  flexGrow: 1,
                  p: 3,
                  mt: '64px', // margin-top to account for the app bar height
                  //ml: isSidebarOpen ? '0px' : '0px', // Adjust margin-left based on sidebar state
                  transition: 'margin-left 0.3s ease', // Smooth transition for margin-left
                  overflowY: 'auto', // Allow vertical scrolling if content overflows
                }}
            >
                {children}
        </Box>
    </Box>
    );
  }
