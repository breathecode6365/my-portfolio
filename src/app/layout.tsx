import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ProfileCard from "../components/ProfileCard";
import SideBar from "@/components/SideBar";
import { Suspense } from "react";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Punith Dandluri",
  description: "Punith Dandluri's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="icon" type="image/svg+xml" href="/punith.svg" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Poor+Story&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#F0F0F6]">
        <SideBar />
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}
