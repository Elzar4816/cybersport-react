import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Typography, Box } from "@mui/material";

const PressNewsDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [news, setNews] = useState(null);

    useEffect(() => {
        axios.get(`/api/news/${id}`)
            .then(res => setNews(res.data))
            .catch(() => navigate("/press"));
    }, [id]);

    if (!news) return <Typography sx={{ m: 4 }}>Загрузка...</Typography>;

    return (
        <Box sx={{ maxWidth: 800, mx: "auto", p: 4, color: "white" }}>
            <Typography variant="h4" gutterBottom>{news.title}</Typography>
            <Typography variant="subtitle2" gutterBottom>
                {new Date(news.date).toLocaleDateString()}
            </Typography>
            {news.imageUrl && (
                <img
                    src={news.imageUrl}
                    alt="news"
                    style={{ width: "100%", borderRadius: 8, marginBottom: 20 }}
                />
            )}
            <Typography variant="body1" sx={{ whiteSpace: "pre-line", mb: 2 }}>
                {news.content}
            </Typography>
            {news.videoUrl && (
                <Button
                    href={news.videoUrl}
                    target="_blank"
                    rel="noopener"
                    variant="outlined"
                    sx={{ mt: 2 }}
                >
                    Смотреть видео
                </Button>
            )}
        </Box>
    );
};

export default PressNewsDetailPage;
