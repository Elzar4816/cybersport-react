import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import sponsor1 from "../../assets/sponsors/sponsor.png";
import sponsor2 from "../../assets/sponsors/sponsor2.png";
import sponsor3 from "../../assets/sponsors/sponsor3.png";
import sponsor4 from "../../assets/sponsors/sponsor4.jpg";
import bigplay from "../../assets/sponsors/BigPlay_allmode.png";
import actionvr from "../../assets/sponsors/actionvr.png";
import donatovnet from "../../assets/sponsors/donatovnet.png";
import shoro from "../../assets/sponsors/Shoro.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const partnerLogos = [
  { name: "Партнёр 1", logo: sponsor1 },
  { name: "Партнёр 2", logo: sponsor2 },
  { name: "Партнёр 3", logo: sponsor3 },
  { name: "Партнёр 4", logo: sponsor4 },
  { name: "BIGPLAY", logo: bigplay },
  { name: "Coca-Cola", logo: actionvr },
  { name: "Donatovnet", logo: donatovnet },
  { name: "Shoro", logo: shoro },
];

const PartnersSponsors = () => {
  const logosRef = useRef([]);
  const containerRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const runAnimation = () => {
      if (!logosRef.current[0]) return;

      gsap.fromTo(
        logosRef.current,
        {
          opacity: 0,
          y: 50,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: {
            each: 0.15,
            from: "center",
          },
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse",
            scrub: true,
            markers: false,
          },
        }
      );
      gsap.fromTo(
        logosRef.current,
        {
          opacity: 0,
          y: 50,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: {
            each: 0.15,
            from: "center",
          },
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse",
            scrub: true,
            markers: false,
          },
        }
      );

      ScrollTrigger.refresh();
    };

    // Настроим ResizeObserver
    let resizeTimeout;
    observerRef.current = new ResizeObserver(() => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        runAnimation();
      }, 200); // ждём "стабилизации" размера
    });

    observerRef.current.observe(el);

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
      clearTimeout(resizeTimeout);
    };
  }, []);

  useEffect(() => {
    // Эффект курсора
    const logos = logosRef.current;
    logos.forEach((logo) => {
      logo.addEventListener("mousemove", (e) => {
        const rect = logo.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(logo, {
          x: x * 0.05,
          y: y * 0.05,
          scale: 1.05,
          duration: 0.3,
        });
      });

      logo.addEventListener("mouseleave", () => {
        gsap.to(logo, {
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.3,
        });
      });
    });
  }, []);

  return (
    <Box ref={containerRef} sx={{ my: 5, px: { xs: 2, md: 10 } }}>
      <Typography
        variant="h4"
        component="h2"
        sx={{
          fontFamily: "Montserrat, sans-serif",
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
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)", // 2 логотипа на мобильных
            sm: "repeat(2, 1fr)", // 2 логотипа на планшетах
            md: "repeat(3, 1fr)", // 3 логотипа на десктопах
          },
          gap: 2,
          justifyItems: "center", // Центрирует логотипы по центру
        }}
      >
        {partnerLogos.map(({ name, logo }, idx) => (
          <Box
            key={idx}
            component="img"
            ref={(el) => (logosRef.current[idx] = el)}
            src={logo}
            alt={name}
            title={name}
            sx={{
              maxWidth: "140px",
              width: "100%",
              height: "auto",
              objectFit: "contain",
              filter: "grayscale(50%)",
              transition: "filter 0.3s ease",
              cursor: "pointer",
              "&:hover": {
                filter: "none",
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default PartnersSponsors;
