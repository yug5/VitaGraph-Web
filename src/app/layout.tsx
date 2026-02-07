import type { Metadata } from "next";
import { Inter } from "next/font/google";
// @ts-ignore
import "./globals.css";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
import NavBar from "@/components/navBar";
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
      <body className={`${inter.variable} antialiased`}>
        <div className="flex min-h-screen bg-[#0b0f1a]">
          <NavBar />
          <main className="flex-1 ">
            <div className="max-w-[1470px] h-full ">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
