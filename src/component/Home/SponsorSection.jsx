import React from "react";
import { Box, Typography } from "@mui/material";

import sponsor1 from "../../assets/sponsor.webp";
import sponsor2 from "../../assets/sponsor2.jpg";
import sponsor3 from "../../assets/sponsor3.png";
import sponsor4 from "../../assets/sponsor4.png";

const partnerLogos = [
  { name: "Партнёр 1", logo: sponsor1 },
  { name: "Партнёр 2", logo: sponsor2 },
  { name: "Партнёр 3", logo: sponsor3 },
  { name: "Партнёр 4", logo: sponsor4 },
];

const PartnersSponsors = () => {
  return (
    <Box sx={{ my: 5, px: { xs: 2, md: 10 } }}>
      <Typography
        variant="h4"
        component="h2"
        sx={{
          color: "white",
          mb: 4,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Наши партнёры и спонсоры
      </Typography>

      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          overflowY: "hidden", // добавляем это!
          gap: 4,
          px: 1,
          "&::-webkit-scrollbar": { height: 8 },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(255,255,255,0.3)",
            borderRadius: 4,
          },
          scrollbarWidth: "thin",
          scrollbarColor: "rgba(255,255,255,0.3) transparent",
          justifyContent: { xs: "flex-start", md: "center" },
        }}
      >
        {partnerLogos.map(({ name, logo }, idx) => (
          <Box
            key={idx}
            component="img"
            src={logo}
            alt={name}
            title={name}
            sx={{
              height: { xs: 80, sm: 100, md: 120 },
              flexShrink: 0,
              filter: "grayscale(100%)",
              transition: "filter 0.3s ease, transform 0.3s ease",
              cursor: "pointer",
              "&:hover": {
                filter: "none",
                transform: "scale(1.1)",
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default PartnersSponsors;
