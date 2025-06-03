import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  CircularProgress,
} from "@mui/material";
import { motion } from "framer-motion";
import axios from "axios";
import TelegramIcon from "@mui/icons-material/Telegram";
import { Link, useNavigate } from "react-router-dom";

const NewsSection = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/api/news")
      .then((res) => {
        setNews(res.data.slice(0, 3));
      })
      .catch((err) => {
        console.error("Ошибка при загрузке новостей", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Box sx={{ px: { xs: 2, md: 4 }, py: 8, backgroundColor: "#f2f2f2" }}>
      <Typography
        variant="h4"
        sx={{
          mb: 6,
          fontWeight: "bold",
          textAlign: "center",
          color: "#222",
          fontFamily: "Montserrat, sans-serif",
          fontSize: {
            xs: "1.5rem", // ~24px
            sm: "2rem", // ~32px
            md: "2.5rem", // ~40px
          },
        }}
      >
        Последние новости
      </Typography>

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : news.length === 0 ? (
        <Box
          sx={{
            textAlign: "center",
            mt: 4,
            width: { xs: "90%", sm: "70%", md: "50%" },
            border: "1px solid #596670",
            borderRadius: "20px",
            margin: "0 auto",
            p: 3,
            backgroundColor: "#fff",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              mb: 2,
              fontFamily: "Montserrat, sans-serif",
              fontSize: {
                xs: "1rem",
                sm: "1.125rem",
                md: "1.25rem",
              },
            }}
          >
            Пока новостей нет
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 3,
              fontFamily: "Montserrat, sans-serif",
              fontSize: {
                xs: "0.875rem",
                sm: "1rem",
              },
            }}
          >
            Загляните позже или подпишитесь на наш Telegram-канал, чтобы
            узнавать о свежих обновлениях первыми!
          </Typography>
          <Button
            variant="outlined"
            startIcon={<TelegramIcon />}
            onClick={() =>
              window.open("https://t.me/kyrgyz_cybersport_federation", "_blank")
            }
            sx={{
              mt: 3,
              color: "#00AEEF",
              borderColor: "#00AEEF",
              textTransform: "none",
              borderRadius: "12px",
              fontFamily: "Montserrat, sans-serif",
              fontSize: {
                xs: "0.8rem",
                sm: "0.9rem",
              },
              "&:hover": {
                backgroundColor: "#00AEEF",
                color: "white",
              },
              mb: 1,
            }}
          >
            Наш Telegram-канал
          </Button>
        </Box>
      ) : (
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
              <Link
                to={`/press/news/${item.id}`}
                style={{ textDecoration: "none" }}
              >
                <Card
                  sx={{
                    width: { xs: 280, sm: 300, md: 320 },
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
                    height="220"
                    image={item.imageUrl}
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
                      sx={{
                        mb: 1,
                        display: "block",
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: {
                          xs: "0.7rem",
                          sm: "0.75rem",
                        },
                      }}
                    >
                      {new Date(item.date).toLocaleDateString()}
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
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: {
                          xs: "1rem",
                          sm: "1.1rem",
                        },
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
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: {
                          xs: "0.85rem",
                          sm: "0.95rem",
                        },
                      }}
                    >
                      {item.content}
                    </Typography>
                    <Button
                      variant="text"
                      size="small"
                      sx={{
                        fontFamily: "Montserrat, sans-serif",
                        mt: 2,
                        textTransform: "none",
                        color: "#ac5864",
                        fontWeight: 500,
                        fontSize: {
                          xs: "0.85rem",
                          sm: "0.95rem",
                        },
                        "&:hover": {
                          color: "#922f3d",
                        },
                      }}
                    >
                      Читать далее →
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default NewsSection;
