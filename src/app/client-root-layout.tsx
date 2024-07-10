"use client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "@safaricom/sui";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function ClientRootLayout({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className={inter.className}>{children}</div>
        </ThemeProvider>
    );
}
