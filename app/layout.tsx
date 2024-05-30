import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import NavBar from "@/components/layout/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StaySavvy",
  description: "Book a hotel of your choice",
  icons: { icon: "/logo.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className="={inter.className}">
          <main className="flex flex-col min-h-screen bg-secondary">
            <NavBar />
            <section className="flex-grow">{children}</section>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
