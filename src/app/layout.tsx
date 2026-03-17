import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";

import "./globals.css";
import NavBar from "@/components/navBar";
import { ResizeObserverPatch } from "@/components/ResizeObserverPatch";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm",
});

export const metadata: Metadata = {
  title: "VitaGraph",
  description: "Habit, sleep & activity analytics dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dmSans.variable} antialiased`}>
        <ResizeObserverPatch />
        <div className="flex min-h-screen bg-[#0b0f1a]">
          <NavBar />
          <main className="flex-1 w-full min-w-0">
            <div className="max-w-[1470px] mx-auto h-full">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
