import type { Metadata } from "next";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import "./globals.css";

export const metadata: Metadata = {
  title: "Hulhumalé Academic Centre",
  description: "The first private educational institution in Hulhumalé, providing quality education since 2007.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-grow /pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}