// src/components/TournamentsList.jsx
import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Typography,
  Divider,
  Box,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import TournamentCard from "./TournamentCard";

const tournamentsData = [
  {
    id: 1,
    name: "VCT EMEA Stage 1 2025",
    date: "26.03.25 - 19.05.25",
    status: "анонс",
    prize: "100000",
    trailer: null,
    description: "Этап VCT в регионе EMEA.",
    teamsCount: 16,
    platform: "PC",
    gameLogo: "/logos/valorant.png",
  },
  {
    id: 2,
    name: "VCT Americas Stage 1 2025",
    date: "21.03.25 - 05.05.25",
    status: "регистрация",
    prize: "100000",
    trailer: null,
    description: "Этап VCT в регионе Америки.",
    teamsCount: 12,
    platform: "PC",
    gameLogo: "/logos/valorant.png",
  },
  {
    id: 3,
    name: "Valorant Student Cup",
    date: "15.02.25 - 22.02.25",
    status: "регистрация",
    prize: "—",
    trailer: null,
    description: "Турнир среди студентов.",
    teamsCount: 8,
    platform: "PC",
    gameLogo: "/logos/valorant.png",
  },
  {
    id: 4,
    name: "Valorant Student Cup",
    date: "15.02.25 - 22.02.25",
    status: "завершен",
    prize: "—",
    trailer: null,
    description: "Турнир среди студентов.",
    teamsCount: 8,
    platform: "PC",
    gameLogo: "/logos/valorant.png",
  },
];

const adsData = [
  {
    id: 1,
    title: "Поддержи киберспорт",
    description: "Реклама крутых геймерских гаджетов и экипировки!",
    link: "https://example.com",
    image: "https://media.lpgenerator.ru/uploads/2022/07/20/1.png",
  },
  {
    id: 2,
    title: "Игровой ПК на заказ",
    description: "Собери мощный игровой компьютер по выгодной цене.",
    link: "https://example.com",
    image: "https://pics.livejournal.com/nz8080/pic/0002qkw0/s640x480",
  },
];

const AdCard = ({ ad }) => (
  <Card sx={{ backgroundColor: "#1c1b22", color: "white", mb: 2 }}>
    {ad.image && (
      <CardMedia
        component="img"
        height="140"
        image={ad.image}
        alt={ad.title}
        sx={{ objectFit: "cover" }}
      />
    )}
    <CardContent>
      <Typography variant="h6" sx={{ mb: 1 }}>
        {ad.title}
      </Typography>
      <Typography variant="body2" sx={{ mb: 2 }}>
        {ad.description}
      </Typography>
      <Typography
        component="a"
        href={ad.link}
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: "#00AEEF", textDecoration: "none", fontWeight: "bold" }}
      >
        Подробнее
      </Typography>
    </CardContent>
  </Card>
);

const TournamentsList = () => {
  const [tab, setTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  const filteredTournaments = tournamentsData.filter((t) =>
    tab === 0
      ? ["анонс", "регистрация", "идёт"].includes(t.status)
      : t.status === "завершeн"
  );

  return (
    <Box sx={{ p: 4, backgroundColor: "#121212", minHeight: "100vh" }}>
      <Typography variant="h4" color="white" sx={{ mb: 3 }}>
        Турниры по киберспорту
      </Typography>

      <Tabs
        value={tab}
        onChange={handleTabChange}
        textColor="inherit"
        TabIndicatorProps={{ style: { backgroundColor: "#00AEEF" } }}
        sx={{ mb: 2 }}
      >
        <Tab label="Ближайшие" sx={{ color: "white" }} />
        <Tab label="Прошедшие" sx={{ color: "white" }} />
      </Tabs>

      <Divider sx={{ borderColor: "#333", mb: 3 }} />

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 3,
        }}
      >
        {/* Левая колонка с турнирами */}
        <Box sx={{ flex: 3 }}>
          {filteredTournaments.map((t) => (
            <TournamentCard key={t.id} tournament={t} />
          ))}
        </Box>

        {/* Правая колонка с рекламой */}
        <Box sx={{ flex: 1, minWidth: { xs: "100%", md: "250px" } }}>
          <Typography variant="h6" sx={{ color: "white", mb: 2 }}>
            Реклама
          </Typography>
          {adsData.map((ad) => (
            <AdCard key={ad.id} ad={ad} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
export default TournamentsList;
