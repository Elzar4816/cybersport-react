import React from "react";
import {
  Box,
  Card,
  Typography,
  Button,
  Avatar,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const TournamentCard = ({ tournament }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const getLogoSrc = (game) => {
    return game?.logo_url
      ? `${game.logo_url}`
      : "/tournaments-logo/default.png";
  };

  return (
    <Card
      sx={{
        backgroundColor: "#2a2a30",
        color: "white",
        mb: 2,
        px: 3,
        py: 2,
        borderRadius: 2,
      }}
    >
      <Stack
        direction={isMobile ? "column" : "row"}
        alignItems={isMobile ? "flex-start" : "center"}
        justifyContent="space-between"
        spacing={2}
      >
        {/* Логотип */}
        <Box
          sx={{
            width: isMobile ? "100%" : 60,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Avatar
            src={getLogoSrc(tournament.game)}
            alt={tournament.game?.name}
            variant="square"
            sx={{
              width: 78,
              height: 78,
              borderRadius: 2,
              objectFit: "contain",
              img: {
                objectFit: "contain",
                width: "100%",
                height: "100%",
              },
            }}
          />
        </Box>

        {/* Название */}
        <Box sx={{ width: isMobile ? "100%" : 220 }}>
          <Typography variant="subtitle1" fontWeight="bold">
            {tournament.title}
          </Typography>
        </Box>

        {/* Даты */}
        <Box
          sx={{
            width: isMobile ? "100%" : 160,
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <CalendarMonthIcon sx={{ fontSize: 18 }} />
          <Typography variant="body2">
            {formatDateRange(tournament.start_date, tournament.end_date)}
          </Typography>
        </Box>

        {/* Описание */}
        {!isMobile && (
          <Box sx={{ width: 240 }}>
            <Typography variant="body2" sx={{ opacity: 0.85 }}>
              {tournament.description}
            </Typography>
          </Box>
        )}

        {/* Призовой фонд */}
        <Box sx={{ width: isMobile ? "100%" : 140 }}>
          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
            Приз:{" "}
            {tournament.prize_pool
              ? `${tournament.prize_pool} сом`
              : "не указан"}
          </Typography>
        </Box>

        {/* Кнопка */}
        <Box
          sx={{
            width: isMobile ? "100%" : 160,
            textAlign: isMobile ? "left" : "right",
          }}
        >
          {tournament.is_open ? (
            <Button
              variant="contained"
              sx={{
                background: "linear-gradient(90deg, #00AEEF 0%, #00FFD1 100%)",
                color: "#000",
                textTransform: "none",
                fontWeight: "bold",
                px: 3,
                py: 1,
                borderRadius: 2,
                boxShadow: "0 4px 12px rgba(0, 174, 239, 0.4)",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  background:
                    "linear-gradient(90deg, #00FFD1 0%, #00AEEF 100%)",
                  boxShadow: "0 6px 16px rgba(0, 255, 209, 0.5)",
                },
              }}
            >
              Регистрация
            </Button>
          ) : tournament.status === "completed" ? (
            <Button
              variant="outlined"
              sx={{
                borderColor: "#aaa",
                color: "#aaa",
                textTransform: "none",
                fontWeight: "bold",
                px: 3,
                py: 1,
                borderRadius: 2,
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  borderColor: "#fff",
                  color: "#fff",
                  backgroundColor: "#333",
                },
              }}
            >
              Результаты
            </Button>
          ) : (
            <Typography
              variant="body2"
              sx={{
                display: "inline-block",
                backgroundColor: "#444",
                color: "#ffcc00",
                fontWeight: "bold",
                px: 2,
                py: 0.5,
                borderRadius: "16px",
                fontSize: "0.85rem",
                textAlign: "center",
                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
              }}
            >
              Ожидается
            </Typography>
          )}
        </Box>
      </Stack>
    </Card>
  );
};

const formatDateRange = (start, end) => {
  const startDate = new Date(start);
  const endDate = new Date(end);
  return `${startDate.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
  })} - ${endDate.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
  })}`;
};

export default TournamentCard;
