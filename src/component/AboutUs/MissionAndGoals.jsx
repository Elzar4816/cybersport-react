import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import SchoolIcon from "@mui/icons-material/School";
import PublicIcon from "@mui/icons-material/Public";

const MissionAndGoals = () => {
  const goals = [
    {
      title: "Турниры и Лиги",
      description:
        "Федерация организует регулярные турниры и лиги по актуальным киберспортивным дисциплинам, обеспечивая честную конкуренцию и прозрачность проведения. Мы создаём платформу, где игроки и команды Кыргызстана могут проявить себя на национальной и международной сцене.",
      icon: <SportsEsportsIcon sx={{ fontSize: 50, color: "#ff9800" }} />,
    },
    {
      title: "Образование",
      description:
        "Федерация реализует образовательные программы и тренинги для игроков, тренеров и аналитиков, повышая профессиональный уровень всех участников киберспортивного сообщества. Мы стремимся развивать компетенции, которые помогут построить карьеру в индустрии киберспорта.",
      icon: <SchoolIcon sx={{ fontSize: 50, color: "#ff9800" }} />,
    },
    {
      title: "Инфраструктура и Признание",
      description:
        "Федерация взаимодействует с государственными и частными партнёрами для развития современной киберспортивной инфраструктуры в Кыргызстане. Наша цель — укрепить международный статус страны как полноправного участника глобальной киберспортивной экосистемы и привлечь инвестиции в отрасль",
      icon: <PublicIcon sx={{ fontSize: 50, color: "#ff9800" }} />,
    },
  ];

  return (
    <Box
      sx={{
        px: 4,
        py: 8,
        textAlign: "center",
        color: "#e0e0e0",
      }}
    >
      <Typography
        variant="h4"
        fontWeight="700"
        gutterBottom
        sx={{
          color: "#ffb347", // теплый золотистый цвет

          letterSpacing: "0.1em", // межбуквенный интервал — для воздуха
          mb: 3,
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        }}
      >
        Миссия и цели
      </Typography>

      <Typography
        variant="body1"
        sx={{
          maxWidth: 760,
          mx: "auto",
          fontSize: { xs: "1rem", md: "1.15rem" },
          mb: 6,
          lineHeight: 1.7,
          color: "#ddd",
          textShadow: "0 0 5px rgba(0, 0, 0, 0.7)",
          fontStyle: "italic",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          px: 2,
          userSelect: "text",
        }}
      >
        Наша миссия — развивать киберспорт в Кыргызской Республике, поддерживать
        молодых игроков, формировать условия для их профессионального
        становления и продвигать страну на международной киберспортивной арене.
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 7,
          flexWrap: "wrap",
        }}
      >
        {goals.map((goal, index) => (
          <Card
            key={index}
            sx={{
              backgroundColor: "#1e1e1e",
              color: "#fff",
              maxWidth: 370,
              flex: "1 1 250px",
              borderRadius: 2,
              border: "1px solid #333",
              textAlign: "center",
              py: 3,
              boxShadow: "0 0 10px rgba(255, 152, 0, 0.3)",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 0 20px rgba(255, 152, 0, 0.6)",
              },
            }}
          >
            <CardContent>
              <Box mb={1}>{goal.icon}</Box>

              <Typography
                variant="h6"
                fontWeight="bold"
                gutterBottom
                sx={{
                  color: "#ffb74d",
                }}
              >
                {goal.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "0.95rem",
                  lineHeight: 1.5,
                  color: "#ddd",
                  textShadow: "0 0 3px rgba(0, 0, 0, 0.7)",
                  px: 2,

                  mb: 1,
                  maxWidth: 400,
                }}
              >
                {goal.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default MissionAndGoals;
