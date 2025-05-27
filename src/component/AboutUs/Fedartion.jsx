import React from "react";
import { Box, Typography } from "@mui/material";
import Logo from "../../assets/logo.png";

const FederationBlock = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#4c6262",
        padding: "1.5rem 3rem",
        gap: "2rem",
        flexWrap: "wrap",
        marginTop: "95px", // чтобы на маленьких экранах текст переходил вниз
      }}
    >
      {/* Лого слева */}
      <Box
        component="img"
        src={Logo}
        alt="Federation Logo"
        sx={{
          height: 80,
          width: "auto",
          objectFit: "contain",
          flexShrink: 0,
        }}
      />

      {/* Текст справа */}
      <Typography
        variant="body1"
        sx={{
          color: "white",
          maxWidth: 600,
          fontSize: "1.1rem",
          lineHeight: 1.5,
        }}
      >
        Кыргызская Киберспортивная Федерация — это официальная организация,
        продвигающая развитие киберспорта в Кыргызстане. Мы поддерживаем
        игроков, команды и организаторов, создавая условия для роста и
        международного сотрудничества.
      </Typography>
    </Box>
  );
};

export default FederationBlock;
