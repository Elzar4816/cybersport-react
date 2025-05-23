import React from "react";
import TournamentHero from "./TournamentHero";
import TournamentsList from "./TournamentList";

const Tournament = () => {
  return (
    <div>
      <div style={{ maxWidth: "100vw", overflowX: "hidden" }}>
        <TournamentHero />
      </div>
      <div>
        <TournamentsList />
      </div>
    </div>
  );
};

export default Tournament;
