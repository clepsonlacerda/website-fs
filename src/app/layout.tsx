import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./swiper-bundle.min.css";
import 'remixicon/fonts/remixicon.css'
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | FS',
    default: 'Fabrica de Soluções',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}

        <Script type="text/javascript" src="/scripts/swiper-bundle.min.js" strategy="beforeInteractive"></Script>
        <Script type="text/javascript" src="/scripts/scrollreveal.min.js"></Script>
        <Script type="text/javascript" src="/scripts/main.js"></Script>
      </body>
    </html>
  );
}
