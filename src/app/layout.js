import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/Footer";
import { useContext } from "react";
import { TimelineProvider } from "@/context/TimelineContext";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "keen keeper",
  description: "Never lost touch with your friends",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gray-100">
       <TimelineProvider>
         <Navbar/>
       <main className="flex-1"> {children}</main>
        <Footer/>
        <ToastContainer/>
         </TimelineProvider>
        </body>
    </html>
  );
}

