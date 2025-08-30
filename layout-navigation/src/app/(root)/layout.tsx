import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Link from "next/link";
import Navbar from "../components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // title: "My Next JS app",
  title: {
    default: "bike share",
    template: "%s | Bike sharing apps",
    // template:"Bike sharing apps | %s",
    absolute: "",
  },
  description: "Enjoy Next JS app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="max-w-7xl mx-auto min-h-screen">{children}</main>
        <footer className="max-w-7xl mx-auto">Footer</footer>
      </body>
    </html>
  );
}
