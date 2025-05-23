import React, { useState, useEffect } from "react";
import axios from "axios";
import {
    Dialog, DialogTitle, DialogContent, DialogActions,
    TextField, Button, IconButton, Snackbar, DialogContentText, Alert,
    Stack, Typography, Tooltip
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import UploadIcon from "@mui/icons-material/UploadFile";
import PlusIcon from "../assets/plus-svgrepo-com.svg";
import { inputStyle } from "../theme/uiStyles";
import { useNavigate } from "react-router-dom"
const PressPanelPage = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [videoUrl, setVideoUrl] = useState("");
    const [image, setImage] = useState(null);
    const [news, setNews] = useState([]);
    const [createOpen, setCreateOpen] = useState(false);
    const [editDialogOpen, setEditDialogOpen] = useState(false);
    const [editingNews, setEditingNews] = useState(null);
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

    const handleSubmit = async () => {
        if (!title || !content) return;

        const formData = new FormData();
        formData.append("title", title);
        formData.append("content", content);
        formData.append("videoUrl", videoUrl);
        if (image) formData.append("image", image);

        try {
            const token = localStorage.getItem("token");
            await axios.post("/press/news", formData, {
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
        setEditDialogOpen(true);
    };

    const handleEditSave = async () => {
        const token = localStorage.getItem("token");
        try {
            await axios.put(`/press/news/${editingNews.id}`, {
                title: editingNews.title,
                content: editingNews.content,
                videoUrl: editingNews.videoUrl,
            }, {
                headers: { Authorization: `Bearer ${token}` }
            });
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
            await axios.delete(`/press/news/${newsToDelete.id}`, {
                headers: { Authorization: `Bearer ${token}` }
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
                <Button variant="contained" onClick={() => setCreateOpen(true)} sx={{ mb: 3 }}>
                    <img src={PlusIcon} alt="+" width={24} height={24} />
                </Button>
            </Tooltip>

            <Dialog open={createOpen} onClose={() => setCreateOpen(false)} fullWidth maxWidth="sm">
                <DialogTitle sx={{ bgcolor: "#ffffff",
                    color: "#000000" }}>Создать новость</DialogTitle>
                <DialogContent sx={{ bgcolor: "#f8f8f8" }}>
                    <TextField fullWidth margin="dense" label="Заголовок" value={title}
                               onChange={(e) => setTitle(e.target.value)}  />
                    <TextField fullWidth margin="dense" label="Содержимое" value={content}
                               onChange={(e) => setContent(e.target.value)} multiline rows={4}  />
                    <TextField fullWidth margin="dense" label="YouTube ссылка (необязательно)" value={videoUrl}
                               onChange={(e) => setVideoUrl(e.target.value)}  />
                    <Stack direction="row" alignItems="center" spacing={2} sx={{ mt: 2 }}>
                        <Button component="label" variant="outlined" startIcon={<UploadIcon />}
                                sx={{ color: "#000000", borderColor: "#000000" }}>
                            <input hidden type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
                        </Button>
                        <Typography variant="body2">{image?.name || "Файл не выбран"}</Typography>
                    </Stack>
                </DialogContent>
                <DialogActions sx={{ bgcolor: "#ffffff" }}>
                    <Button onClick={() => setCreateOpen(false)}>Отмена</Button>
                    <Button onClick={handleSubmit} variant="contained">Создать</Button>
                </DialogActions>
            </Dialog>

            <div>
                {news.map((item) => (
                    <div key={item.id} style={{
                        backgroundColor: "#222", borderRadius: "10px",
                        display: "flex", overflow: "hidden", marginBottom: 20,
                        boxShadow: "0 0 8px rgba(0,0,0,0.5)"
                    }}>
                        {item.imageUrl && (
                            <img src={item.imageUrl} alt="preview" style={{ width: "150px", objectFit: "cover" }} />
                        )}
                        <div style={{ padding: 15, flexGrow: 1 }}>
                            <h4>{item.title}</h4>
                            <p style={{ fontSize: "12px", color: "#bbb" }}>{new Date(item.date).toLocaleDateString()}</p>
                            <p>{item.content}</p>
                            {item.videoUrl && (
                                <a href={item.videoUrl} target="_blank" rel="noreferrer" style={{ color: "#00AEEF" }}>
                                    Смотреть на YouTube
                                </a>
                            )}
                            <Button
                                variant="outlined"
                                size="small"
                                sx={{ mt: 1 }}
                                onClick={() => navigate(`/press/news/${item.id}`)}
                            >
                                Подробнее
                            </Button>

                        </div>
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: 10 }}>
                            <IconButton onClick={() => openEditDialog(item)}><EditIcon sx={{ color: "orange" }} /></IconButton>
                            <IconButton onClick={() => handleDelete(item)}><DeleteIcon sx={{ color: "red" }} /></IconButton>
                        </div>
                    </div>
                ))}
            </div>

            <Dialog open={editDialogOpen} onClose={() => setEditDialogOpen(false)}>
                <DialogTitle>Редактировать новость</DialogTitle>
                <DialogContent>
                    <TextField
                        label="Заголовок"
                        value={editingNews?.title || ""}
                        onChange={(e) => setEditingNews({ ...editingNews, title: e.target.value })}
                        fullWidth margin="dense"
                    />
                    <TextField
                        label="Содержимое"
                        value={editingNews?.content || ""}
                        onChange={(e) => setEditingNews({ ...editingNews, content: e.target.value })}
                        fullWidth margin="dense" multiline rows={4}
                    />
                    <TextField
                        label="Ссылка на YouTube"
                        value={editingNews?.videoUrl || ""}
                        onChange={(e) => setEditingNews({ ...editingNews, videoUrl: e.target.value })}
                        fullWidth margin="dense"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setEditDialogOpen(false)}>Отмена</Button>
                    <Button onClick={handleEditSave} variant="contained">Сохранить</Button>
                </DialogActions>
            </Dialog>

            <Dialog open={confirmDeleteOpen} onClose={() => setConfirmDeleteOpen(false)}>
                <DialogTitle>Подтверждение удаления</DialogTitle>
                <DialogContent>
                    <DialogContentText>Вы уверены, что хотите удалить новость?</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setConfirmDeleteOpen(false)}>Отмена</Button>
                    <Button onClick={handleConfirmDelete} variant="contained" color="error">Удалить</Button>
                </DialogActions>
            </Dialog>

            <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={() => setSnackbarOpen(false)}>
                <Alert severity={snackbarSeverity} sx={{ width: '100%' }}>{snackbarMessage}</Alert>
            </Snackbar>
        </div>
    );
};

export default PressPanelPage;
