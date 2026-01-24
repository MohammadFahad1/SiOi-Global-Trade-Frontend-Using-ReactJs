import React from "react";
import Hero from "./Hero";
import HeroBottom from "./HeroBottom";
import FilterParts from "./FilterParts";
import FeaturedProduct from "./FeaturedProduct";
import FeaturedProductBottom from "./FeaturedProductBottom";
import BannerSection from "./BannerSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <HeroBottom />
      <FilterParts />
      <FeaturedProduct />
      <FeaturedProductBottom />
      <BannerSection />
    </div>
  );
};

export default Home;
