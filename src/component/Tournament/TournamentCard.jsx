// src/components/TournamentCard.jsx
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

const TournamentCard = ({ tournament }) => {
  return (
    <Card
      sx={{ backgroundColor: "#1c1b22", color: "white", mb: 2, width: "100%" }}
    >
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            variant="h6"
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            <img
              src="data:image/png;base64,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"
              alt="logo"
              style={{ height: "20px" }}
            />
            {tournament.name}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
            <CalendarMonthIcon fontSize="small" />
            <Typography variant="body2">{tournament.date}</Typography>
            <Chip
              label={tournament.status}
              size="small"
              sx={{ backgroundColor: "#444", color: "white", ml: 2 }}
            />
          </Box>
          <Typography variant="body2" sx={{ mt: 1 }}>
            {tournament.description}
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Призовой фонд: {tournament.prize}
          </Typography>
        </Box>

        <Box display="flex" flexDirection="column" alignItems="center" gap={1}>
          {tournament.status === "регистрация" ? (
            <Button variant="contained" color="primary">
              Регистрация
            </Button>
          ) : tournament.status === "завершён" ? (
            <Button variant="outlined" color="secondary">
              Результаты
            </Button>
          ) : null}
        </Box>
      </CardContent>
    </Card>
  );
};

export default TournamentCard;
