import React, { useState } from "react";
import {
  Box,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const dummyRatings = {
  CS2: [
    { agency: "ГУ Укук", points: 88, wins: 6, mvp: 3 },
    { agency: "МинФин", points: 72, wins: 5, mvp: 2 },
    { agency: "ГосАрхив", points: 60, wins: 4, mvp: 1 },
  ],
  "Dota 2": [
    { agency: "Цифровое Агентство", points: 95, wins: 7, mvp: 4 },
    { agency: "ГКНБ", points: 70, wins: 5, mvp: 2 },
    { agency: "МинЭк", points: 50, wins: 3, mvp: 1 },
  ],
};

const criteria = ["points", "wins", "mvp"];

const AgencyRatings = () => {
  const [discipline, setDiscipline] = useState("CS2");
  const [sortBy, setSortBy] = useState("points");

  const sortedData = [...dummyRatings[discipline]].sort(
    (a, b) => b[sortBy] - a[sortBy]
  );

  return (
    <Box
      sx={{ backgroundColor: "#1a1a1a", color: "#fff", p: 4, borderRadius: 2 }}
    >
      <Typography variant="h5" gutterBottom>
        Рейтинг ведомств
      </Typography>

      <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
        <FormControl sx={{ minWidth: 180 }}>
          <InputLabel sx={{ color: "#ccc" }}>Дисциплина</InputLabel>
          <Select
            value={discipline}
            label="Дисциплина"
            onChange={(e) => setDiscipline(e.target.value)}
            sx={{ color: "#fff", backgroundColor: "#2a2a2a" }}
          >
            {Object.keys(dummyRatings).map((disc) => (
              <MenuItem key={disc} value={disc}>
                {disc}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 180 }}>
          <InputLabel sx={{ color: "#ccc" }}>Сортировать по</InputLabel>
          <Select
            value={sortBy}
            label="Сортировать по"
            onChange={(e) => setSortBy(e.target.value)}
            sx={{ color: "#fff", backgroundColor: "#2a2a2a" }}
          >
            {criteria.map((c) => (
              <MenuItem key={c} value={c}>
                {c === "points" ? "Баллы" : c === "wins" ? "Победы" : "MVP"}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <TableContainer component={Paper} sx={{ backgroundColor: "#2b2b2b" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "#00FFD1" }}>#</TableCell>
              <TableCell sx={{ color: "#00FFD1" }}>Ведомство</TableCell>
              <TableCell sx={{ color: "#00FFD1" }}>Баллы</TableCell>
              <TableCell sx={{ color: "#00FFD1" }}>Победы</TableCell>
              <TableCell sx={{ color: "#00FFD1" }}>MVP</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedData.map((row, index) => (
              <TableRow key={row.agency}>
                <TableCell sx={{ color: "#fff" }}>{index + 1}</TableCell>
                <TableCell sx={{ color: "#fff" }}>{row.agency}</TableCell>
                <TableCell sx={{ color: "#fff" }}>{row.points}</TableCell>
                <TableCell sx={{ color: "#fff" }}>{row.wins}</TableCell>
                <TableCell sx={{ color: "#fff" }}>{row.mvp}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AgencyRatings;
