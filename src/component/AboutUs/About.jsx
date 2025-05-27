import { Box, Button, Typography } from "@mui/material";
import React from "react";
import AboutFederation from "./Fedartion";
import MissionAndGoals from "./MissionAndGoals";
import FederationStructure from "./FederationStructure";
import Testimonial from "./Testimonial";

const About = () => {
  return (
    <div>
      {/* <div
        style={{
          textAlign: "center",
          width: "100%",
          height: "80px",
          backgroundColor: "rgb(39 39 43)",
          fontSize: "18px",
          color: "#a3a3a3",
          fontWeight: "500",
          letterSpacing: "2px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "inset 7px 0 9px -7px rgba(0,0,0,.5)",
          marginTop: "95px",
        }}
      >
        Кыргызская Киберспортивная Федерация
      </div> */}
      {/* <Typography variant="h4" sx={{ color: "white" }}>
        Кыргызская Федерация Киберспорта
      </Typography> */}
      <AboutFederation />
      <MissionAndGoals />

      <Testimonial />
    </div>
  );
};

export default About;
