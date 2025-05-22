import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PressLoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const res = await axios.post("/api/login", { username, password });
            localStorage.setItem("token", res.data.token); // сохраняем токен
            navigate("/press-panel"); // редирект
        } catch (err) {
            setError("Неверный логин или пароль");
        }
    };

    return (
        <div style={{ padding: "80px 20px", maxWidth: "400px", margin: "0 auto" }}>
            <h2>Вход для пресс-пользователя</h2>
            <input
                type="text"
                placeholder="Логин"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ width: "100%", marginBottom: "10px" }}
            />
            <input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ width: "100%", marginBottom: "10px" }}
            />
            <button onClick={handleLogin}>Войти</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
};

export default PressLoginPage;
