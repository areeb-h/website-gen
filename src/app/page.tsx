"use client"

import CTASection from "@/components/sections/CTASection";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import WhatWeOffer from "@/components/sections/WhatWeOffer";

export default function Home() {
  return (
    <div className="animate-fade-in">
      <HeroSection />
      <AboutSection />
      <WhatWeOffer />
      <CTASection />
    </div>
  );
}

