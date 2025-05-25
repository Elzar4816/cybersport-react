import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box, Typography, CircularProgress, Divider } from "@mui/material";
import RightSidebar from "../News/RightSidebar";

const NewsDetail = () => {
  const { id } = useParams();
  const [newsItem, setNewsItem] = useState(null);
  const [relatedNews, setRelatedNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/api/news/${id}`)
      .then((res) => setNewsItem(res.data))
      .catch((err) => {
        console.error("Ошибка при загрузке новости", err);
        setError("Не удалось загрузить новость.");
      })
      .finally(() => setLoading(false));

    axios
      .get(`/api/news`)
      .then((res) => {
        const filtered = res.data.filter((n) => n.id !== parseInt(id));
        setRelatedNews(filtered.slice(0, 8));
      })
      .catch((err) =>
        console.error("Ошибка при загрузке других новостей", err)
      );
  }, [id]);

  if (loading) {
    return (
      <Box
        sx={{
          padding: { xs: "100px 20px", md: "140px 60px" },
          display: "flex",
          justifyContent: "center",
          color: "white",
        }}
      >
        <CircularProgress color="inherit" />
      </Box>
    );
  }

  if (error || !newsItem) {
    return (
      <Box sx={{ padding: { xs: "100px 20px", md: "140px 60px" } }}>
        <Typography color="error" variant="h6" align="center">
          {error || "Новость не найдена."}
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 4,
        padding: { xs: "123px 16px 40px", md: "120px 40px 40px" },
        width: "90%", // чуть шире, чтобы было место
        maxWidth: "1200px", // ограничиваем на больших экранах
        margin: "0 auto",
      }}
    >
      {/* Основной контент */}
      <Box sx={{ width: { xs: "100%", md: "66%" }, color: "white" }}>
        {newsItem.imageUrl && (
          <Box
            component="img"
            src={newsItem.imageUrl}
            alt={newsItem.title}
            sx={{
              width: "100%",
              maxHeight: 450,
              objectFit: "cover",
              borderRadius: 3,
              mb: 4,
              boxShadow: "0 8px 20px rgba(0,0,0,0.7)",
              width: "85%",
            }}
          />
        )}

        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: 700,
            letterSpacing: "0.02em",
            lineHeight: 1.2,
            mb: 1,
            textShadow: "0 2px 8px rgba(0,0,0,0.8)",
            width: "85%",
            fontSize: "26px",
          }}
        >
          {newsItem.title}
        </Typography>

        <Typography
          variant="subtitle2"
          color="primary.light"
          sx={{
            mb: 3,
            fontStyle: "italic",
            textShadow: "0 1px 4px rgba(0,0,0,0.6)",
          }}
        >
          {new Date(newsItem.date).toLocaleDateString("ru-RU", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </Typography>

        <Divider sx={{ mb: 4, borderColor: "#444" }} />

        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "1rem", md: "1.125rem" },
            lineHeight: 1.7,
            letterSpacing: "0.01em",
            whiteSpace: "pre-line",
            textShadow: "0 1px 2px rgba(0,0,0,0.5)",
            width: "85%",
            fontSize: "16px",
          }}
        >
          {newsItem.content}
        </Typography>

        <Divider sx={{ my: 6, borderColor: "#444" }} />

        <Typography
          variant="h5"
          gutterBottom
          sx={{
            fontWeight: 600,
            mb: 3,
            textShadow: "0 1px 4px rgba(0,0,0,0.7)",
          }}
        >
          Другие новости
        </Typography>

        <Box
          sx={{
            display: "grid",
            gap: 2,
            gridTemplateColumns: {
              xs: "1fr", // мобильные — 1 карточка в ряд
              sm: "1fr 1fr", // >=600px — 2 карточки в ряд
              md: "1fr 1fr 1fr 1fr", // >=900px — 4 карточки в ряд
            },
          }}
        >
          {relatedNews.slice(0, 8).map((item) => (
            <Box
              key={item.id}
              component="a"
              href={`/news/${item.id}`}
              sx={{
                display: "flex",
                flexDirection: "column",
                textDecoration: "none",
                color: "inherit",
                backgroundColor: "rgba(255,255,255,0.02)",
                borderRadius: 2,
                overflow: "hidden",
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.01)",
                  backgroundColor: "rgba(255,255,255,0.05)",
                },
              }}
            >
              <Box
                component="img"
                src={item.imageUrl}
                alt={item.title}
                sx={{
                  width: "100%",
                  height: 140,
                  objectFit: "cover",
                }}
              />

              <Box sx={{ padding: 2 }}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 600,
                    lineHeight: 1.3,
                    mb: 1,
                    color: "white",
                    textShadow: "0 1px 3px rgba(0,0,0,0.6)",
                  }}
                >
                  {item.title.length > 80
                    ? item.title.slice(0, 77) + "..."
                    : item.title}
                </Typography>

                <Typography
                  variant="caption"
                  color="gray"
                  sx={{ fontStyle: "italic" }}
                >
                  {new Date(item.date).toLocaleDateString("ru-RU")}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Сайдбар */}
      <Box sx={{ width: { xs: "100%", md: "34%" } }}>
        <RightSidebar />
      </Box>
    </Box>
  );
};

export default NewsDetail;
