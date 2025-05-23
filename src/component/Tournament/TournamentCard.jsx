import React from "react";
import {
  Box,
  Card,
  Typography,
  Button,
  Chip,
  Avatar,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LogoMLBB from "../../assets/MLBB.png";

const TournamentCard = ({ tournament }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Card
      sx={{
        backgroundColor: "#2a2a30",
        color: "white",
        mb: 2,
        px: 3,
        py: 2,
        borderRadius: 2,
        width: "100%",
        minHeight: 80,
      }}
    >
      <Stack
        direction={isMobile ? "column" : "row"}
        alignItems={isMobile ? "flex-start" : "center"}
        justifyContent="space-between"
        spacing={2}
        flexWrap="wrap"
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
            src={LogoMLBB}
            alt="Game Logo"
            variant="square"
            sx={{ width: 78, height: 78 }}
          />
        </Box>

        {/* Название */}
        <Box sx={{ width: isMobile ? "100%" : 220 }}>
          <Typography variant="subtitle1" fontWeight="bold">
            {tournament.name}
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
          <Typography variant="body2">{tournament.date}</Typography>
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
            Приз: {tournament.prize}
          </Typography>
        </Box>

        {/* Кнопка */}
        <Box
          sx={{
            width: isMobile ? "100%" : 160,
            textAlign: isMobile ? "left" : "right",
          }}
        >
          {tournament.status === "регистрация" ? (
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
          ) : tournament.status === "завершён" ? (
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
          ) : null}
        </Box>
      </Stack>
    </Card>
  );
};

export default TournamentCard;
