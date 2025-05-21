import React from "react";
import { Box, Typography, Link, Grid } from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  YouTube,
  Telegram,
  Email,
  Phone,
  Room,
} from "@mui/icons-material";
import Logo from "../../assets/logoKCF.png"; // Используй логотип своей федерации

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#252435",
        color: "white",
        pt: 4,
        pb: 2,
        px: { xs: 2, md: 10 },
      }}
    >
      {/* Верхняя часть с логотипом и соцсетями */}
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{ textAlign: { xs: "center", md: "left" }, width: "33%" }}
        >
          <Box
            sx={{
              height: 80, // высота видимой части
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Box
              component="img"
              src={Logo}
              alt="KCF Logo"
              sx={{
                height: "250px", // картинка чуть выше, чем контейнер, чтобы "обрезать"
                objectFit: "cover",
              }}
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ textAlign: { xs: "center", md: "right" } }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
              gap: 5,
            }}
          >
            <Link href="#" color="inherit">
              <Facebook />
            </Link>
            <Link href="#" color="inherit">
              <Twitter />
            </Link>
            <Link href="#" color="inherit">
              <Instagram />
            </Link>
            <Link href="#" color="inherit">
              <YouTube />
            </Link>
            <Link href="#" color="inherit">
              <Telegram />
            </Link>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ borderTop: "1px solid #333", my: 3 }} />

      {/* Меню навигации */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 3,
          mb: 3,
        }}
      >
        <Link href="#" color="inherit" underline="none">
          О федерации
        </Link>
        <Link href="#" color="inherit" underline="none">
          Турниры
        </Link>
        <Link href="#" color="inherit" underline="none">
          Партнеры
        </Link>
        <Link href="#" color="inherit" underline="none">
          Пресс-центр
        </Link>
        <Link href="#" color="inherit" underline="none">
          Проекты
        </Link>
        <Link href="#" color="inherit" underline="none">
          Контакты
        </Link>
      </Box>

      {/* Контактная информация */}
      <Grid container spacing={4} justifyContent="center" textAlign="center">
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Room fontSize="small" />
            <Typography>г. Бишкек, ул. Абдрахманова, офис 42</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Phone fontSize="small" />
            <Typography>+996 312 123 456</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Email fontSize="small" />
            <Typography>info@kcf.kg</Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Нижняя строка */}
      <Box
        sx={{ mt: 4, textAlign: "center", fontSize: "0.875rem", color: "#aaa" }}
      >
        © {new Date().getFullYear()} Kyrgyz Cybersport Federation
      </Box>
    </Box>
  );
};

export default Footer;
