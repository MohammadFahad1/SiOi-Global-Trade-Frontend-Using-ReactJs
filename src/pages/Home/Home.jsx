import React from "react";
import Hero from "./Hero";
import HeroBottom from "./HeroBottom";
import FilterParts from "./FilterParts";
import FeaturedProduct from "./FeaturedProduct";
import FeaturedProductBottom from "./FeaturedProductBottom";
import BannerSection from "./BannerSection";
import BestSellingProducts from "./BestSellingProducts";
import CustomerReviews from "./CustomerReviews";
import LatestProducts from "./LatestProducts";

const Home = () => {
  return (
    <div>
      <Hero />
      <HeroBottom />
      <FilterParts />
      <FeaturedProduct />
      <FeaturedProductBottom />
      <BannerSection />
      <BestSellingProducts />
      <CustomerReviews />
      <LatestProducts />
    </div>
  );
};

export default Home;
