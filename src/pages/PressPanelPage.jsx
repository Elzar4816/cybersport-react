import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PressPanelPage = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [videoUrl, setVideoUrl] = useState("");
    const [image, setImage] = useState(null);
    const [message, setMessage] = useState("");
    const [news, setNews] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchNews();
    }, []);

    const fetchNews = async () => {
        try {
            const res = await axios.get("/api/news");
            setNews(res.data);
        } catch (err) {
            console.error("Ошибка при загрузке новостей");
        }
    };

    const handleSubmit = async () => {
        if (!title || !content) return setMessage("Заполните все поля");

        const formData = new FormData();
        formData.append("title", title);
        formData.append("content", content);
        formData.append("videoUrl", videoUrl);
        if (image) formData.append("image", image);

        try {
            const token = localStorage.getItem("token");
            await axios.post("/api/press/news", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`,
                },
            });
            setMessage("Новость успешно создана");
            setTitle("");
            setContent("");
            setVideoUrl("");
            setImage(null);
            fetchNews(); // обновить список
        } catch (err) {
            setMessage("Ошибка при создании новости");
        }
    };

    return (
        <div style={{ padding: "80px 20px", maxWidth: "900px", margin: "0 auto", color: "white" }}>
            <h2>Пресс-панель: создание новости</h2>
            <input
                type="text"
                placeholder="Заголовок"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{ width: "100%", marginBottom: "10px", backgroundColor: "#333", color: "white", border: "none", padding: "10px" }}
            />
            <textarea
                placeholder="Содержимое"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                style={{ width: "100%", height: "120px", marginBottom: "10px", backgroundColor: "#333", color: "white", border: "none", padding: "10px" }}
            />
            <input
                type="text"
                placeholder="YouTube ссылка (необязательно)"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                style={{ width: "100%", marginBottom: "10px", backgroundColor: "#333", color: "white", border: "none", padding: "10px" }}
            />
            <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
                style={{ marginBottom: "10px" }}
            />
            <button onClick={handleSubmit}>Создать новость</button>
            {message && <p style={{ marginTop: "10px", color: "lightgray" }}>{message}</p>}

            <h3 style={{ marginTop: "40px" }}>Существующие новости</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "20px" }}>
                {news.map((item) => (
                    <div key={item.id} style={{
                        backgroundColor: "#222",
                        borderRadius: "10px",
                        display: "flex",
                        overflow: "hidden",
                        boxShadow: "0 0 8px rgba(0,0,0,0.5)"
                    }}>
                        {item.imageUrl && (
                            <img src={item.imageUrl} alt="preview" style={{ width: "200px", height: "auto", objectFit: "cover" }} />
                        )}
                        <div style={{ padding: "15px", flexGrow: 1 }}>
                            <h4 style={{ margin: "0 0 10px 0" }}>{item.title}</h4>
                            <p style={{ fontSize: "13px", color: "#bbb" }}>{new Date(item.date).toLocaleDateString()}</p>
                            <p>{item.content}</p>
                            {item.videoUrl && (
                                <a href={item.videoUrl} target="_blank" rel="noopener noreferrer" style={{ color: "#00AEEF" }}>
                                    Смотреть на YouTube
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PressPanelPage;
