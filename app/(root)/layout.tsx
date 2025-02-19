import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Footer, Nav } from "@/components/navigation";
import { Toaster } from "@/components/ui/toaster"
import  ReactQueryProvider  from "@/components/providers/queryclientprovider";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Regalia Marine",
  description: "Africas's finest marine ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-gray-50 antialiased text-sm max-sm:text-sm font-[family-name:var(--font-geist-sans)] font-light text-slate-500`}
      >
        <Nav/>
        <ReactQueryProvider>
        {children}
        </ReactQueryProvider>
        <Toaster />
        <Footer/>
      </body>
    </html>
  );
}
