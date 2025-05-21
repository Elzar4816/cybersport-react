import React from "react";
import UpcomingTournaments from "./UpcomingTournaments";
import NewsSection from "./NewsSection";

const Home = () => {
  return (
    <div>
      <div>
        <NewsSection />
        <UpcomingTournaments />
      </div>
    </div>
  );
};

export default Home;
