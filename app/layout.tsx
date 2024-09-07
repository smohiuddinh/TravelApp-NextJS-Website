import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Travel App",
  description: "My Travel App built using Tailwind / Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {/*  this will remove weird scrolls theat we have */}
      <main className="relative overflow-hidden " >{children}</main>   
        <Footer />
      </body>
    </html>
  );
}
