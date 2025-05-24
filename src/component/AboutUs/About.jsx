import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div
      style={{
        marginTop: "120px",
        marginBottom: "100px",
        padding: "56px 51p",
        width: "90%",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h4" sx={{ color: "white", textAlign: "center" }}>
        О Федерации
      </Typography>
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        sx={{
          flex: 1,
          minWidth: "250px",
          pr: 4,

          borderRadius: "15px",
          p: 3,
          color: "white",
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            fontSize: { xs: "36px", md: "49px" },
            fontWeight: 700,
            lineHeight: 1.2,
            textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
          }}
        >
          <Box component="span" sx={{ color: "#ac5864" }}>
            Кыргызская
          </Box>{" "}
          Киберспортивная Федерация
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 4,
            width: "90%",
            lineHeight: 1.6,
            fontSize: { xs: "16px", md: "18px" },
            textShadow: "1px 1px 3px rgba(0,0,0,0.5)",
          }}
        >
          Республиканское общественное объединение (РОО), основными целями
          которого являются: развитие и популяризация киберспорта в Кыргызской
          Республике; создание киберспортивной эко-системы и продвижение
          кыргызского киберспорта в мировое сообщество.
        </Typography>
      </Box>
      <div className=""></div>right
    </div>
  );
};

export default About;
