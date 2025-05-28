import React from "react";
import { Box, Typography, Button } from "@mui/material";
// import heroImage from "../../assets/hero-image.png";
import heroImage from "../../assets/hero-image1.jpg";
import Logo from "../../assets/logoKCF.png";
import { motion } from "framer-motion";
import bannerHero from "../../assets/banner-hero.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: { xs: 4, md: 0 },

        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 4,
        mt: 3,
        overflow: "hidden",
        marginTop: "0px",
        marginBottom: "100px",
        padding: "0 20px",
      }}
    >
      <Box
        sx={{
          mt: { xs: "120px", md: "75px" },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          width: "100%",
        }}
      >
        {/* Левая часть — текст */}
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
            Федерация Киберспорта
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
            Общественное объединение (ОО), основными целями которого являются:
            развитие и популяризация киберспорта в Кыргызской Республике;
            создание киберспортивной эко-системы и продвижение кыргызского
            киберспорта в мировое сообщество.
          </Typography>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#ac5864",
              borderRadius: "30px",
              px: 4,
              py: 1.5,
              fontSize: "1rem",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#922f3d",
              },
            }}
            onClick={() => navigate("/about")}
          >
            Подробнее
          </Button>
        </Box>

        {/* Правая часть — изображение */}
        <Box
          component={motion.img}
          src={heroImage}
          alt="Kyrgyz CyberSport Federation"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          sx={{
            maxWidth: { xs: "100%", md: "557px" },
            maxHeight: { xs: "300px", md: "68vh" },
            width: "100%",
            height: "auto",
            mt: { xs: 4, md: 0 },
          }}
        />
      </Box>
    </Box>
  );
};

export default Hero;
