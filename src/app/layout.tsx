import type { Metadata } from "next";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import "./globals.css";

// export const metadata: Metadata = {
//   title: "Oceloptic Networks Pvt Ltd",
//   description: "We are a creative strategy firm dedicated to elevating businesses through innovative design, strategic branding, and cutting-edge digital solutions that drive meaningful growth and impact.",
// };

export const metadata: Metadata = {
  title: {
    default: "Oceloptic Network - Elevate Your Digital Potential",
    template: "%s | Oceloptic Network",
  },
  description: "Oceloptic Network provides cutting-edge marketing solutions to help your brand grow and succeed.",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg", // Replace with your actual favicon paths
  }
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