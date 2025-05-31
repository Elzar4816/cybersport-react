import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Divider,
  Button,
} from "@mui/material";
import axios from "axios";
import { ArrowForward } from "@mui/icons-material";
const RightSidebar = () => {
  const [tournaments, setTournaments] = useState([]);

  useEffect(() => {
    axios
      .get("/api/tournaments")
      .then((res) => setTournaments(res.data))
      .catch((err) => console.error("Ошибка загрузки турниров:", err));
  }, []);

  const upcomingTournaments = tournaments
    .filter((t) => t.status !== "completed")
    .slice(0, 4);

  const getLogoSrc = (game) => {
    return game?.logo_url ? game.logo_url : "/tournaments-logo/default.png";
  };

  return (
    <Box sx={{ flex: 1, color: "white", px: 2 }}>
      <Typography
        variant="subtitle1"
        sx={{
          mb: 2,
          fontWeight: "bold",
          fontSize: "14px",
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        ТУРНИРЫ ДЛЯ ВАС
      </Typography>

      <Box sx={{ maxHeight: 300, overflowY: "auto", mb: 4 }}>
        {upcomingTournaments.map((tournament) => (
          <Card
            key={tournament.id}
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#2c2c2c",
              mb: 1,
              p: 1,
              color: "white",
            }}
          >
            <CardMedia
              component="img"
              image={getLogoSrc(tournament.game)}
              alt={tournament.game?.name || "Game"}
              sx={{
                width: 50,
                height: 50,
                borderRadius: 1,
                mr: 2,
                objectFit: "contain",
                backgroundColor: "#1c1c1c",
              }}
            />
            <CardContent sx={{ p: 0 }}>
              <Typography variant="body2" sx={{ fontWeight: "bold" }} noWrap>
                {tournament.title}
              </Typography>
              <Typography variant="caption" sx={{ color: "#aaa" }}>
                {formatDate(tournament.start_date)}{" "}
                <Box
                  component="span"
                  sx={{ color: "#FFD700", fontWeight: "bold" }}
                >
                  {tournament.prize_pool ? `${tournament.prize_pool} сом` : "—"}
                </Box>
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Divider sx={{ borderColor: "#444", mb: 2 }} />

      {/* Видео */}
      <Typography
        variant="subtitle1"
        sx={{
          mb: 1,
          fontWeight: "bold",
          fontSize: "14px",
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        ВИДЕО
      </Typography>

      <Box
        sx={{
          borderRadius: 2,
          overflow: "hidden",
          position: "relative",
          paddingBottom: "56.25%", // 16:9
          height: 0,
          mb: 2,
        }}
      >
        <iframe
          src="https://www.youtube.com/embed/UbSnz5SVsiE"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        ></iframe>
      </Box>
      <Divider sx={{ borderColor: "#444", mb: 2 }} />
      <Box sx={{ textAlign: "center", mb: 2 }}>
        <Typography
          component="a"
          href="https://www.youtube.com/@kyrgyzcybersportfederation" // <- ЗАМЕНИ на свой URL
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            fontFamily: "Montserrat, sans-serif",
            color: "white",
            fontWeight: "bold",
            textDecoration: "none",
            fontSize: "0.9rem",
            display: "inline-flex",
            alignItems: "center",
            gap: 0.5,
            "&:hover": { textDecoration: "underline" },
          }}
        >
          Все видео <ArrowForward sx={{ fontSize: "1rem" }} />
        </Typography>
      </Box>
    </Box>
  );
};

const formatDate = (date) => {
  if (!date) return "—";
  const d = new Date(date);
  return d.toLocaleString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
};

export default RightSidebar;
