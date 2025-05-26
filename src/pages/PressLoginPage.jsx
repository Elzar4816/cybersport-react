import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import gsap from "gsap";

const PressLoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const formRef = useRef(null);
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            formRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
        );
    }, []);

    const handleLogin = async () => {
        try {
            const res = await axios.post("/api/login", { username, password });
            localStorage.setItem("token", res.data.token);
            navigate("/press-panel");
        } catch (err) {
            setError("Неверный логин или пароль");
        }
    };

    return (
        <div
            style={{
                minHeight: "100vh",
                background: "linear-gradient(120deg, #0f2027, #203a43, #2c5364)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                padding: "20px",
            }}
        >
            <div
                ref={formRef}
                style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "16px",
                    padding: "40px",
                    maxWidth: "400px",
                    width: "100%",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
                    color: "white",
                }}
            >
                <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
                    Вход в пресс-панель
                </h2>

                <input
                    ref={usernameRef}
                    type="text"
                    placeholder="Логин"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            passwordRef.current?.focus();
                        }
                    }}
                    style={inputStyle}
                />
                <input
                    ref={passwordRef}
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleLogin();
                        }
                    }}
                    style={inputStyle}
                />
                <button style={buttonStyle} onClick={handleLogin}>
                    Войти
                </button>

                {error && (
                    <p style={{ color: "salmon", textAlign: "center", marginTop: "10px" }}>
                        {error}
                    </p>
                )}
            </div>
        </div>
    );
};

const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    marginBottom: "16px",
    borderRadius: "8px",
    border: "none",
    outline: "none",
    fontSize: "1rem",
    backgroundColor: "rgba(255,255,255,0.1)",
    color: "white",
    backdropFilter: "blur(4px)",
};

const buttonStyle = {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    fontWeight: "bold",
    fontSize: "1rem",
    backgroundColor: "#ac5864",
    color: "white",
    cursor: "pointer",
    transition: "background-color 0.3s",
};

export default PressLoginPage;
