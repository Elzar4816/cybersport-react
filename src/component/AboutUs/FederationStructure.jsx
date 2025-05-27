import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import prezident from "../../assets/organization/prezident.jpg";

const leadership = [
  {
    name: "Алия Мамбетова",
    role: "Президент Федерации",
    description:
      "Главный руководитель, определяющий стратегические направления развития.",
    photo: prezident,
  },
  {
    name: "Вице-президенты",
    role: "Турниры, партнёрства, обучение, медиа",
    description:
      "Отвечают за ключевые направления: развитие турниров, сотрудничество, образовательные инициативы и медиа-стратегии.",
    photo: prezident,
  },
];

const FederationStructure = () => {
  return (
    <Box sx={{ py: 6, px: 2 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={4}
        sx={{ color: "#fff", textAlign: "center" }}
      >
        Структура Федерации
      </Typography>

      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{ maxWidth: 1000, mx: "auto" }}
      >
        {leadership.map((person, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <Card
              sx={{
                height: "100%",
                borderRadius: 3,
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(6px)",
                color: "#fff",
                boxShadow: "0 0 20px rgba(0,0,0,0.3)",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 0 25px rgba(0,0,0,0.5)",
                },
                maxWidth: 350,
                mx: "auto",
              }}
            >
              <CardMedia
                component="img"
                height="220"
                image={person.photo}
                alt={person.name}
                style={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {person.name}
                </Typography>
                <Typography variant="subtitle2" sx={{ color: "#ccc" }}>
                  {person.role}
                </Typography>
                <Typography variant="body2" mt={1} sx={{ color: "#ddd" }}>
                  {person.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FederationStructure;
