import HeroSection from "@/sections/Shared/HeroSection";
import AboutSection from "@/sections/Shared/AboutSection";
import CounterSection from "@/sections/Shared/CounterSection";
import TestimonialSection from "@/sections/Shared/TestimonialSection";
import React from "react";

export default function About() {
  return (
    <div>
      <HeroSection page_title="About Us" />
      <AboutSection />
      <TestimonialSection />
      <CounterSection />
    </div>
  );
}
