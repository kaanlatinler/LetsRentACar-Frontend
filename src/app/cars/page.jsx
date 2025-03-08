import CarsSection from "@/sections/Cars/CarsSection";
import HeroSection from "@/sections/Shared/HeroSection";
import React from "react";

const Cars = () => {
  return (
    <div>
      <HeroSection page_title="Cars" />
      <CarsSection />
    </div>
  );
};

export default Cars;
