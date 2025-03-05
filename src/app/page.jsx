import AboutSection from "@/sections/AboutSection";
import CounterSection from "@/sections/CounterSection";
import FeaturedVehiclesSection from "@/sections/FeaturedVehiclesSection";
import HeroSection from "@/sections/HeroSection";
import ServicesSection from "@/sections/ServicesSection";
import TestimonialSection from "@/sections/TestimonialSection";
import TripSection from "@/sections/TripSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <TripSection />
      <FeaturedVehiclesSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialSection />
      <CounterSection />
    </div>
  );
}
