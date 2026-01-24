import React from "react";
import Hero from "./Hero";
import HeroBottom from "./HeroBottom";
import FilterParts from "./FilterParts";
import FeaturedProduct from "./FeaturedProduct";
import FeaturedProductBottom from "./FeaturedProductBottom";

const Home = () => {
  return (
    <div>
      <Hero />
      <HeroBottom />
      <FilterParts />
      <FeaturedProduct />
      <FeaturedProductBottom />
    </div>
  );
};

export default Home;
