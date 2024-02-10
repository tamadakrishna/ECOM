import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {GlobalProvider} from "./GlobalProvider";
import Header from "@/components/layouts/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ECOM",
  description: "ECOMMERCE",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body>
        <GlobalProvider>
          <Header/>
          {children}
        </GlobalProvider>
      </body>
    </html>
  );
}
