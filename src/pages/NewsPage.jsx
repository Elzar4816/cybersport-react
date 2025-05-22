import React, { useEffect, useState } from "react";
import axios from "axios";

const NewsPage = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.get("/api/news")
            .then(res => setNews(res.data))
            .catch(err => console.error("Ошибка при загрузке новостей", err));
    }, []);

    return (
        <div style={{
            padding: "80px 40px",
            display: "grid",
            gap: "30px",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))"
        }}>
            {news.map((item) => (
                <div
                    key={item.id}
                    style={{
                        backgroundColor: "#1c1c1c",
                        borderRadius: "10px",
                        color: "white",
                        padding: "20px",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <h2>{item.title}</h2>
                    <p style={{fontSize: "14px", color: "#999"}}>
                        {new Date(item.date).toLocaleDateString()}
                    </p>
                    {item.imageUrl && (
                        <img
                            src={item.imageUrl}
                            alt="Картинка новости"
                            style={{
                                width: "100%",
                                height: "200px",
                                objectFit: "cover",
                                borderRadius: "6px",
                                marginTop: "10px"
                            }}
                        />
                    )}
                    <p style={{marginTop: "10px"}}>{item.content}</p>
                    {item.videoUrl && (
                        <a
                            href={item.videoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{marginTop: "auto", color: "#00AEEF", textDecoration: "underline"}}
                        >
                            Смотреть на YouTube
                        </a>
                    )}
                </div>
            ))}
        </div>

    );
};

export default NewsPage;
