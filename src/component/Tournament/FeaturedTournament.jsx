import React from "react";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import TelegramIcon from "@mui/icons-material/Telegram";
import bgImage from "../../assets/Dark.png";
const FeaturedTournament = () => {
  const isMobile = useMediaQuery("(max-width:768px)");

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
          sx={{ mt: 2, textAlign: "center" }}
        >
          Пока нет предстоящих турниров
        </Typography>
        <Typography
          variant="body2"
          color="gray"
          sx={{ mt: 1, textAlign: "center", maxWidth: 400 }}
        >
          Следите за нашими новостями, чтобы не пропустить свежие анонсы и новые
          турниры!
        </Typography>
        <Button
          variant="outlined"
          startIcon={<TelegramIcon />}
          sx={{
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
            window.open("https://t.me/kyrgyz_cybersport_federation", "_blank")
          }
        >
          Наш Telegram-канал
        </Button>
      </Box>
    </Box>
  );
};

export default FeaturedTournament;
