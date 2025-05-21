import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";

const news = [
  {
    title: "Финал чемпионата по CS:GO прошёл в Бишкеке",
    date: "18 мая 2025",
    image:
      "https://cdn-1.aki.kg/cdn-st-0/qdT/1/2098089.42434e944a3430f1a4bc5a75b4758452.jpg",
    summary:
      "Команда XYZ одержала победу в упорной борьбе. Турнир стал крупнейшим событием в регионе.",
  },
  {
    title: "Новая программа для молодых киберспортсменов",
    date: "15 мая 2025",
    image:
      "https://ergojournal.ru/wp-content/uploads/2024/06/game2-pic905-895x505-42087.jpg",
    summary:
      "Федерация запускает программу по развитию молодёжи в сфере киберспорта.",
  },
  {
    title: "Сотрудничество с международной лигой",
    date: "12 мая 2025",
    image: "https://s.resf.ru/media/photo_2024-04-22%2018.05.58.jpeg",
    summary:
      "Подписан меморандум о сотрудничестве с International Esports League.",
  },
];

const NewsSection = () => {
  return (
    <Box sx={{ px: { xs: 2, md: 4 }, py: 8, backgroundColor: "#f2f2f2" }}>
      <Typography
        variant="h4"
        sx={{
          mb: 6,
          fontWeight: "bold",
          textAlign: "center",
          color: "#222",
        }}
      >
        Последние новости
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4,
        }}
      >
        {news.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            <Card
              sx={{
                width: 320,
                borderRadius: 4,
                boxShadow:
                  "0 8px 30px rgba(0,0,0,0.08), 0 0 1px rgba(0,0,0,0.02)",
                transition: "box-shadow 0.3s ease-in-out",
                "&:hover": {
                  boxShadow:
                    "0 12px 40px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.02)",
                },
                backgroundColor: "white",
              }}
            >
              <CardMedia
                component="img"
                height="180"
                image={item.image}
                alt={item.title}
                sx={{
                  objectFit: "cover",
                  borderTopLeftRadius: 16,
                  borderTopRightRadius: 16,
                }}
              />
              <CardContent sx={{ p: 3 }}>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ mb: 1, display: "block" }}
                >
                  {item.date}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: "#333",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    minHeight: "52px",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    mt: 1.5,
                    color: "#555",
                    lineHeight: 1.6,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    minHeight: "72px",
                  }}
                >
                  {item.summary}
                </Typography>
                <Button
                  variant="text"
                  size="small"
                  sx={{
                    mt: 2,
                    textTransform: "none",
                    color: "#ac5864",
                    fontWeight: 500,
                    "&:hover": {
                      color: "#922f3d",
                    },
                  }}
                >
                  Читать далее →
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default NewsSection;
