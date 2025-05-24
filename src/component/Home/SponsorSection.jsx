import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import sponsor1 from "../../assets/sponsors/sponsor.webp";
import sponsor2 from "../../assets/sponsors/sponsor2.jpg";
import sponsor3 from "../../assets/sponsors/sponsor3.png";
import sponsor4 from "../../assets/sponsors/sponsor4.png";
import bigplay from "../../assets/sponsors/BIGPLAY_logo_vert.png";
import cocaCola from "../../assets/sponsors/coca-cola.png";
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
    { name: "Coca-Cola", logo: cocaCola },
    { name: "Donatovnet", logo: donatovnet },
    { name: "Shoro", logo: shoro },
];

const PartnersSponsors = () => {
    const logosRef = useRef([]);

    useEffect(() => {
        // Убедимся, что ссылки уже расставлены
        if (!logosRef.current.length || !logosRef.current[0]) {
            console.warn("Логотипы ещё не готовы:", logosRef.current);
            return;
        }

        const container = logosRef.current[0].parentNode;

        console.log("▶️ ScrollTrigger будет срабатывать на:", container);

        // Анимация появления с волной
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
                    trigger: container,
                    start: "top 80%",
                    end: "top 50%",
                    toggleActions: "play none none reverse",
                    scrub: true,
                    markers: true, // ✅ включи для визуальной отладки
                },
            }
        );

        // Магнитный эффект при наведении
        const logos = logosRef.current;
        logos.forEach((logo) => {
            logo.addEventListener("mousemove", (e) => {
                const rect = logo.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                gsap.to(logo, {
                    x: x * 0.1,
                    y: y * 0.1,
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
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: 4,
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
                            height: { xs: 80, sm: 100, md: 120 },
                            flexShrink: 0,
                            filter: "grayscale(100%)",
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
