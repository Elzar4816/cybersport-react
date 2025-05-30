import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  IconButton,
  Snackbar,
  DialogContentText,
  Alert,
  Stack,
  Typography,
  Tooltip,
  Card,
  CardMedia,
  CardContent,
  Box,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import UploadIcon from "@mui/icons-material/UploadFile";
import PlusIcon from "../assets/plus-svgrepo-com.svg";
import { inputStyle } from "../theme/uiStyles";
import { useNavigate } from "react-router-dom";
const PressPanelPage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [image, setImage] = useState(null);
  const [news, setNews] = useState([]);
  const [createOpen, setCreateOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // ✅ добавлено состояние поиска

  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editingNews, setEditingNews] = useState(null);
  const [editImage, setEditImage] = useState(null); // новый файл
  const [editPreviewUrl, setEditPreviewUrl] = useState(""); // текущая картинка
  const [editImageDeleted, setEditImageDeleted] = useState(false);

  const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);
  const [newsToDelete, setNewsToDelete] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const res = await axios.get("/api/news");
      setNews(res.data);
    } catch {
      console.error("Ошибка при загрузке новостей");
    }
  };

  const filteredNews = news.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  ); // ✅ фильтрация по названию

  const handleSubmit = async () => {
    if (!title || !content) return;

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("videoUrl", videoUrl);
    if (image) formData.append("image", image);

    try {
      const token = localStorage.getItem("token");
      await axios.post("/api/press/news", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      setSnackbarMessage("Новость успешно создана");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);
      setTitle("");
      setContent("");
      setVideoUrl("");
      setImage(null);
      setCreateOpen(false);
      fetchNews();
    } catch {
      setSnackbarMessage("Ошибка при создании новости");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  const openEditDialog = (item) => {
    setEditingNews(item);
    setEditPreviewUrl(item.imageUrl || "");
    setEditImage(null);
    setEditDialogOpen(true);
  };

  const handleEditSave = async () => {
    const token = localStorage.getItem("token");
    try {
      const formData = new FormData();
      formData.append("title", editingNews.title);
      formData.append("content", editingNews.content);
      formData.append("videoUrl", editingNews.videoUrl);
      if (editImage) formData.append("image", editImage);
      formData.append("removeImage", editImageDeleted ? "true" : "false");

      await axios.put(`/api/press/news/${editingNews.id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      setEditImageDeleted(false);
      setEditDialogOpen(false);
      setSnackbarMessage("Новость обновлена");
      setSnackbarSeverity("info");
      setSnackbarOpen(true);
      fetchNews();
    } catch {
      setSnackbarMessage("Ошибка при обновлении");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  const handleDelete = (item) => {
    setNewsToDelete(item);
    setConfirmDeleteOpen(true);
  };

  const handleConfirmDelete = async () => {
    setConfirmDeleteOpen(false);
    const token = localStorage.getItem("token");
    try {
      await axios.delete(`/api/press/news/${newsToDelete.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSnackbarMessage("Новость удалена");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);
      fetchNews();
    } catch {
      setSnackbarMessage("Ошибка при удалении");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  return (
    <div style={{ padding: "120px 40px", color: "white" }}>
      <Tooltip title="Добавить новость">
        <Button
          variant="contained"
          onClick={() => setCreateOpen(true)}
          sx={{ mb: 3 }}
        >
          <img src={PlusIcon} alt="+" width={24} height={24} />
        </Button>
      </Tooltip>

      <Dialog
        open={createOpen}
        onClose={() => setCreateOpen(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle sx={{ bgcolor: "#ffffff", color: "#000000" }}>
          Создать новость
        </DialogTitle>
        <DialogContent sx={{ bgcolor: "#f8f8f8" }}>
          <TextField
            fullWidth
            margin="dense"
            label="Заголовок"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            fullWidth
            margin="dense"
            label="Содержимое"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            multiline
            rows={4}
          />
          <TextField
            fullWidth
            margin="dense"
            label="YouTube ссылка (необязательно)"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
          />
          <Stack direction="row" alignItems="center" spacing={2} sx={{ mt: 2 }}>
            <Button
              component="label"
              variant="outlined"
              startIcon={<UploadIcon />}
              sx={{ color: "#000000", borderColor: "#000000" }}
            >
              <input
                hidden
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </Button>
            <Typography variant="body2">
              {image?.name || "Файл не выбран"}
            </Typography>
          </Stack>
        </DialogContent>
        <DialogActions sx={{ bgcolor: "#ffffff" }}>
          <Button onClick={() => setCreateOpen(false)}>Отмена</Button>
          <Button onClick={handleSubmit} variant="contained">
            Создать
          </Button>
        </DialogActions>
      </Dialog>
      <TextField
        variant="outlined"
        size="small"
        placeholder="Поиск по заголовку..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        sx={{
          backgroundColor: "white",
          borderRadius: 1,
          width: 300,
          marginLeft: "10px",
          marginBottom: "20px",
        }}
      />
      <Box
        sx={{
          display: "grid",
          gap: 3,
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        }}
      >
        {filteredNews.map((item) => (
          <Card
            key={item.id}
            sx={{
              backgroundColor: "#1c1c1c",
              color: "white",
              borderRadius: 3,
              boxShadow: 3,
              display: "flex",
              flexDirection: "column",
              mb: 2,
              transition: "transform 0.2s, box-shadow 0.2s",
              "&:hover": {
                transform: "scale(1.02)",
                boxShadow: 6,
              },
            }}
          >
            {item.imageUrl && (
              <CardMedia
                component="img"
                height="200"
                image={item.imageUrl}
                alt={item.title || "Картинка новости"}
                sx={{
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                  objectFit: "cover",
                }}
              />
            )}

            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h6" component="h2" gutterBottom>
                {item.title}
              </Typography>

              <Typography
                variant="caption"
                sx={{ color: "#999", display: "block", mb: 1 }}
              >
                {new Date(item.date).toLocaleDateString()}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  opacity: 0.9,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  mb: 1,
                }}
              >
                {item.content}
              </Typography>

              {item.videoUrl && (
                <Button
                  href={item.videoUrl}
                  target="_blank"
                  rel="noreferrer"
                  variant="text"
                  sx={{ color: "#00AEEF", mb: 1 }}
                >
                  Смотреть на YouTube
                </Button>
              )}

              <Button
                variant="outlined"
                size="small"
                onClick={() => navigate(`/press/news/${item.id}`)}
              >
                Подробнее
              </Button>
            </CardContent>

            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                px: 1,
                pb: 1,
              }}
            >
              <IconButton onClick={() => openEditDialog(item)}>
                <EditIcon sx={{ color: "orange" }} />
              </IconButton>
              <IconButton onClick={() => handleDelete(item)}>
                <DeleteIcon sx={{ color: "red" }} />
              </IconButton>
            </Box>
          </Card>
        ))}
      </Box>

      <Dialog open={editDialogOpen} onClose={() => setEditDialogOpen(false)}>
        <DialogTitle>Редактировать новость</DialogTitle>
        <DialogContent>
          <TextField
            label="Заголовок"
            value={editingNews?.title || ""}
            onChange={(e) =>
              setEditingNews({ ...editingNews, title: e.target.value })
            }
            fullWidth
            margin="dense"
          />
          <TextField
            label="Содержимое"
            value={editingNews?.content || ""}
            onChange={(e) =>
              setEditingNews({ ...editingNews, content: e.target.value })
            }
            fullWidth
            margin="dense"
            multiline
            rows={4}
          />
          <TextField
            label="Ссылка на YouTube"
            value={editingNews?.videoUrl || ""}
            onChange={(e) =>
              setEditingNews({ ...editingNews, videoUrl: e.target.value })
            }
            fullWidth
            margin="dense"
          />
          <div
            onDrop={(e) => {
              e.preventDefault();
              const file = e.dataTransfer.files[0];
              setEditImage(file);
              setEditPreviewUrl(URL.createObjectURL(file));
            }}
            onDragOver={(e) => e.preventDefault()}
            style={{
              border: "2px dashed #aaa",
              borderRadius: 10,
              padding: 16,
              marginTop: 16,
              textAlign: "center",
              position: "relative",
              backgroundColor: "#f9f9f9",
            }}
          >
            {editPreviewUrl ? (
              <div style={{ position: "relative", display: "inline-block" }}>
                <img
                  src={editPreviewUrl}
                  alt="preview"
                  style={{ maxWidth: "100%", maxHeight: 180, borderRadius: 8 }}
                />
                <IconButton
                  onClick={() => {
                    setEditPreviewUrl("");
                    setEditImage(null);
                    setEditImageDeleted(true);
                  }}
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    backgroundColor: "rgba(0,0,0,0.5)",
                    color: "white",
                  }}
                >
                  ✕
                </IconButton>
              </div>
            ) : (
              <Typography variant="body2" color="textSecondary">
                Перетащи изображение сюда или нажми, чтобы выбрать
              </Typography>
            )}
            <input
              type="file"
              accept="image/*"
              hidden
              id="edit-image-upload"
              onChange={(e) => {
                const file = e.target.files[0];
                setEditImage(file);
                setEditPreviewUrl(URL.createObjectURL(file));
              }}
            />
            <label htmlFor="edit-image-upload">
              <Button component="span" variant="outlined" sx={{ mt: 1 }}>
                Загрузить вручную
              </Button>
            </label>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditDialogOpen(false)}>Отмена</Button>
          <Button onClick={handleEditSave} variant="contained">
            Сохранить
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={confirmDeleteOpen}
        onClose={() => setConfirmDeleteOpen(false)}
      >
        <DialogTitle>Подтверждение удаления</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Вы уверены, что хотите удалить новость?
          </DialogContentText>
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
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert severity={snackbarSeverity} sx={{ width: "100%" }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default PressPanelPage;
