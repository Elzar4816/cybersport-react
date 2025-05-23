// src/components/TournamentsList.jsx
import React, { useState, useEffect } from "react";
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
//import{tournamentsData} from "./TournamentsData"
import axios from "axios";
// ... остальной импорт

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
  const [tournaments, setTournaments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/tournaments");
        setTournaments(response.data);
      } catch (error) {
        console.error("Ошибка при загрузке турниров:", error);
      }
    };

    fetchData();
  }, []);


  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  const filteredTournaments = tournaments.filter((t) => {
    const statusMap = {
      upcoming: "анонс",
      ongoing: "регистрация",
      completed: "завершен"
    };
    const translatedStatus = statusMap[t.status];
    return tab === 0
        ? ["анонс", "регистрация", "идёт"].includes(translatedStatus)
        : translatedStatus === "завершен";
  });


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
