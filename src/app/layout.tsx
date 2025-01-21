import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { theme } from "@/component/common/theme";

import { ThemeProvider as MUIThemeProvider } from "@mui/material";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ricobot",
  description: "Ricobot home accessment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;700;900&display=swap"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
      </body>
    </html>
  );
}
