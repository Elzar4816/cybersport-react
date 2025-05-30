import React from "react";
import TournamentHero from "./TournamentHero";
import TournamentsList from "./TournamentList";
import FeaturedTournament from "./FeaturedTournament";
import { MeteorAnimation } from "./MeteorAnimation";

const Tournament = () => {
  return (
    <div>
      {/* <div style={{ maxWidth: "100vw", overflowX: "hidden" }}>
        <TournamentHero />
      </div> */}
      <div style={{ position: "relative" }}>
        <MeteorAnimation />
        <FeaturedTournament />
      </div>
      <div>
        <TournamentsList />
      </div>
    </div>
  );
};

export default Tournament;
