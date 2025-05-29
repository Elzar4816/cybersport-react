import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
  FaInstagram,
  FaTelegramPlane,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import "./Contact.css";
import { Box } from "@mui/material";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-header">
        <h1>Связаться с нами</h1>
        <p>
          Мы всегда открыты для связи. Найдите нужную информацию ниже или
          отправьте сообщение через социальные сети.
        </p>
      </div>
      <div className="contact-grid">
        <div className="contact-card">
          <FaMapMarkerAlt className="icon" />
          <h3>НАШ ГЛАВНЫЙ ОФИС</h3>
          <p>Адрес: ж/м Арча-Бешик, ул. Береке 1/3, Бишкек</p>
        </div>
        <div className="contact-card">
          <FaPhoneAlt className="icon" />
          <h3>НОМЕР ТЕЛЕФОНА</h3>
          <p>+996 505 055 350</p>
        </div>

        <div className="contact-card">
          <FaEnvelope className="icon" />
          <h3>ЭЛ. АДРЕС</h3>
          <p>ylaitegin.a@gmail.com</p>
        </div>
      </div>

      <div className="contact-form-wrapper">
        <div className="contact-text">
          <h2>Связаться</h2>
          <p style={{ fontSize: "20px" }}>
            <strong>Кыргызская Киберспортивная Федерация</strong> — это
            официальная организация, продвигающая развитие киберспорта в
            Кыргызстане. Мы поддерживаем игроков, команды и организаторов,
            создавая условия для роста и международного сотрудничества.
          </p>
          <p style={{ fontSize: "20px" }}>
            Следите за нашими мероприятиями, турнирами и образовательными
            программами. Свяжитесь с нами для сотрудничества или участия в
            киберспортивной жизни страны!
          </p>

          <div className="social-icons">
            <a href="https://www.instagram.com/kcf_kg?igsh=MTNuNGdyMWZhNDEzYg==">
              <FaInstagram />
            </a>
            <a href="https://t.me/kyrgyz_cybersport_federation">
              <FaTelegramPlane />
            </a>
            <a href="https://www.tiktok.com/@kyrgyz_cybersport_fed?_t=ZS-8wl2cxV74sC&_r=1">
              <FaTiktok />
            </a>
            <a href="https://youtube.com/@kyrgyzcybersportfederation?si=-cCeDArW7IL8KWnL">
              <FaYoutube />
            </a>
          </div>
        </div>
        <Box
          sx={{
            width: "100%",
            height: 400,
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
          }}
        >
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2925.664733943851!2d74.53226816787506!3d42.83769535237121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec90e29222ea3%3A0xdfec14e573b54dfe!2z0YPQuy4g0JHQtdGA0LXQutC1LCDQkdC40YjQutC10Lo!5e0!3m2!1sru!2skg!4v1748274095120!5m2!1sru!2skg"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
      </div>
    </section>
  );
};

export default Contact;
