import React, { useState } from "react";
import { Tabs, Tab, Typography, Divider, Box, Stack } from "@mui/material";
import TournamentCard from "./TournamentCard";
import bgImage from "../../assets/Dark.png";
import AllIcon from "@mui/icons-material/DashboardCustomize";
import ValorantIcon from "../../assets/icons-valorant.png";
import FifaIcon from "@mui/icons-material/SportsSoccer";
import MLBBIcon from "../../assets/icons-mobile-legends.png";

const tournamentsData = [
  {
    id: 1,
    name: "KCF League Stage 1 2025",
    date: "26.03.25 - 19.05.25",
    status: "анонс",
    prize: "-",
    trailer: null,
    description: "Этап VCT в регионе EMEA.",
    teamsCount: 16,
    platform: "PC",
    game: "valorant",
    gameLogo: "/logos/valorant.png",
  },
  {
    id: 2,
    name: "KCF LEAGUE  Stage 2 2025",
    date: "21.03.25 - 05.05.25",
    status: "регистрация",
    prize: "100000 сом",
    trailer: null,
    description: "Этап VCT в регионе Америки.",
    teamsCount: 12,
    platform: "PC",
    game: "valorant",
    gameLogo: "/logos/valorant.png",
  },
  {
    id: 3,
    name: "KCF MLBB Season 1 2025",
    date: "15.02.25 - 22.02.25",
    status: "регистрация",
    prize: "1000 сом",
    trailer: null,
    description: "Турнир среди студентов.",
    teamsCount: 8,
    platform: "PC",
    game: "mlbb",
    gameLogo: "/logos/valorant.png",
  },
  {
    id: 4,
    name: "Clash Royale Final 2 2025",
    date: "01.03.25 - 10.03.25",
    status: "регистрация",
    prize: "3000 сом ",
    trailer: null,
    description: "Мультиплатформенный турнир.",
    teamsCount: 10,
    platform: "PS5",
    game: "fifa",
    gameLogo: "/logos/fifa.png",
  },
];

const TournamentsList = () => {
  const [tab, setTab] = useState(0);
  const [gameFilter, setGameFilter] = useState("all");

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  const handleGameFilter = (game) => {
    setGameFilter(game);
  };

  const filteredTournaments = tournamentsData.filter((t) => {
    const statusFilter =
      tab === 0
        ? ["анонс", "регистрация", "идёт"].includes(t.status)
        : t.status === "завершён";
    const gameFilterMatch = gameFilter === "all" || t.game === gameFilter;
    return statusFilter && gameFilterMatch;
  });

  return (
    <Box
      sx={{
        p: 4,
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#121212",
        // minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        color="white"
        sx={{ mb: 3, textAlign: "center" }}
      >
        Турниры по киберспорту
      </Typography>

      <Stack
        direction="row"
        spacing={2}
        sx={{ mb: 2, flexWrap: "wrap", justifyContent: "center" }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            color: gameFilter === "all" ? "#00AEEF" : "white",
          }}
          onClick={() => handleGameFilter("all")}
        >
          <AllIcon sx={{ mr: 0.5 }} />
          <Typography>Все</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            color: gameFilter === "valorant" ? "#00AEEF" : "white",
          }}
          onClick={() => handleGameFilter("valorant")}
        >
          <img src={ValorantIcon} alt="" style={{ mr: 0.5 }} width={25} />
          <Typography>Valorant</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            color: gameFilter === "fifa" ? "#00AEEF" : "white",
          }}
          onClick={() => handleGameFilter("fifa")}
        >
          <FifaIcon sx={{ mr: 0.5 }} />
          <Typography>FIFA</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            color: gameFilter === "fifa" ? "#00AEEF" : "white",
          }}
          onClick={() => handleGameFilter("fifa")}
        >
          <img src={MLBBIcon} alt="" style={{ mr: 0.5 }} width={25} />
          <Typography>MLBB</Typography>
        </Box>
        {/* Добавить другие игры по необходимости */}
      </Stack>

      <Tabs
        value={tab}
        onChange={handleTabChange}
        textColor="inherit"
        TabIndicatorProps={{ style: { backgroundColor: "#00AEEF" } }}
      >
        <Tab label="Ближайшие" sx={{ color: "white" }} />
        <Tab label="Прошедшие" sx={{ color: "white" }} />
      </Tabs>

      <Divider sx={{ borderColor: "#333", my: 2 }} />

      {filteredTournaments.map((t) => (
        <TournamentCard key={t.id} tournament={t} />
      ))}
    </Box>
  );
};

export default TournamentsList;
