import AboutSection from "@/sections/Shared/AboutSection";
import CounterSection from "@/sections/Shared/CounterSection";
import FeaturedVehiclesSection from "@/sections/Home/FeaturedVehiclesSection";
import HeroSection from "@/sections/Home/HeroSection";
import ServicesSection from "@/sections/Shared/ServicesSection";
import TestimonialSection from "@/sections/Shared/TestimonialSection";
import TripSection from "@/sections/Home/TripSection";

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
