import React from "react";
import logo from "../../assets/logo.png";

import HomeIcon from "@mui/icons-material/Home";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import StarIcon from "@mui/icons-material/Star";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        display: "flex",
        justifyContent: "center",
        backdropFilter: "blur(4px)",
      }}
    >
      <div
        style={{
          width: "90%",
          display: "flex",
          alignItems: "center",
          marginTop: "20px",
          backgroundColor: "rgba(34, 34, 34, 0.7)",
          borderRadius: "10px",
          padding: "10px 20px",
        }}
      >
        {/* Логотип */}
        <img
          src={logo}
          alt="Logo"
          style={{ height: "60px", marginRight: "30px" }}
        />

        {/* Меню */}
        <div
          style={{
            display: "flex",
            gap: "30px",
            flexGrow: 1,
            justifyContent: "center",
          }}
        >
          <p style={menuItemStyle}>
            <HomeIcon fontSize="small" /> Главная
          </p>
          <p style={menuItemStyle}>
            <SportsEsportsIcon fontSize="small" /> Турниры
          </p>
          <p style={menuItemStyle}>
            <AnnouncementIcon fontSize="small" /> Новости
          </p>
          <p style={menuItemStyle}>
            <StarIcon fontSize="small" /> Рейтинг
          </p>
          <p style={menuItemStyle}>
            <ContactMailIcon fontSize="small" /> Контакты
          </p>
        </div>

        {/* Поиск и Войти */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "5px",
              padding: "4px 8px",
              color: "white",
            }}
          >
            <SearchIcon fontSize="small" />
            <input
              type="text"
              placeholder="Поиск..."
              style={{
                background: "transparent",
                border: "none",
                outline: "none",
                color: "white",
                marginLeft: "5px",
              }}
            />
          </div>

          <button
            style={{
              backgroundColor: "#00AEEF",
              border: "none",
              color: "white",
              padding: "8px 16px",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Войти
          </button>
        </div>
      </div>
    </div>
  );
};

// Стили для пунктов меню
const menuItemStyle = {
  color: "white",
  display: "flex",
  alignItems: "center",
  gap: "6px",
  fontSize: "14px",
  cursor: "pointer",
};

export default Navbar;
