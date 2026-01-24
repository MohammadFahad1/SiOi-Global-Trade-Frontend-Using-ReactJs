import React from "react";
import Hero from "./Hero";
import HeroBottom from "./HeroBottom";
import FilterParts from "./FilterParts";
import FeaturedProduct from "./FeaturedProduct";

const Home = () => {
  return (
    <div>
      <Hero />
      <HeroBottom />
      <FilterParts />
      <FeaturedProduct />
    </div>
  );
};

export default Home;
