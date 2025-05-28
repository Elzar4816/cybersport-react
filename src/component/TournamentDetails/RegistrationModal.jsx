import React, { useState } from "react";
import "./RegistrationModal.css";
import cs2Icon from "../../assets/csicons.png";
import dota2Icon from "../../assets/dota.png";
const RegistrationModal = ({ open, onClose }) => {
  const [selectedGame, setSelectedGame] = useState("cs2");
  const [selectedFileName, setSelectedFileName] = useState("");
  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <h2 className="modal-title">РЕГИСТРАЦИЯ</h2>

        <div className="tab-switcher">
          <button
            className={`tab ${selectedGame === "cs2" ? "active" : ""}`}
            onClick={() => setSelectedGame("cs2")}
          >
            <img src={cs2Icon} alt="CS2" className="game-icon" />
          </button>
          <button
            className={`tab ${selectedGame === "dota2" ? "active" : ""}`}
            onClick={() => setSelectedGame("dota2")}
          >
            <img src={dota2Icon} alt="Dota 2" className="game-icon" />
          </button>
        </div>

        <input className="input" placeholder="Почта" />
        <input className="input" placeholder="Название госоргана" />
        <input className="input" placeholder="Название команды" />
        <textarea
          className="textarea"
          placeholder="Состав (ФИО, должности, контакты)"
          rows={4}
        />

        <label className="file-upload">
          <span> Прикрепить письмо/приказ об участии</span>
          <input
            type="file"
            className="hidden-file-input"
            accept=".pdf,.doc,.docx,.jpg,.png"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                setSelectedFileName(file.name);
              }
            }}
          />
          {selectedFileName && (
            <div className="file-name">📎 {selectedFileName}</div>
          )}
        </label>

        <button className="register-btn">ЗАРЕГИСТРИРОВАТЬСЯ</button>
      </div>
    </div>
  );
};

export default RegistrationModal;
