// src/components/TournamentHero.jsx
import React from "react";
import { Box, Typography } from "@mui/material";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GroupIcon from "@mui/icons-material/Group";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";

import tournament_overlay from "../../assets/tournament_overlay.jpg";

const transition = { type: "spring", duration: 3 };

const TournamentHero = () => {
  return (
    <Box
      sx={{
        mt: "102px",
        px: 4,
        py: 8,
        color: "white",
        borderRadius: "12px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "stretch",
          gap: 6,
        }}
      >
        {/* Левая часть */}
        <Box sx={{ flex: 1, position: "relative" }}>
          {/* Блик/фон */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: -50,
              width: 200,
              height: 200,
              bgcolor: "#fe7700",
              borderRadius: "50%",
              opacity: 0.1,
              zIndex: 0,
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: 250,
              left: 500,
              width: 200,
              height: 200,
              bgcolor: "#fe7700",
              borderRadius: "50%",
              opacity: 0.1,
              zIndex: 0,
            }}
          />

          {/* Контент */}
          <Box sx={{ position: "relative", zIndex: 1 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                mb: 2,

                animation: "fadeIn 1s ease forwards",
              }}
            >
              Киберспортивные Турниры
            </Typography>
            <Typography
              sx={{
                mb: 4,
                maxWidth: "675px",
                textAlign: "left",

                animation: "fadeIn 1s ease forwards",
              }}
            >
              Киберспортивные турниры — одно из приоритетных направлений
              <span style={{ color: "#ac5864" }}>
                {" "}
                Кыргызской Федерации Киберспорта
              </span>
              . На нашей платформе вы найдете всю актуальную информацию о самых
              значимых событиях и их особенностях.{" "}
            </Typography>
            <Typography
              sx={{
                mb: 4,
                maxWidth: "675px",
                textAlign: "left",

                animation: "fadeIn 1s ease forwards",
              }}
            >
              Федерация организует и освещает чемпионаты по таким дисциплинам,
              как Dota 2, Counter-Strike 2, Mobile Legends, League of Legends,
              Deadlock и другим популярным играм. Участие в турнирах открывает
              геймерам путь к профессиональному росту, а зрители получают
              захватывающие эмоции, наблюдая за сражениями лучших игроков
              страны. Активное развитие киберспортивной сцены способствует росту
              сообщества комментаторов, стримеров и аналитиков, объединяя всех,
              кто живёт игрой.
            </Typography>
          </Box>
        </Box>

        {/* Правая часть */}
        <Box sx={{ flex: 1, position: "relative", minHeight: "350px" }}>
          {/* Фон и overlay */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              zIndex: 0,
              pointerEvents: "none",
            }}
          >
            <motion.img
              src={tournament_overlay}
              alt="tournament-overlay"
              initial={{ right: "11rem", opacity: 0 }}
              whileInView={{ right: "0rem", opacity: 0.4 }}
              transition={transition}
              style={{
                position: "absolute",
                right: 0,
                width: "100%",
              }}
            />
          </Box>

          {/* Анимационные блоки */}
          <Box
            sx={{
              position: "absolute",
              bottom: "0px", // отступ снизу внутри картинки — можешь подкорректировать
              left: "0",
              right: "0",
              display: "flex",
              justifyContent: "center", // выравнивание по центру по горизонтали
              gap: 3,
              zIndex: 1,
            }}
          >
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={transition}
              style={infoBoxStyle}
            >
              <WhatshotIcon sx={iconStyle} />
              <div>
                <span style={labelStyle}>Текущие турниры</span>
                <div style={counterStyle}>
                  <NumberCounter start={0} end={3} delay="2" />
                  <span>активных</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ ...transition, delay: 0.5 }}
              style={infoBoxStyle}
            >
              <EmojiEventsIcon sx={iconStyle} />
              <div>
                <span style={labelStyle}>Завершено турниров</span>
                <div style={numberOnlyStyle}>
                  <NumberCounter start={0} end={12} delay="2" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ ...transition, delay: 1 }}
              style={infoBoxStyle}
            >
              <GroupIcon sx={iconStyle} />
              <div>
                <span style={labelStyle}>Участников всего</span>
                <div style={counterStyle}>
                  <NumberCounter start={0} end={340} delay="2" />
                  <span>+</span>
                </div>
              </div>
            </motion.div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const infoBoxStyle = {
  background: "#1f4068",
  padding: "1rem 1.5rem",
  borderRadius: "12px",
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  minWidth: 180,
};

const iconStyle = {
  fontSize: 40,
  color: "#ff5722",
};

const labelStyle = {
  fontSize: "14px",
};

const counterStyle = {
  display: "flex",
  alignItems: "center",
  gap: "4px",
  fontSize: "18px",
  marginTop: "4px",
  fontWeight: "bold",
};

const numberOnlyStyle = {
  fontWeight: "bold",
  fontSize: "18px",
  marginTop: "4px",
};

export default TournamentHero;
