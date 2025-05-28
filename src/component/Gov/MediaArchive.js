import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Link,
} from "@mui/material";

const youtubeVideos = [
  {
    title: "Финал GovGames 2024 – CS2",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "Лучшие моменты – Dota 2",
    url: "https://www.youtube.com/embed/9bZkp7q19f0",
  },
];

const videoLinks = [
  {
    title: "Обзор: МинФин vs ГКНБ",
    url: "https://www.youtube.com/watch?v=abc123",
  },
  {
    title: "Хайлайты турнира CS2",
    url: "https://www.youtube.com/watch?v=def456",
  },
];

const photoAlbums = [
  {
    title: "Фото с финала",
    img: "https://via.placeholder.com/400x250?text=Final+Photos",
    url: "https://photos.google.com/final",
  },
  {
    title: "Тренировки команд",
    img: "https://via.placeholder.com/400x250?text=Training+Album",
    url: "https://photos.google.com/training",
  },
];

const MediaArchive = () => {
  return (
    <Box
      sx={{ backgroundColor: "#1a1a1a", color: "#fff", p: 4, borderRadius: 2 }}
    >
      <Typography variant="h5" gutterBottom>
        Медиаархив
      </Typography>

      <Typography variant="h6" sx={{ mt: 3 }}>
        📺 Прямые трансляции и записи
      </Typography>
      <Grid container spacing={3} sx={{ mt: 1 }}>
        {youtubeVideos.map((video, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Box sx={{ position: "relative", pb: "56.25%", height: 0 }}>
              <iframe
                title={video.title}
                src={video.url}
                frameBorder="0"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  borderRadius: 8,
                }}
              />
            </Box>
            <Typography variant="subtitle1" sx={{ mt: 1 }}>
              {video.title}
            </Typography>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h6" sx={{ mt: 5 }}>
        🔗 Обзоры и хайлайты
      </Typography>
      <Box sx={{ mt: 1 }}>
        {videoLinks.map((link, idx) => (
          <Typography key={idx} variant="body1" sx={{ mb: 1 }}>
            <Link
              href={link.url}
              target="_blank"
              rel="noopener"
              underline="hover"
              color="info.light"
            >
              {link.title}
            </Link>
          </Typography>
        ))}
      </Box>

      <Typography variant="h6" sx={{ mt: 5 }}>
        🖼 Фотоальбомы
      </Typography>
      <Grid container spacing={3} sx={{ mt: 1 }}>
        {photoAlbums.map((album, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{ backgroundColor: "#2a2a2a", color: "#fff" }}
              component={Link}
              href={album.url}
              target="_blank"
              rel="noopener"
              underline="none"
            >
              <CardMedia
                component="img"
                height="180"
                image={album.img}
                alt={album.title}
              />
              <CardContent>
                <Typography variant="subtitle1">{album.title}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MediaArchive;
