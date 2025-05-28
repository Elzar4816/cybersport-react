import React from "react";
import TournamentHero from "./TournamentHero";
import TournamentsList from "./TournamentList";
import FeaturedTournament from "./FeaturedTournament";

const Tournament = () => {
  return (
    <div>
      <div style={{ maxWidth: "100vw", overflowX: "hidden" }}>
        <TournamentHero />
      </div>
      <div>
        <FeaturedTournament />
      </div>
      <div>
        <TournamentsList />
      </div>
    </div>
  );
};

export default Tournament;
