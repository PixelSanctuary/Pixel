import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import Font Awesome CSS
config.autoAddCss = false;

import NavigationBar from "@/app/components/NavigationBar"
import Footer from "@/app/components/Footer"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Pixel Sanctuary | Game Dev & Community",
  description: "A vibrant community for gamers and game developers.",
  keywords: "Pixel Sanctuary, game development, gaming community, indie games, game developers, gamers, gaming, video games, game design, game tools, game technology, online gaming, game tutorials, game resources, multiplayer games, gaming events",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col text-white min-h-screen`}
      >
        <NavigationBar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
