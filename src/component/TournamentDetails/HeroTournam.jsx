import React, { useState } from "react";
import "./HeroTourname.css";
import Banner from "../../assets/gov_banner.png";
import { Box } from "@mui/material";
import RightNewsSidebar from "./RightNewsSidebar";
import RegistrationModal from "./RegistrationModal";
import {
  SingleEliminationBracket,
  Match,
} from "@g-loot/react-tournament-brackets";
const TournamentCard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState("cs2");
  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="settings-panel">
            <h2 className="section-title">Формат и настройки</h2>
            <div className="settings-row">
              <span className="label">Игра</span>
              <span className="value">СS2/DOTA2</span>
            </div>
            <div className="settings-row">
              <span className="label">Размер команды</span>
              <span className="value">5x5</span>
            </div>
            <div className="settings-row">
              <span className="label">Старт</span>
              <span className="value">28 мая 2025, 17:00</span>
            </div>
            <div className="settings-row">
              <span className="label">Мест</span>
              <span className="value">32 команды</span>
            </div>
            <div className="settings-row">
              <span className="label">Формат</span>
              <span className="value">bo1</span>
            </div>
            <div className="settings-row">
              <span className="label">Место проведения</span>
              <span className="value">г. Бишкек,IT-хаб TechnoPark </span>
            </div>
          </div>
        );
      case "chat":
        return (
          <p style={{ color: "white" }}>Раздел "Чат" будет добавлен позже.</p>
        );
      case "howto":
        return (
          <div className="howto-container">
            <h2 className="section-title">Как принять участие</h2>

            <p className="howto-intro">
              Участвуйте в кибертурнире <strong>Gov.Games</strong> — это просто!
              Следуйте шагам ниже, чтобы не упустить свой шанс на победу.
            </p>

            <div className="howto-step">
              <h3> 1. Регистрация</h3>
              <ul>
                <li>
                  Соберите команду из 5 участников, представляющих вашу
                  организацию.
                </li>
                <li>
                  Нажмите кнопку <strong>"РЕГИСТРАЦИЯ"</strong> выше и заполните
                  форму.
                </li>
                <li>Убедитесь, что вся информация указана корректно.</li>
              </ul>
            </div>

            <div className="howto-step">
              <h3>2. Подтверждение участия</h3>
              <ul>
                <li>После подачи заявки организаторы проверят её.</li>
                <li>
                  На почту капитана команды придёт уведомление о подтверждении.
                </li>
                <li>Ваша команда будет добавлена в список участников.</li>
              </ul>
            </div>

            <div className="howto-step">
              <h3>3. Расписание и сетка</h3>
              <ul>
                <li>
                  За день до начала турнира будет опубликовано расписание
                  матчей.
                </li>
                <li>
                  Сетка турнира будет доступна во вкладке{" "}
                  <strong>"Сетка"</strong>.
                </li>
                <li>
                  Команды обязаны находиться в онлайне за 15 минут до начала
                  матча.
                </li>
              </ul>
            </div>

            <div className="howto-step">
              <h3>4. Проведение матчей</h3>
              <ul>
                <li>Каждый матч проходит по формату Best of 1 (один раунд).</li>
                <li>Капитан команды получает ссылку на игровую комнату.</li>
                <li>Победитель матча определяется системой автоматически.</li>
              </ul>
            </div>

            <div className="howto-step">
              <h3>5. Победа и награды</h3>
              <ul>
                <li>Победители полуфиналов проходят в финал.</li>
                <li>Три лучших команды получат ценные призы и дипломы.</li>
                <li>Финалисты будут приглашены на офлайн-награду.</li>
              </ul>
            </div>

            <div className="howto-step">
              <h3>Вопросы и поддержка</h3>
              <ul>
                <li>
                  Свяжитесь с организаторами через вкладку{" "}
                  <strong>"Поддержка"</strong>.
                </li>
                <li>
                  Следите за новостями в разделе <strong>"Новости"</strong> или
                  в чате турнира.
                </li>
                <li>
                  Телеграм-бот для уведомлений: <code>@GovGamesBot</code>
                </li>
              </ul>
            </div>
          </div>
        );
      case "participants":
        return (
          <>
            <h2 className="section-title">
              Команды зарегистрированные на турнире
            </h2>
            <div className="participants-list">
              {[
                {
                  name: "V1ENOM",
                  avatar:
                    "https://cdn-icons-png.flaticon.com/512/188/188987.png",
                },
                {
                  name: "Team Phoenix",
                  avatar:
                    "https://cdn-icons-png.flaticon.com/512/149/149071.png",
                },
                {
                  name: "CyberGuard",
                  avatar:
                    "https://cdn-icons-png.flaticon.com/512/2922/2922510.png",
                },
                {
                  name: "CodeForce",
                  avatar:
                    "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
                },
                {
                  name: "SecureOps",
                  avatar:
                    "https://cdn-icons-png.flaticon.com/512/236/236831.png",
                },
                {
                  name: "AlphaGov",
                  avatar:
                    "https://cdn-icons-png.flaticon.com/512/924/924915.png",
                },
              ].map((team, idx) => (
                <div key={idx} className="participant-card">
                  <img
                    src={team.avatar}
                    alt="Аватар"
                    className="participant-avatar"
                  />
                  <div className="participant-name">{team.name}</div>
                </div>
              ))}
            </div>
          </>
        );
      case "bracket":
        const cs2Matches = [
          {
            id: 1,
            nextMatchId: 5,
            tournamentRoundText: "1/4",
            participants: [
              { id: "p1", name: "Ала-Тоо Warriors" },
              { id: "p2", name: "Беш-Кемпир Eagles" },
            ],
          },
          {
            id: 2,
            nextMatchId: 5,
            tournamentRoundText: "1/4",
            participants: [
              { id: "p3", name: "Манас Falcons" },
              { id: "p4", name: "Жаштар Wolves" },
            ],
          },
          {
            id: 3,
            nextMatchId: 6,
            tournamentRoundText: "1/4",
            participants: [
              { id: "p5", name: "Тянь-Шан Lions" },
              { id: "p6", name: "Нарын Tigers" },
            ],
          },
          {
            id: 4,
            nextMatchId: 6,
            tournamentRoundText: "1/4",
            participants: [
              { id: "p7", name: "Ош Bears" },
              { id: "p8", name: "Чүй Falcons" },
            ],
          },
          {
            id: 5,
            nextMatchId: 7,
            tournamentRoundText: "1/2",
            participants: [],
          },
          {
            id: 6,
            nextMatchId: 7,
            tournamentRoundText: "1/2",
            participants: [],
          },
          { id: 7, tournamentRoundText: "Финал", participants: [] },
        ];

        const dota2Matches = [
          {
            id: 1,
            nextMatchId: 5,
            tournamentRoundText: "1/4",
            participants: [
              { id: "p1", name: "V1ENOM" },
              { id: "p2", name: "Team Phoenix" },
            ],
          },
          {
            id: 2,
            nextMatchId: 5,
            tournamentRoundText: "1/4",
            participants: [
              { id: "p3", name: "CyberGuard" },
              { id: "p4", name: "CodeForce" },
            ],
          },
          {
            id: 3,
            nextMatchId: 6,
            tournamentRoundText: "1/4",
            participants: [
              { id: "p5", name: "SecureOps" },
              { id: "p6", name: "AlphaGov" },
            ],
          },
          {
            id: 5,
            nextMatchId: 7,
            tournamentRoundText: "1/2",
            participants: [], // Победители матчей 1 и 2
          },
          {
            id: 6,
            nextMatchId: 7,
            tournamentRoundText: "1/2",
            participants: [], // Победитель матча 3 и автоматический проход
          },
          {
            id: 7,
            tournamentRoundText: "Финал",
            participants: [], // Победители матчей 5 и 6
          },
        ];

        return (
          <Box sx={{ color: "white" }}>
            <h2 className="section-title">Сетка турнира</h2>
            <Box sx={{ mb: 2 }}>
              <select
                value={selectedGame}
                onChange={(e) => setSelectedGame(e.target.value)}
                style={{
                  padding: "8px 12px",
                  borderRadius: 8,
                  backgroundColor: "#222",
                  color: "#fff",
                  border: "1px solid #555",
                  fontWeight: "bold",
                }}
              >
                <option value="cs2">CS2</option>
                <option value="dota2">Dota 2</option>
              </select>
            </Box>
            <Box
              sx={{
                overflowX: "auto",
                background: "#1a1a1a",
                borderRadius: 2,
                p: 2,
                height: "500px",
              }}
            >
              <SingleEliminationBracket
                matches={selectedGame === "cs2" ? cs2Matches : dota2Matches}
                matchComponent={Match}
              />
            </Box>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap", // Позволяет перенос блоков
        alignItems: "flex-start",
        gap: "24px",
      }}
    >
      {/* Основной контент турнира */}
      <div
        className="tournament-card"
        style={{
          flex: "1 1 0",
          minWidth: 0,
        }}
      >
        <div className="banner-section">
          <img src={Banner} alt="PUBG Banner" className="banner-image" />
        </div>
        <div className="info-grid">
          <div>
            <div className="value">27.05.2025</div>
            <div className="desc">Регистрация</div>
          </div>
          <div>
            <div className="value">30.05.2025</div>
            <div className="desc">Начало турнира</div>
          </div>
          <div>
            <div className="value">10.06.2025</div>
            <div className="desc">Конец турнира</div>
          </div>
          <div>
            <div className="value">5×5</div>
            <div className="desc">Формат</div>
          </div>
          <div>
            <div className="value">
              20000 <span className="currency">$</span>
            </div>
            <div className="desc">Призовой фонд</div>
          </div>
        </div>

        <div className="tournament-actions">
          <div className="registration-status">ОТКРЫТА РЕГИСТРАЦИЯ</div>
          <h1 className="tournament-title">
            Gov.Games — Кибертурнир между госорганами
          </h1>
          <button
            className="register-button"
            onClick={() => setModalOpen(true)}
          >
            РЕГИСТРАЦИЯ
          </button>

          <div className="nav-tabs">
            <button
              className={`tab ${activeTab === "overview" ? "active" : ""}`}
              onClick={() => setActiveTab("overview")}
            >
              Обзор
            </button>

            <button
              className={`tab ${activeTab === "howto" ? "active" : ""}`}
              onClick={() => setActiveTab("howto")}
            >
              Как играть
            </button>
            <button
              className={`tab ${activeTab === "participants" ? "active" : ""}`}
              onClick={() => setActiveTab("participants")}
            >
              Участники
            </button>
            <button
              className={`tab ${activeTab === "bracket" ? "active" : ""}`}
              onClick={() => setActiveTab("bracket")}
            >
              Сетка
            </button>
          </div>

          {/* Контент активной вкладки */}
          <div className="tab-content">{renderTabContent()}</div>
        </div>
      </div>

      {/* Правая колонка — сайдбар с новостями и видео */}

      <Box
        sx={{
          flex: {
            xs: "1 1 100%",
            md: "0 0 300px",
          },
          maxWidth: {
            xs: "100%",
            md: "300px",
          },
          width: "100%",
        }}
      >
        <RightNewsSidebar />
      </Box>

      <RegistrationModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default TournamentCard;
