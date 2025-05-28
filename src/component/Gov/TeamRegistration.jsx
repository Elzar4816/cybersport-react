import React from "react";
import "./TournamentCard.css";

const TournamentCard = () => {
  return (
    <div className="tournament-card">
      <div className="banner-section">
        <img
          src="/assets/pubg-banner.png" // Замените на путь к вашему изображению
          alt="PUBG Banner"
          className="banner-image"
        />
        <div className="overlay">
          <div className="top-section">
            <img
              src="/assets/pubg-logo.png"
              alt="PUBG Logo"
              className="pubg-logo"
            />
            <div className="prize">
              <div className="label">Призовой фонд</div>
              <div className="amount">
                720 <span className="currency">UC</span>
              </div>
            </div>
          </div>
          <div className="info-grid">
            <div>
              <div className="value">17</div>
              <div className="desc">До начала</div>
            </div>
            <div>
              <div className="value">1</div>
              <div className="desc">Участников</div>
            </div>
            <div>
              <div className="value">64</div>
              <div className="desc">Призов</div>
            </div>
            <div>
              <div className="value">1×1</div>
              <div className="desc">Формат</div>
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="registration-status">ОТКРЫТА РЕГИСТРАЦИЯ</div>
        <h2>PUBG MOBILE SOLO FAST CUP #1021</h2>
        <button className="register-btn">РЕГИСТРАЦИЯ</button>
      </div>
    </div>
  );
};

export default TournamentCard;
