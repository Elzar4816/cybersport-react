import React, { useState } from "react";
import {
  Box,
  Typography,
  Divider,
  Tabs,
  Tab,
  useMediaQuery,
} from "@mui/material";
import TeamRegistration from "./TeamRegistration";
import TournamentBrackets from "./TournamentBrackets";

import TeamProfiles from "./TeamProfiles";
import MediaArchive from "./MediaArchive";

const GovGamesPage = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [tab, setTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <Box
      sx={{ backgroundColor: "#121212", color: "white", paddingTop: "100px" }}
    >
      <Typography
        variant="h3"
        fontWeight="bold"
        gutterBottom
        textAlign="center"
        sx={{
          background: "linear-gradient(90deg, #00AEEF, #00FFD1)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Gov.Games
      </Typography>

      <Tabs
        value={tab}
        onChange={handleTabChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        centered={!isMobile}
        textColor="inherit"
        sx={{ borderBottom: 1, borderColor: "divider" }}
      >
        <Tab label="Описание" />
        <Tab label="Регистрация" />
        <Tab label="Сетки" />
        <Tab label="Рейтинги" />
        <Tab label="Команды" />
        <Tab label="Медиаархив" />
        <Tab label="Поддержка" />
        <Tab label="Админка" />
      </Tabs>

      <Box sx={{ p: isMobile ? 2 : 4 }}>
        {tab === 0 && (
          <Box>
            <Typography variant="h5" gutterBottom>
              Общее описание инициативы
            </Typography>
            <Typography paragraph>
              Gov.Games — это инициатива по развитию киберспорта среди
              государственных служащих. Участвуйте, формируйте команды и
              покажите, кто лучший в вашем ведомстве!
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="h6">Цитаты/позиции организаторов</Typography>
            <Typography>
              \"Это важный шаг в цифровизацию и развитие soft skills
              госслужащих\" — ГУ Укук
            </Typography>
            <Typography>
              \"Мы верим в потенциал кибердисциплин как инструмента
              тимбилдинга\" — KCF
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="h6">Актуальный турнир</Typography>
            <Typography>Название, статус, даты, инфографика</Typography>
          </Box>
        )}

        {tab === 1 && <TeamRegistration />}
        {tab === 2 && <TournamentBrackets />}

        {tab === 4 && <TeamProfiles />}
        {tab === 5 && <MediaArchive />}
      </Box>
    </Box>
  );
};

export default GovGamesPage;
