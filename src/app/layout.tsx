import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from './provider'
import AppBar from "@/components/AppBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IIT KGP Millets Portal",
  description: "Image Based Quality Assesment of Millets",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en'>
      <body>
      <AppBar />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}