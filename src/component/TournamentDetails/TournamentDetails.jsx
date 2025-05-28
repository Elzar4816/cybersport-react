import React from "react";
import { useLocation } from "react-router-dom";
import {
  Box,
  Typography,
  Chip,
  Button,
  Divider,
  useMediaQuery,
} from "@mui/material";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import {
  SingleEliminationBracket,
  DoubleEliminationBracket,
  Match,
} from "@g-loot/react-tournament-brackets";
import TournamentCard from "./HeroTournam";

const TournamentDetails = () => {
  const { state } = useLocation();
  const tournament = state?.tournament;
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box
      sx={{
        px: isMobile ? 2 : 6,
        py: 4,
        maxWidth: 1200,
        mx: "auto",
        backgroundColor: "#121212",
        color: "white",
        paddingTop: "100px",
      }}
    >
      <TournamentCard />

      <Divider sx={{ my: 3, borderColor: "#333" }} />
    </Box>
  );
};

export default TournamentDetails;
