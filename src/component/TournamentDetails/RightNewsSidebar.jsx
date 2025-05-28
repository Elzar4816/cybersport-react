import React, { useEffect, useState } from "react";
import { Box, Typography, Divider } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import axios from "axios";
import NewsCard from "../News/NewsCard";

const RightNewsSidebar = () => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    axios
      .get("/api/news")
      .then((res) => setNewsList(res.data))
      .catch((err) => console.error("Ошибка загрузки новостей:", err));
  }, []);

  const recentNews = newsList.slice(0, 2); // Только 2 новости

  // Преобразуем структуру под интерфейс NewsCard
  const adaptNewsItem = (item) => {
    const limitWords = (text, count) =>
      text?.split(" ").slice(0, count).join(" ") +
      (text?.split(" ").length > count ? "..." : "");

    return {
      ...item,

      title: limitWords(item.title, 5),
    };
  };

  return (
    <Box sx={{ flex: 1, color: "white", px: 2 }}>
      <Typography
        variant="subtitle1"
        sx={{ mb: 2, fontWeight: "bold", fontSize: "14px" }}
      >
        АКТУАЛЬНЫЕ НОВОСТИ
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 4 }}>
        {recentNews.map((news) => (
          <NewsCard key={news.id} item={adaptNewsItem(news)} />
        ))}
      </Box>

      <Divider sx={{ borderColor: "#444", mb: 2 }} />

      <Typography
        variant="subtitle1"
        sx={{ mb: 1, fontWeight: "bold", fontSize: "14px" }}
      >
        ВИДЕО
      </Typography>

      <Box
        sx={{
          borderRadius: 2,
          overflow: "hidden",
          position: "relative",
          paddingBottom: "56.25%",
          height: 0,
          mb: 2,
        }}
      >
        <iframe
          src="https://www.youtube.com/embed/UbSnz5SVsiE"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        ></iframe>
      </Box>

      <Divider sx={{ borderColor: "#444", mb: 2 }} />

      <Box sx={{ textAlign: "center", mb: 2 }}>
        <Typography
          component="a"
          href="https://www.youtube.com/@kyrgyzcybersportfederation"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "white",
            fontWeight: "bold",
            textDecoration: "none",
            fontSize: "0.9rem",
            display: "inline-flex",
            alignItems: "center",
            gap: 0.5,
            "&:hover": { textDecoration: "underline" },
          }}
        >
          Все видео <ArrowForward sx={{ fontSize: "1rem" }} />
        </Typography>
      </Box>
    </Box>
  );
};

export default RightNewsSidebar;
