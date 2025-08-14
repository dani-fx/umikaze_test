import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Umikaze BTC - Avtentična japonska restavracija v Sloveniji",
  description: "Doživite avtentično japonsko kuhinjo v Umikaze BTC. Rezervirajte mizo za okusne sushi, ramen in tradicionalne jedi v Ljubljani, Slovenija.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sl" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
