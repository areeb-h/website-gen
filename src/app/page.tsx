"use client"

import CTASection from "@/components/sections/CTASection";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import WhatWeOffer from "@/components/sections/WhatWeOffer";
import Head from 'next/head';

export default function Home() {
  return (
    <div className="animate-fade-in">
      <Head>
        <meta name="description" content="Your page description goes here." />
        <meta property="og:title" content="Home Page" />
        <meta property="og:description" content="Your page description goes here." />
        <meta property="og:image" content="https://example.com/og-image.jpg" />
      </Head>
      <HeroSection />
      <AboutSection />
      <WhatWeOffer />
      <CTASection />
    </div>
  );
}

