import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";
import { TooltipProvider } from "@/components/ui/tooltip";

import "./globals.css";
import { Wrapper } from "@/components/shared/wrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "HM Store",
    template: "%s | HM Store",
  },
  description: "Nền tảng cửa hàng HM Store.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="vi"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <TooltipProvider>
          <Header />
          <main className="flex flex-1 flex-col">{children}</main>
          <main className="flex flex-1 flex-col">{children}</main>
          <main className="flex flex-1 flex-col">{children}</main>
          <main className="flex flex-1 flex-col">{children}</main>
          <main className="flex flex-1 flex-col">{children}</main>
          <main className="flex flex-1 flex-col">{children}</main>
          <main className="flex flex-1 flex-col">{children}</main>
          <main className="flex flex-1 flex-col">{children}</main>
          <main className="flex flex-1 flex-col">{children}</main>
          <main className="flex flex-1 flex-col">{children}</main>
          <main className="flex flex-1 flex-col">{children}</main>
          <main className="flex flex-1 flex-col">{children}</main>
          <main className="flex flex-1 flex-col">{children}</main>
          <main className="flex flex-1 flex-col">{children}</main>
          <main className="flex flex-1 flex-col">{children}</main>
          <main className="flex flex-1 flex-col">{children}</main>
          <main className="flex flex-1 flex-col">{children}</main>
          <main className="flex flex-1 flex-col">{children}</main>
          <main className="flex flex-1 flex-col">{children}</main>
          <main className="flex flex-1 flex-col">{children}</main>
          <main className="flex flex-1 flex-col">{children}</main>
          <main className="flex flex-1 flex-col">{children}</main>
          <main className="flex flex-1 flex-col">{children}</main>
          <main className="flex flex-1 flex-col">{children}</main>
          <main className="flex flex-1 flex-col">{children}</main>
          <main className="flex flex-1 flex-col">{children}</main>
          <main className="flex flex-1 flex-col">{children}</main>
          <main className="flex flex-1 flex-col">{children}</main>
          <main className="flex flex-1 flex-col">{children}</main>
          <main className="flex flex-1 flex-col">{children}</main>
          <main className="flex flex-1 flex-col">{children}</main>
          <main className="flex flex-1 flex-col">{children}</main>
          <main className="flex flex-1 flex-col">{children}</main>
          <main className="flex flex-1 flex-col">{children}</main>
          <main className="flex flex-1 flex-col">{children}</main>
          <main className="flex flex-1 flex-col">{children}</main>
          <main className="flex flex-1 flex-col">{children}</main>
          <main className="flex flex-1 flex-col">{children}</main>
          <main className="flex flex-1 flex-col">{children}</main>
          <main className="flex flex-1 flex-col">{children}</main>
          <Wrapper>
            <Footer />
          </Wrapper>
        </TooltipProvider>
      </body>
    </html>
  );
}
