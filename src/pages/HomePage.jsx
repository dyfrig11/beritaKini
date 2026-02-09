import React from "react";
import Headline from "../components/Headline";
import PopularNews from "../components/PopularNews";
import Recommendation from "../components/Recommendation";
import HeroSection from "../components/HeroSection";

const HomePage = () => {
  return (
    <>
      <Headline />
      <PopularNews />
      <Recommendation />
      <HeroSection />
    </>
  );
};
export default HomePage;
