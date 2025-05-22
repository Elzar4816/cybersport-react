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
import Logo from "../../assets/logoKCF.png";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#252435",
        color: "white",
        pt: 4,
        pb: 2,
        px: { xs: 2, sm: 4, md: 10 },
      }}
    >
      {/* Верхняя часть: логотип и соцсети */}
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
        sx={{ flexDirection: { xs: "column", md: "row" } }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            textAlign: { xs: "center", md: "left" },
            mb: { xs: 2, md: 0 },
            width: { xs: "100%", md: "33%" },
          }}
        >
          <Box
            sx={{
              height: { xs: 60, sm: 70, md: 170 },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src={Logo}
              alt="KCF Logo"
              sx={{
                height: { xs: 170, sm: 170, md: 170 },
                objectFit: "contain",
              }}
            />
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            textAlign: { xs: "center", md: "right" },
            width: { xs: "100%", md: "auto" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
              gap: 3,
              flexWrap: "wrap",
              maxWidth: { xs: 250, md: "none" },
              mx: "auto",
            }}
          >
            <Link href="#" color="inherit" aria-label="Facebook">
              <Facebook fontSize="medium" />
            </Link>
            <Link href="#" color="inherit" aria-label="Twitter">
              <Twitter fontSize="medium" />
            </Link>
            <Link href="#" color="inherit" aria-label="Instagram">
              <Instagram fontSize="medium" />
            </Link>
            <Link href="#" color="inherit" aria-label="YouTube">
              <YouTube fontSize="medium" />
            </Link>
            <Link href="#" color="inherit" aria-label="Telegram">
              <Telegram fontSize="medium" />
            </Link>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ borderTop: "1px solid #333", my: 3 }} />

      {/* Меню навигации */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 2,
          mb: 3,
          textAlign: "center",
        }}
      >
        {[
          "О федерации",
          "Турниры",
          "Партнеры",
          "Пресс-центр",
          "Проекты",
          "Контакты",
        ].map((text) => (
          <Link
            key={text}
            href="#"
            color="inherit"
            underline="none"
            sx={{ px: 1, py: 0.5, fontSize: "1rem" }}
          >
            {text}
          </Link>
        ))}
      </Box>

      {/* Контактная информация */}
      <Grid
        container
        spacing={2}
        justifyContent="center"
        textAlign="center"
        sx={{ flexDirection: { xs: "column", md: "row" } }}
      >
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
              px: 1,
            }}
          >
            <Room fontSize="small" />
            <Typography variant="body2">
              г. Бишкек, ул. Абдрахманова, офис 42
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
              px: 1,
            }}
          >
            <Phone fontSize="small" />
            <Typography variant="body2">+996 312 123 456</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
              px: 1,
            }}
          >
            <Email fontSize="small" />
            <Typography variant="body2">info@kcf.kg</Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Нижняя строка */}
      <Box
        sx={{
          mt: 4,
          textAlign: "center",
          fontSize: "0.875rem",
          color: "#aaa",
          px: 1,
        }}
      >
        © {new Date().getFullYear()} Kyrgyz Cybersport Federation
      </Box>
    </Box>
  );
};

export default Footer;
