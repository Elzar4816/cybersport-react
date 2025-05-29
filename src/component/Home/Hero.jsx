import React from "react";
import { Box, Button, Typography } from "@mui/material";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GroupIcon from "@mui/icons-material/Group";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";
import bannerImg from "../../assets/banner.png";
import tournament_overlay from "../../assets/tournament_overlay.jpg";
import { useNavigate } from "react-router-dom";
const transition = { type: "spring", duration: 3 };

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div style={{ maxWidth: "100vw", overflowX: "hidden" }}>
      <div>
        <div>
          <div
            style={{
              textAlign: "center",
              width: "100%",
              height: "80px",
              backgroundColor: "rgb(39 39 43)",
              fontSize: "18px",
              color: "#a3a3a3",
              fontWeight: "500",
              letterSpacing: "2px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "inset 7px 0 9px -7px rgba(0,0,0,.5)",

              marginTop: "104px",
            }}
          >
            Кыргызская Федерация Киберспорта
          </div>
          <Box
            sx={{
              width: "100%",
              overflowX: "hidden",
              height: "500px",
              backgroundImage: `url(${bannerImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              textShadow: "0 4px 12px rgba(0,0,0,0.6)",
              textAlign: "center",
              px: 2,
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              style={{ fontSize: "36px", fontWeight: "bold" }}
            >
              Кыргызская Федерация Киберспорта
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              style={{
                fontSize: "17px",
                marginTop: "16px",
                maxWidth: "700px",
                width: "100%",
                wordBreak: "break-word",
                overflowWrap: "break-word",
                padding: "0 1rem",
                boxSizing: "border-box",
              }}
            >
              Общественное объединение (ОО), основными целями которого являются:
              развитие и популяризация киберспорта в Кыргызской Республике;
              создание киберспортивной эко-системы и продвижение кыргызского
              киберспорта в мировое сообщество.
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              style={{ fontSize: "36px", fontWeight: "bold" }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#ac5864",
                  borderRadius: "30px",
                  px: 4,
                  py: 1.5,
                  marginTop: "20px",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#922f3d",
                  },
                }}
                onClick={() => navigate("/about")}
              >
                Подробнее
              </Button>
            </motion.div>
          </Box>
        </div>
        {/* Контент и анимация */}
        <Box
          sx={{
            mt: "0px",
            px: 4,
            py: 8,
            color: "white",
            borderRadius: "12px",
            overflow: "hidden",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {/* Текстовый контент */}
          <Box
            sx={{
              maxWidth: "800px",
              width: "100%",
              mb: 6,
              overflowWrap: "break-word", // предотвращает вылет текста
              wordBreak: "break-word", // дополнительная защита
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                mb: 2,
                animation: "fadeIn 1s ease forwards",
                fontSize: {
                  xs: "1.5rem", // <600px
                  sm: "2rem", // ≥600px
                  md: "2.5rem", // ≥900px
                },
              }}
            >
              Киберспортивные Турниры
            </Typography>
            <Typography
              sx={{
                mb: 4,
                animation: "fadeIn 1s ease forwards",
              }}
            >
              Киберспортивные турниры — одно из приоритетных направлений{" "}
              <span style={{ color: "#ac5864" }}>
                Кыргызской Федерации Киберспорта
              </span>
              . На нашей платформе вы найдете всю актуальную информацию о самых
              значимых событиях и их особенностях.
            </Typography>
          </Box>

          {/* Анимационные блоки */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 3,
              flexWrap: "wrap",
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
                  <NumberCounter start={0} end={1} delay="2" />
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
                  <NumberCounter start={0} end={3} delay="2" />
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
      </div>
    </div>
  );
};

const infoBoxStyle = {
  background: "#1f4068",
  padding: "1rem 1.5rem",
  borderRadius: "12px",
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  flex: "1 1 200px", // ✅ авторастягивание, но минимальная ширина — 200px
  maxWidth: "300px", // ✅ чтобы блоки не становились слишком широкими
  boxSizing: "border-box", // ✅ учитываем padding в ширину
};

const iconStyle = {
  fontSize: 40,
  color: "#ff5722",
};

const labelStyle = {
  fontSize: "clamp(12px, 1.2vw, 14px)",
};

const counterStyle = {
  display: "flex",
  alignItems: "center",
  gap: "4px",
  fontSize: "clamp(14px, 1.8vw, 18px)",
  marginTop: "4px",
  fontWeight: "bold",
};

const numberOnlyStyle = {
  fontWeight: "bold",
  fontSize: "clamp(14px, 1.8vw, 18px)",
  marginTop: "4px",
};

export default Hero;
