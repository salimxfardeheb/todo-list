import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

import NavBar from "./components/navBar";
import Footer from "./components/footer";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Todo List",
  description: "more organized",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ibmPlexMono.className} antialiased min-h-screen bg-linear-to-b from-90% from-white to-blue-400`}>
        <NavBar/>
        <main>{children}</main>
        <Footer/>
        </body>
    </html>
  );
}
