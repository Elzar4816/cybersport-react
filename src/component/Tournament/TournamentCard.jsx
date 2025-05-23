import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const formatDate = (str) => {
  const date = new Date(str);
  return date.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });
};

const statusLabel = {
  upcoming: "Анонс",
  ongoing: "Регистрация",
  completed: "Завершён",
};

const TournamentCard = ({ tournament }) => {
  const { title, description, start_date, end_date, region, status, prize_pool } = tournament;

  return (
      <Card sx={{ backgroundColor: "#1c1b22", color: "white", mb: 2, width: "100%" }}>
        <CardContent
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
        >
          <Box>
            <Typography variant="h6" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {title}
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
              <CalendarMonthIcon fontSize="small" />
              <Typography variant="body2">
                {formatDate(start_date)} — {formatDate(end_date)}
              </Typography>
              <Chip
                  label={statusLabel[status] || status}
                  size="small"
                  sx={{ backgroundColor: "#444", color: "white", ml: 2 }}
              />
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
              <LocationOnIcon fontSize="small" />
              <Typography variant="body2">Регион: {region}</Typography>
            </Box>

            <Typography variant="body2" sx={{ mt: 1 }}>{description}</Typography>

            <Typography variant="body2" sx={{ mt: 1, fontWeight: "bold" }}>
              Призовой фонд: {prize_pool ? `${prize_pool} USD` : "—"}
            </Typography>
          </Box>

          <Box display="flex" flexDirection="column" alignItems="center" gap={1}>
            {status === "ongoing" ? (
                <Button variant="contained" color="primary">Регистрация</Button>
            ) : status === "completed" ? (
                <Button variant="outlined" color="secondary">Результаты</Button>
            ) : null}
          </Box>
        </CardContent>
      </Card>
  );
};

export default TournamentCard;
