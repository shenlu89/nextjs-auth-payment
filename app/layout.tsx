import "./globals.css";
import { type ReactNode, Suspense } from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Cantarell, SanaSansAlt } from "@/lib/fonts";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${Cantarell.variable} ${SanaSansAlt.variable} font-sans antialiased h-screen flex flex-col bg-gray-50`}
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
