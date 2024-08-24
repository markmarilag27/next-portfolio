import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNavigation from "@/components/TopNavigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mark Marilag | Full Stack Developer",
  description: "Mark Marilag is an experience full stack developer who works in the web industry for the last 8 years.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopNavigation />
        {children}
      </body>
    </html>
  );
}
