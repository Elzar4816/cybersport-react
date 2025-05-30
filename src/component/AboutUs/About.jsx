import { Box, Button, Typography } from "@mui/material";
import React from "react";
import AboutFederation from "./Fedartion";
import MissionAndGoals from "./MissionAndGoals";
import FederationStructure from "./FederationStructure";
import Testimonial from "./Testimonial";

const About = () => {
  return (
    <div>
      <AboutFederation />
      <MissionAndGoals />

      <Testimonial />
    </div>
  );
};

export default About;
