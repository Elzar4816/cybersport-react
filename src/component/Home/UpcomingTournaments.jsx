import React from "react";
import { Box, Typography, Button } from "@mui/material";
import LogoCs2 from "../../assets/cs2.png";
import LogoVal from "../../assets/valorant.jpg";
import LogoDota from "../../assets/Dota2.png";
import LogoMLBB from "../../assets/MLBB.png";
const tournaments = [
  {
    logo: LogoCs2,
    title: "KYRGYZ LEAGUE FINAL",
    prize: "200 000 сом",
    date: "21.05 - 01.06",
    discipline: "Counter-Strike: 2",
    primary: true,
  },
  {
    logo: LogoVal,
    title: "MOBILE LEGENDS Bang Bang ",
    prize: "3 500$",
    date: "Июнь",
    discipline: "VALORANT",
  },
  {
    logo: LogoDota,
    title: "VALORANT SUMMER CUP",
    prize: "100 000 сом",
    date: "Июль",
    discipline: "VALORANT",
  },
  {
    logo: LogoMLBB,
    title: "STUDENT LEAGUE SEASON 4",
    prize: "200 000 сом",
    date: "Сентябрь",
    discipline: "Counter-Strike: 2",
  },
];

const UpcomingTournaments = () => {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: "#121212", // Отдельный фон
        py: 6, // Вертикальные отступы
        px: 2,
      }}
    >
      <Box sx={{ maxWidth: 1300, mx: "auto" }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            color: "white",
            mb: 4,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Ближайшие турниры
        </Typography>

        {tournaments.map((tournament, idx) => (
          <Box
            key={idx}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              bgcolor: tournament.primary ? "#2a192b" : "#1c1c1c",
              color: "white",
              borderRadius: 3,
              p: 2,
              mb: 2,
              gap: 8,
              flexWrap: "wrap",
            }}
          >
            {/* Логотип */}
            <Box
              component="img"
              src={tournament.logo}
              alt={tournament.title}
              sx={{
                height: 50,
                width: 50,
                objectFit: "contain",
                borderRadius: 2,
              }}
            />

            {/* Название */}
            <Typography
              sx={{ flex: 1, fontWeight: "bold", ml: 1, minWidth: 180 }}
            >
              {tournament.title}
            </Typography>

            {/* Призовой фонд */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                minWidth: 120,
              }}
            >
              <Typography variant="caption" color="gray">
                🏆 Призовой фонд
              </Typography>
              <Typography sx={{ fontWeight: "bold" }}>
                {tournament.prize}
              </Typography>
            </Box>

            {/* Дата */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                minWidth: 100,
              }}
            >
              <Typography variant="caption" color="gray">
                📅 Дата проведения
              </Typography>
              <Typography sx={{ fontWeight: "bold" }}>
                {tournament.date}
              </Typography>
            </Box>

            {/* Дисциплина */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                minWidth: 130,
              }}
            >
              <Typography variant="caption" color="gray">
                🧩 Дисциплина
              </Typography>
              <Typography sx={{ fontWeight: "bold" }}>
                {tournament.discipline}
              </Typography>
            </Box>

            {/* Кнопка */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: tournament.primary ? "#ff2845" : "#616161",
                textTransform: "none",
                borderRadius: "20px",
                px: 3,
                "&:hover": {
                  backgroundColor: tournament.primary ? "#cc1f39" : "#4a4a4a",
                },
              }}
            >
              Подробнее
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default UpcomingTournaments;
