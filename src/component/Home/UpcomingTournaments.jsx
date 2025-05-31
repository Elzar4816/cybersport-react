import React, { useEffect, useState, useRef } from "react";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import axios from "axios";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import TelegramIcon from "@mui/icons-material/Telegram";
gsap.registerPlugin(ScrollTrigger);

const UpcomingTournaments = () => {
  const [tournaments, setTournaments] = useState([]);
  const cardsRef = useRef([]);
  const isMobile = useMediaQuery("(max-width:768px)");

  useEffect(() => {
    axios
      .get("/api/tournaments")
      .then((res) => {
        const upcoming = res.data.filter(
          (t) => t.status === "upcoming" || t.is_open
        );
        setTournaments(upcoming);
      })
      .catch((err) => console.error("Ошибка загрузки турниров:", err));
  }, []);

  useEffect(() => {
    if (cardsRef.current.length === 0) return;

    gsap.fromTo(
      cardsRef.current,
      {
        opacity: 0,
        y: 80,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "power3.out",
        duration: 1,
        stagger: {
          amount: 0.8,
          grid: [3, 2],
          from: "start",
        },
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: "top 70%",
          end: "top 10%",
          scrub: true,
        },
      }
    );
  }, [tournaments]);

  return (
    <Box component="section" sx={{ bgcolor: "#121212", py: 6, px: 2 }}>
      <Box sx={{ maxWidth: 1300, mx: "auto" }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            color: "white",
            mb: 4,
            fontWeight: "bold",
            textAlign: "center",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          Ближайшие турниры
        </Typography>

        {tournaments.length > 0 ? (
          tournaments.map((t, idx) => (
            <Box
              key={t.id}
              ref={(el) => (cardsRef.current[idx] = el)}
              sx={{
                bgcolor: idx === 0 ? "#2a192b" : "#1c1c1c",
                color: "white",
                borderRadius: 3,
                p: 3,
                mb: 3,
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                alignItems: "center",
                gap: isMobile ? 2 : 8,
                justifyContent: "space-between",
                flexWrap: "wrap",
                boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
              }}
            >
              {/* Логотип */}
              <Box
                component="img"
                src={t.game?.logo_url || "/tournaments-logo/default.png"}
                alt={t.title}
                sx={{
                  height: isMobile ? 80 : 50,
                  width: isMobile ? 80 : 50,
                  objectFit: "contain",
                  borderRadius: 2,
                }}
              />

              {/* Название */}
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: isMobile ? "18px" : "16px",
                  minWidth: 180,
                  textAlign: isMobile ? "center" : "left",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                {t.title}
              </Typography>

              {/* Дата и приз */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: isMobile ? "column" : "row",
                  gap: 2,
                  alignItems: "center",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                <Box
                  sx={{
                    textAlign: "center",
                    minWidth: 100,
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  <Typography variant="caption" color="gray">
                    🏆 Приз
                  </Typography>
                  <Typography sx={{ fontWeight: "bold" }}>
                    {t.prize_pool ? `${t.prize_pool} сом` : "не указан"}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    textAlign: "center",
                    minWidth: 120,
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  <Typography variant="caption" color="gray">
                    📅 Дата
                  </Typography>
                  <Typography sx={{ fontWeight: "bold" }}>
                    {formatDateRange(t.start_date, t.end_date)}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    textAlign: "center",
                    minWidth: 120,
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  <Typography variant="caption" color="gray">
                    🧩 Игра
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    {t.game?.name || "Не указано"}
                  </Typography>
                </Box>
              </Box>

              {/* Кнопка */}
              <Button
                variant="contained"
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  mt: isMobile ? 2 : 0,
                  backgroundColor: idx === 0 ? "#ff2845" : "#616161",
                  textTransform: "none",
                  borderRadius: "12px",
                  px: 4,
                  width: isMobile ? "100%" : "auto",
                  "&:hover": {
                    backgroundColor: idx === 0 ? "#cc1f39" : "#4a4a4a",
                  },
                }}
              >
                Подробнее
              </Button>
            </Box>
          ))
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              py: 6,
            }}
          >
            <SportsEsportsIcon sx={{ fontSize: 80, color: "#555" }} />
            <Typography
              variant="h6"
              color="white"
              sx={{
                mt: 2,
                textAlign: "center",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Пока нет ближайших турниров
            </Typography>
            <Typography
              variant="body2"
              color="gray"
              sx={{
                mt: 1,
                textAlign: "center",
                maxWidth: 400,
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Следите за нашими новостями, чтобы не пропустить свежие анонсы и
              новые турниры!
            </Typography>
            <Button
              variant="outlined"
              startIcon={<TelegramIcon />}
              sx={{
                fontFamily: "Montserrat, sans-serif",
                mt: 3,
                color: "#00AEEF",
                borderColor: "#00AEEF",
                textTransform: "none",
                borderRadius: "12px",
                "&:hover": {
                  backgroundColor: "#00AEEF",
                  color: "white",
                },
              }}
              onClick={() =>
                window.open(
                  "https://t.me/kyrgyz_cybersport_federation",
                  "_blank"
                )
              }
            >
              Наш Telegram-канал
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

const formatDateRange = (start, end) => {
  const s = new Date(start);
  const e = new Date(end);
  return `${s.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
  })} - ${e.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
  })}`;
};

export default UpcomingTournaments;
