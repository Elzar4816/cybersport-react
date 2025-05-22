import React from "react";
import UpcomingTournaments from "./UpcomingTournaments";
import NewsSection from "./NewsSection";
import SponsorsSection from "./SponsorSection";
import Hero from "./Hero";

const Home = () => {
  return (
    <div>
      <div>
        <Hero />
        <NewsSection />
        <UpcomingTournaments />
        <SponsorsSection />
      </div>
    </div>
  );
};

export default Home;
