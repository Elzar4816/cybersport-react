import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Snackbar,
  Alert,
  IconButton,
  MenuItem,
  Typography,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";

const PressTournamentsPage = () => {
  const [tournaments, setTournaments] = useState([]);
  const [games, setGames] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [form, setForm] = useState(defaultForm());
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);
  const [tournamentToDelete, setTournamentToDelete] = useState(null);

  useEffect(() => {
    fetchTournaments();
    fetchGames();
  }, []);

  const fetchTournaments = async () => {
    try {
      const res = await axios.get("/api/tournaments");
      setTournaments(res.data);
    } catch (err) {
      console.error("Ошибка при загрузке турниров", err);
    }
  };

  const fetchGames = async () => {
    const res = await axios.get("/api/games");
    setGames(res.data);
  };

  const handleSave = async () => {
    const token = localStorage.getItem("token");
    try {
      const payload = {
        ...form,
        start_date: new Date(form.start_date).toISOString().slice(0, 10),
        end_date: new Date(form.end_date).toISOString().slice(0, 10),
      };

      if (editIndex !== null) {
        const tournamentId = tournaments[editIndex].id;
        await axios.put(`/api/press/tournaments/${tournamentId}`, payload, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setSnackbar({
          open: true,
          message: "Турнир обновлён",
          severity: "info",
        });
      } else {
        await axios.post("/api/press/tournaments", payload, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setSnackbar({
          open: true,
          message: "Турнир создан",
          severity: "success",
        });
      }

      fetchTournaments();
      setOpenDialog(false);
      setForm(defaultForm());
      setEditIndex(null);
    } catch (err) {
      console.error("Ошибка при сохранении", err);
      setSnackbar({
        open: true,
        message: "Ошибка при сохранении турнира",
        severity: "error",
      });
    }
  };

  const handleDeleteClick = (tournament) => {
    setTournamentToDelete(tournament);
    setConfirmDeleteOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (!tournamentToDelete) return;
    setConfirmDeleteOpen(false);
    const token = localStorage.getItem("token");
    try {
      await axios.delete(`/api/press/tournaments/${tournamentToDelete.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSnackbar({
        open: true,
        message: "Турнир удалён",
        severity: "success",
      });
      fetchTournaments();
    } catch {
      setSnackbar({
        open: true,
        message: "Ошибка при удалении турнира",
        severity: "error",
      });
    }
  };

  const openEdit = (index) => {
    const t = tournaments[index];
    setForm({
      title: t.title,
      description: t.description,
      region: t.region,
      start_date: t.start_date,
      end_date: t.end_date,
      status: t.status,
      prize_pool: t.prize_pool,
      stage: t.stage,
      is_open: t.is_open,
      game_id: t.game?.id || "",
    });
    setEditIndex(index);
    setOpenDialog(true);
  };

  return (
    <Box sx={{ px: 4, py: 10, color: "white", marginTop: "60px" }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Управление турнирами
      </Typography>
      <Button
        variant="contained"
        onClick={() => setOpenDialog(true)}
        startIcon={<AddIcon />}
        sx={{ mb: 3 }}
      >
        Добавить турнир
      </Button>

      {tournaments.map((t, i) => (
        <Box
          key={t.id}
          sx={{
            bgcolor: "#1e1e1e",
            p: 2,
            mb: 2,
            borderRadius: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <Typography fontWeight="bold">{t.title}</Typography>
            <Typography variant="body2" sx={{ color: "#bbb" }}>
              {t.region} | {t.status}
            </Typography>
          </div>
          <div>
            <IconButton onClick={() => openEdit(i)}>
              <EditIcon sx={{ color: "orange" }} />
            </IconButton>
            <IconButton onClick={() => handleDeleteClick(t)}>
              <DeleteIcon sx={{ color: "red" }} />
            </IconButton>
          </div>
        </Box>
      ))}

      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>
          {editIndex !== null ? "Редактировать турнир" : "Создать турнир"}
        </DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            margin="dense"
            label="Название"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
          <TextField
            fullWidth
            margin="dense"
            label="Описание"
            multiline
            rows={3}
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
          <TextField
            fullWidth
            margin="dense"
            label="Регион"
            value={form.region}
            onChange={(e) => setForm({ ...form, region: e.target.value })}
          />
          <TextField
            fullWidth
            margin="dense"
            type="date"
            label="Дата начала"
            InputLabelProps={{ shrink: true }}
            value={form.start_date?.slice(0, 10)}
            onChange={(e) => setForm({ ...form, start_date: e.target.value })}
          />
          <TextField
            fullWidth
            margin="dense"
            type="date"
            label="Дата окончания"
            InputLabelProps={{ shrink: true }}
            value={form.end_date?.slice(0, 10)}
            onChange={(e) => setForm({ ...form, end_date: e.target.value })}
          />
          <TextField
            fullWidth
            select
            label="Статус"
            margin="dense"
            value={form.status}
            onChange={(e) => setForm({ ...form, status: e.target.value })}
          >
            <MenuItem value="upcoming">Предстоящий</MenuItem>
            <MenuItem value="ongoing">В процессе</MenuItem>
            <MenuItem value="completed">Завершён</MenuItem>
          </TextField>
          <TextField
            fullWidth
            type="number"
            margin="dense"
            label="Призовой фонд (сом)"
            value={form.prize_pool || ""}
            onChange={(e) =>
              setForm({ ...form, prize_pool: parseInt(e.target.value) || null })
            }
          />
          <TextField
            fullWidth
            margin="dense"
            label="Стадия (например: групповая, финал)"
            value={form.stage}
            onChange={(e) => setForm({ ...form, stage: e.target.value })}
          />
          <TextField
            fullWidth
            select
            label="Игра"
            margin="dense"
            value={form.game_id}
            onChange={(e) => setForm({ ...form, game_id: e.target.value })}
          >
            {games.map((g) => (
              <MenuItem key={g.id} value={g.id}>
                {g.name}
              </MenuItem>
            ))}
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Отмена</Button>
          <Button onClick={handleSave} variant="contained">
            {editIndex !== null ? "Сохранить" : "Создать"}
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={confirmDeleteOpen}
        onClose={() => setConfirmDeleteOpen(false)}
      >
        <DialogTitle>Подтверждение удаления</DialogTitle>
        <DialogContent>
          <Typography>
            Вы уверены, что хотите удалить турнир{" "}
            <strong>{tournamentToDelete?.title}</strong>?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setConfirmDeleteOpen(false)}>Отмена</Button>
          <Button
            onClick={handleConfirmDelete}
            variant="contained"
            color="error"
          >
            Удалить
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert severity={snackbar.severity} sx={{ width: "100%" }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

function defaultForm() {
  return {
    title: "",
    description: "",
    region: "",
    start_date: "",
    end_date: "",
    status: "upcoming",
    prize_pool: null,
    stage: "",
    is_open: true,
    game_id: "",
  };
}

export default PressTournamentsPage;
