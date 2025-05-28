import React, { useState } from "react";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import {
  SingleEliminationBracket,
  Match,
} from "@g-loot/react-tournament-brackets";

const dummyBrackets = {
  CS2: [
    {
      id: 1,
      nextMatchId: 5,
      tournamentRoundText: "1/4",
      participants: [
        { id: "p1", name: "KRG Police" },
        { id: "p2", name: "MinFin" },
      ],
    },
    {
      id: 2,
      nextMatchId: 5,
      tournamentRoundText: "1/4",
      participants: [
        { id: "p3", name: "MoE" },
        { id: "p4", name: "DigitalGov" },
      ],
    },
    { id: 5, tournamentRoundText: "Финал", participants: [] },
  ],
  "Dota 2": [
    {
      id: 1,
      nextMatchId: 3,
      tournamentRoundText: "1/2",
      participants: [
        { id: "p1", name: "MoCIS" },
        { id: "p2", name: "MoA" },
      ],
    },
    {
      id: 2,
      nextMatchId: 3,
      tournamentRoundText: "1/2",
      participants: [
        { id: "p3", name: "NSC" },
        { id: "p4", name: "KCF" },
      ],
    },
    { id: 3, tournamentRoundText: "Финал", participants: [] },
  ],
};

const TournamentBrackets = () => {
  const [selectedDiscipline, setSelectedDiscipline] = useState("CS2");
  const isMobile = useMediaQuery("(max-width:600px)");

  const matches = dummyBrackets[selectedDiscipline] || [];

  return (
    <Box
      sx={{ backgroundColor: "#1a1a1a", color: "#fff", p: 4, borderRadius: 2 }}
    >
      <Typography variant="h5" gutterBottom>
        Турнирные сетки
      </Typography>

      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel sx={{ color: "#aaa" }}>Выберите дисциплину</InputLabel>
        <Select
          value={selectedDiscipline}
          label="Выберите дисциплину"
          onChange={(e) => setSelectedDiscipline(e.target.value)}
          sx={{
            color: "#fff",
            borderColor: "#555",
            backgroundColor: "#2a2a2a",
          }}
        >
          {Object.keys(dummyBrackets).map((disc) => (
            <MenuItem key={disc} value={disc}>
              {disc}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {matches.length > 0 ? (
        <Box
          sx={{
            overflowX: "auto",
            background: "#121212",
            borderRadius: 2,
            p: 2,
            height: isMobile ? "auto" : "500px",
          }}
        >
          <SingleEliminationBracket matches={matches} matchComponent={Match} />
        </Box>
      ) : (
        <Typography variant="body1" color="gray">
          Для выбранной дисциплины пока нет матчей.
        </Typography>
      )}
    </Box>
  );
};

export default TournamentBrackets;
