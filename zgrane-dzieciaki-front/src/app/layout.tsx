import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaChevronRight } from "react-icons/fa";
import { Main } from "@/components/Main";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zgrane Dzieciaki",
  description: "Gabinet integracji Sensorycznej w Warszawie - Zgrane Dzieciaki",
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
        <Main />
        <div className="pt-26">
          <Breadcrumbs
            homeElement={"Home"}
            separator={
              <span>
                <FaChevronRight className="mx-2 text-gray-400" size={12} />
              </span>
            }
            capitalizeLinks
          />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
