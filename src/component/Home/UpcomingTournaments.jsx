import React from "react";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import LogoCs2 from "../../assets/cs2.png";
import LogoVal from "../../assets/valorant.jpg";
import LogoDota from "../../assets/Dota2.png";
import LogoMLBB from "../../assets/MLBB.png";

const tournaments = [
  {
    logo: LogoCs2,
    title: "STUDENT LEAGUE SEASON 3",
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
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <Box
      component="section"
      sx={{
        bgcolor: "#121212",
        py: 6,
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
              bgcolor: tournament.primary ? "#2a192b" : "#1c1c1c",
              color: "white",
              borderRadius: 3,
              p: 3,
              mb: 3,
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: isMobile ? "center" : "center",
              gap: isMobile ? 2 : 8,
              textAlign: isMobile ? "center" : "left",
              justifyContent: isMobile ? "center" : "space-between",
              flexWrap: "wrap",
            }}
          >
            {/* Логотип */}
            <Box
              component="img"
              src={tournament.logo}
              alt={tournament.title}
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
                mt: isMobile ? 1 : 0,
                minWidth: isMobile ? "auto" : 180,
              }}
            >
              {tournament.title}
            </Typography>

            {/* Приз / Дата / Дисциплина */}
            <Box
              sx={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                gap: isMobile ? 1 : 3,
                alignItems: "center",
              }}
            >
              <Box sx={{ textAlign: "center", minWidth: 100 }}>
                <Typography variant="caption" color="gray">
                  🏆 Призовой фонд
                </Typography>
                <Typography sx={{ fontWeight: "bold" }}>
                  {tournament.prize}
                </Typography>
              </Box>

              <Box sx={{ textAlign: "center", minWidth: 100 }}>
                <Typography variant="caption" color="gray">
                  📅 Дата проведения
                </Typography>
                <Typography sx={{ fontWeight: "bold" }}>
                  {tournament.date}
                </Typography>
              </Box>

              <Box sx={{ textAlign: "center", minWidth: 120 }}>
                <Typography variant="caption" color="gray">
                  🧩 Дисциплина
                </Typography>
                <Typography sx={{ fontWeight: "bold" }}>
                  {tournament.discipline}
                </Typography>
              </Box>
            </Box>

            {/* Кнопка */}
            <Button
              variant="contained"
              sx={{
                mt: isMobile ? 2 : 0,
                backgroundColor: tournament.primary ? "#ff2845" : "#616161",
                textTransform: "none",
                borderRadius: "12px",
                px: 4,
                width: isMobile ? "100%" : "auto",
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
