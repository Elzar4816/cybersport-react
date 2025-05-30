// src/components/NewsCard.jsx
import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  //   Link,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
const NewsCard = ({ item }) => {
  return (
    <Link to={`/press/news/${item.id}`} style={{ textDecoration: "none" }}>
      <Card
        sx={{
          backgroundColor: "#1c1c1c",
          color: "white",
          borderRadius: 3,
          boxShadow: 3,
          display: "flex",
          flexDirection: "column",
          height: "100%",
          transition: "transform 0.2s, box-shadow 0.2s",
          "&:hover": {
            transform: "scale(1.02)",
            boxShadow: 6,
          },
        }}
      >
        {item.imageUrl && (
          <CardMedia
            component="img"
            height="200"
            image={item.imageUrl}
            alt={item.title || "Картинка новости"}
            sx={{
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
              objectFit: "cover",
            }}
          />
        )}

        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h6" component="h2" gutterBottom>
            {item.title}
          </Typography>

          <Typography
            variant="caption"
            sx={{ color: "#999", display: "block", mb: 1 }}
          >
            {new Date(item.date).toLocaleDateString()}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              opacity: 0.9,
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
            }}
          >
            {item.content}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default NewsCard;
