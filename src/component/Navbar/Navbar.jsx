import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import StarIcon from "@mui/icons-material/Star";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import InfoIcon from "@mui/icons-material/Info";
const menuItems = [
  { label: "Главная", icon: <HomeIcon fontSize="small" />, path: "/" },
  {
    label: "Турниры",
    icon: <SportsEsportsIcon fontSize="small" />,
    path: "/tournaments",
  },
  {
    label: "Новости",
    icon: <AnnouncementIcon fontSize="small" />,
    path: "/news",
  },
  { label: "Рейтинг", icon: <StarIcon fontSize="small" />, path: "/" },
  { label: "О Федерации", icon: <InfoIcon fontSize="small" />, path: "/about" },
  {
    label: "Контакты",
    icon: <ContactMailIcon fontSize="small" />,
    path: "/contact",
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
          justifyContent: "space-between",
          marginTop: "15px",
          backgroundColor: "rgba(34, 34, 34, 0.7)",
          borderRadius: "10px",
          padding: "10px 20px",
          flexWrap: "wrap",
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{ height: "60px", marginRight: "20px" }}
        />

        {/* Меню — desktop */}
        <div className="menu-desktop">
          {menuItems.map((item, idx) => (
            <Link key={idx} to={item.path} style={{ textDecoration: "none" }}>
              <p style={menuItemStyle}>
                {item.icon} {item.label}
              </p>
            </Link>
          ))}
        </div>

        {/* Иконка бургер-меню */}
        <div className="menu-mobile-icon">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "transparent",
              border: "none",
              color: "white",
              fontSize: "28px",
              cursor: "pointer",
            }}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon fontSize="large" />}
          </button>
        </div>
      </div>

      {/* Боковое меню */}
      <div className={`side-menu ${menuOpen ? "open" : "closed"}`}>
        <div style={{ alignSelf: "flex-end" }}>
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              background: "transparent",
              border: "none",
              color: "white",
              fontSize: "28px",
              cursor: "pointer",
            }}
          >
            <CloseIcon />
          </button>
        </div>

        {menuItems.map((item, idx) => (
          <Link
            key={idx}
            to={item.path}
            style={{ textDecoration: "none" }}
            onClick={() => setMenuOpen(false)}
          >
            <p style={{ ...menuItemStyle, fontSize: "16px" }}>
              {item.icon} {item.label}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

const menuItemStyle = {
  color: "white",
  display: "flex",
  alignItems: "center",
  gap: "6px",
  fontSize: "14px",
  cursor: "pointer",
};

export default Navbar;
