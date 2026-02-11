import "./globals.css";
import { Outfit, Roboto_Mono } from "next/font/google";
import { type ReactNode, Suspense } from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${robotoMono.variable} font-sans antialiased h-screen flex flex-col bg-gray-50`}
        suppressHydrationWarning
      >
        <Suspense fallback={null}>
          <Header />
          {children}
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
