import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "./components/providers/SmoothScrollProvider";
import { useEffect } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata = {
  title: "DreamPitch — American Dream Mall",
  description:
    "Luxury interactive sales deck for American Dream Mall.",
};

useEffect(() => {
  const handleContextMenu = (e: MouseEvent) => {
    e.preventDefault();
  };

  document.addEventListener("contextmenu", handleContextMenu);

  return () => {
    document.removeEventListener("contextmenu", handleContextMenu);
  };
}, []);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${montserrat.variable} antialiased`}
      >
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}