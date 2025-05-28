import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const teams = [
  {
    name: "ГУ Укук",
    logo: "https://via.placeholder.com/80x80.png?text=Укук",
    description:
      "Юридическое управление. Участвует в дисциплинах CS2 и Dota 2.",
    topPlayers: ["Иванов А.", "Петров Б.", "Сидоров В."],
    matchHistory: [
      "Победа над МинФин 2:1",
      "Поражение от KCF 0:2",
      "Победа над ГКНБ 2:0",
    ],
  },
  {
    name: "МинФин",
    logo: "https://via.placeholder.com/80x80.png?text=МинФин",
    description: "Министерство финансов. Сильная команда в CS2.",
    topPlayers: ["Ахматов К.", "Касымова Л.", "Исраилов Д."],
    matchHistory: ["Победа над ГосАрхив 2:1", "Поражение от Укук 1:2"],
  },
  {
    name: "KCF",
    logo: "https://via.placeholder.com/80x80.png?text=KCF",
    description:
      "Кыргызская Киберспортивная Федерация. Выступает вне конкурса.",
    topPlayers: ["Турдалиев Н.", "Садырбек А.", "Жумабаев Э."],
    matchHistory: ["Победа над всеми"],
  },
];

const TeamProfiles = () => {
  const [openTeam, setOpenTeam] = useState(null);

  const handleOpen = (team) => setOpenTeam(team);
  const handleClose = () => setOpenTeam(null);

  return (
    <Box
      sx={{ backgroundColor: "#1a1a1a", color: "#fff", p: 4, borderRadius: 2 }}
    >
      <Typography variant="h5" gutterBottom>
        Профили команд
      </Typography>

      <Grid container spacing={3}>
        {teams.map((team) => (
          <Grid item xs={12} sm={6} md={4} key={team.name}>
            <Card
              sx={{
                backgroundColor: "#2a2a2a",
                color: "#fff",
                cursor: "pointer",
                height: "100%",
              }}
              onClick={() => handleOpen(team)}
            >
              <CardMedia
                component="img"
                height="100"
                image={team.logo}
                alt={team.name}
                sx={{ objectFit: "contain", mt: 2 }}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {team.name}
                </Typography>
                <Typography variant="body2" color="gray">
                  {team.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {openTeam && (
        <Dialog open={true} onClose={handleClose} maxWidth="sm" fullWidth>
          <DialogTitle>{openTeam.name}</DialogTitle>
          <DialogContent>
            <Typography variant="subtitle1" gutterBottom>
              Топ-игроки:
            </Typography>
            <List dense>
              {openTeam.topPlayers.map((player, index) => (
                <ListItem key={index}>
                  <ListItemText primary={player} />
                </ListItem>
              ))}
            </List>
            <Typography variant="subtitle1" sx={{ mt: 2 }}>
              История матчей:
            </Typography>
            <List dense>
              {openTeam.matchHistory.map((match, index) => (
                <ListItem key={index}>
                  <ListItemText primary={match} />
                </ListItem>
              ))}
            </List>
          </DialogContent>
        </Dialog>
      )}
    </Box>
  );
};

export default TeamProfiles;
