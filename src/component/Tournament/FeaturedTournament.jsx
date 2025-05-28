import React from "react";
import { Box, Button, Paper, Typography, useMediaQuery } from "@mui/material";
import Goverment from "../../assets/gov_banner.png";
import bgImage from "../../assets/Dark.png";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
const FeaturedTournament = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  const theme = useTheme();
  const tournament = {
    title: "Gov.Games — Кибертурнир между госорганами",
    games: ["Dota 2", "Counter-Strike 2"],
    prize_pool: "$20,000",
    registration_period: "26 мая — 2 июня",
    online_start: "3 июня",
    final_date: "14 июня",
    location: "Бишкек, IT-хаб TechnoPark",
    stream_link: "https://www.youtube.com/channel/your-channel-id",
    img: Goverment,
    description:
      "Сотрудники IT-отделов министерств и ведомств будут соревноваться в Dota 2 и Counter-Strike 2. Призовой фонд — 20 тысяч долларов, победители получат гаджеты, технику и другие ценные призы.",
  };

  const navigate = useNavigate();

  const handleRegistrationClick = () => {
    navigate("/gov-games", { state: { tournament } });
  };

  return (
    <Box
      sx={{
        px: 2,
        py: 4,
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "90px",
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        align="center"
        color="#fff"
        mb={4}
      >
        Предстоящий турнир
      </Typography>

      <Paper
        elevation={6}
        sx={{
          maxWidth: 900,
          width: "100%",
          borderRadius: 4,
          overflow: "hidden",
          backgroundColor: "#1c1c1c",
          color: "white",
        }}
      >
        <Box
          component="img"
          src={tournament.img}
          alt={tournament.title}
          sx={{
            width: "100%",
            height: isMobile ? 200 : 400,
            objectFit: "cover",
          }}
        />
        <Box sx={{ p: isMobile ? 3 : 5 }}>
          <Typography
            variant={isMobile ? "h5" : "h4"}
            fontWeight="bold"
            mb={2}
            align="center"
          >
            {tournament.title}
          </Typography>

          {/* Даты в одном ряду */}
          <Box
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              justifyContent: "center",
              alignItems: isMobile ? "flex-start" : "center",
              textAlign: isMobile ? "left" : "center",
              gap: 2,
              mb: 2,
            }}
          >
            <Box>
              <Typography variant="subtitle2" color="gray">
                Регистрация
              </Typography>
              <Typography fontWeight="bold">
                {tournament.registration_period}
              </Typography>
            </Box>

            <Box>
              <Typography variant="subtitle2" color="gray">
                Онлайн-этап
              </Typography>
              <Typography fontWeight="bold">
                {tournament.online_start}
              </Typography>
            </Box>

            <Box>
              <Typography variant="subtitle2" color="gray">
                Финал
              </Typography>
              <Typography fontWeight="bold">{tournament.final_date}</Typography>
            </Box>
          </Box>

          {/* Призовой фонд */}
          <Box
            sx={{
              mb: 3,
              //   display: "flex",
              //   justifyContent: "center",
              //   alignItems: "center",
              //   flexDirection: "column",
              textAlign: isMobile ? "left" : "center",
            }}
          >
            <Typography variant="subtitle2" color="gray">
              Призовой фонд
            </Typography>
            <Typography fontWeight="bold">{tournament.prize_pool}</Typography>
          </Box>

          {/* Кнопка */}
          <Box sx={{ textAlign: "center" }}>
            <Button
              onClick={handleRegistrationClick}
              variant="contained"
              sx={{
                background: "linear-gradient(90deg, #00AEEF 0%, #00FFD1 100%)",
                color: "#000",
                textTransform: "none",
                fontWeight: "bold",
                px: 4,
                py: 1.5,
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
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default FeaturedTournament;
