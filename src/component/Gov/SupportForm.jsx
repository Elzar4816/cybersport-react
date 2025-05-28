import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  Alert,
} from "@mui/material";

const SupportForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "Вопрос",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError("Пожалуйста, заполните все обязательные поля.");
      return;
    }

    // Здесь может быть логика отправки (например, через API)
    console.log("Отправлено:", formData);

    setError("");
    setSubmitted(true);
    setFormData({ name: "", email: "", topic: "Вопрос", message: "" });
  };

  return (
    <Box
      sx={{ backgroundColor: "#1a1a1a", color: "#fff", p: 4, borderRadius: 2 }}
    >
      <Typography variant="h5" gutterBottom>
        Связаться с нами
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Остались вопросы, предложения или жалобы? Заполните форму ниже — мы
        свяжемся с вами!
      </Typography>

      {submitted && (
        <Alert severity="success" sx={{ mb: 2 }}>
          Спасибо за обращение! Мы свяжемся с вами в ближайшее время.
        </Alert>
      )}
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <form onSubmit={handleSubmit}>
        <TextField
          label="Ваше имя"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <TextField
          label="E-mail"
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <TextField
          select
          label="Тип обращения"
          name="topic"
          value={formData.topic}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        >
          <MenuItem value="Вопрос">Вопрос</MenuItem>
          <MenuItem value="Предложение">Предложение</MenuItem>
          <MenuItem value="Жалоба">Жалоба</MenuItem>
        </TextField>
        <TextField
          label="Сообщение"
          name="message"
          value={formData.message}
          onChange={handleChange}
          multiline
          rows={4}
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <Button
          type="submit"
          variant="contained"
          color="info"
          sx={{
            fontWeight: "bold",
            textTransform: "none",
            borderRadius: 2,
            px: 4,
            py: 1,
          }}
        >
          Отправить
        </Button>
      </form>
    </Box>
  );
};

export default SupportForm;
