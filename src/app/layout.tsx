import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientRootLayout from "./client-root-layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Line Recycling Dashboard",
  description: "Line Recycling Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        
        <ClientRootLayout>{children}</ClientRootLayout>
        
        </body>
    </html>
  );
}
