import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "./NewsCard";
import RightSidebar from "./RightSidebar";
import { Box, Typography, Button, CircularProgress } from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
const NewsList = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [page, setPage] = useState(1);
  const pageSize = 6; // количество новостей на страницу

  useEffect(() => {
    axios
      .get("/api/news")
      .then((res) => setNews(res.data))
      .catch((err) => {
        console.error("Ошибка при загрузке новостей", err);
        setError("Не удалось загрузить новости.");
      })
      .finally(() => setLoading(false));
  }, []);

  const displayedNews = news.slice(0, page * pageSize);
  const hasMore = displayedNews.length < news.length;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 4,
        padding: { xs: "123px 16px 40px", md: "120px 40px 40px" },
      }}
    >
      {/* Блок с новостями */}
      <Box sx={{ flex: 2 }}>
        <Typography
          variant="h4"
          color="white"
          gutterBottom
          sx={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Новости
        </Typography>
        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <CircularProgress color="inherit" />
          </Box>
        ) : news.length === 0 ? (
          <Box sx={{ textAlign: "center", mt: 4 }}>
            <Typography
              variant="h6"
              color="white"
              gutterBottom
              sx={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Пока новостей нет
            </Typography>
            <Typography
              variant="body2"
              color="gray"
              sx={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Загляните позже или подпишитесь на наш Telegram-канал, чтобы
              узнавать о свежих обновлениях первыми!
            </Typography>
            <Button
              variant="outlined"
              startIcon={<TelegramIcon />}
              onClick={() =>
                window.open(
                  "https://t.me/kyrgyz_cybersport_federation",
                  "_blank"
                )
              }
              sx={{
                fontFamily: "Montserrat, sans-serif",
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
            >
              Наш Telegram-канал
            </Button>
          </Box>
        ) : (
          <>
            <Box
              sx={{
                display: "grid",
                gap: 3,
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              }}
            >
              {displayedNews.map((item) => (
                <NewsCard key={item.id} item={item} />
              ))}
            </Box>

            {hasMore && (
              <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                <Button
                  variant="outlined"
                  onClick={() => setPage(page + 1)}
                  sx={{ color: "white", borderColor: "white" }}
                >
                  Показать ещё
                </Button>
              </Box>
            )}
          </>
        )}
      </Box>

      {/* Sidebar */}
      <Box sx={{ flex: 1, width: { xs: "100%", md: "300px" } }}>
        <RightSidebar />
      </Box>
    </Box>
  );
};

export default NewsList;
