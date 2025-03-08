import BlogsSection from "@/sections/Blog/BlogsSection";
import HeroSection from "@/sections/Shared/HeroSection";
import React from "react";

const Blog = () => {
  return (
    <div>
      <HeroSection page_title="Blog" />
      <BlogsSection />
    </div>
  );
};

export default Blog;
