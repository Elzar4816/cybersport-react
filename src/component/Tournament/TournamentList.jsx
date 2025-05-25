import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { Tabs, Tab, Typography, Divider, Box, Stack } from "@mui/material";
import TournamentCard from "./TournamentCard";
import bgImage from "../../assets/Dark.png";
import axios from "axios";

import { Chip } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

const TournamentsList = () => {
  const [tab, setTab] = useState(0);
  const [gameFilter, setGameFilter] = useState("all");
  const [tournaments, setTournaments] = useState([]);
  const [games, setGames] = useState([]);
  const chipContainerRef = useRef(null);
  useEffect(() => {
    axios
      .get("/api/tournaments")
      .then((res) => setTournaments(res.data))
      .catch((err) => console.error("Ошибка загрузки турниров:", err));
  }, []);
  useEffect(() => {
    axios
      .get("/api/games")
      .then((res) => setGames(res.data))
      .catch((err) => console.error("Ошибка загрузки игр:", err));
  }, []);
  useEffect(() => {
    if (!chipContainerRef.current) return;

    gsap.registerPlugin(Draggable);
    Draggable.create(chipContainerRef.current, {
      type: "x",
      edgeResistance: 0.85,
      bounds: chipContainerRef.current.parentElement,
      inertia: true,
      cursor: "grab",
      activeCursor: "grabbing",
    });
  }, []);
  const cardsContainerRef = useRef([]);
  cardsContainerRef.current = [];

  const addToRefs = (el) => {
    if (el && !cardsContainerRef.current.includes(el)) {
      cardsContainerRef.current.push(el);
    }
  };
  const filteredTournaments = tournaments.filter((t) => {
    const isUpcoming = t.status !== "completed";
    const tabMatch = tab === 0 ? isUpcoming : !isUpcoming;
    const gameMatch =
      gameFilter === "all" ||
      (t.game?.name && slugify(t.game.name) === gameFilter);
    return tabMatch && gameMatch;
  });
  useLayoutEffect(() => {
    gsap.fromTo(
      cardsContainerRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
      }
    );
  }, [filteredTournaments]);

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  const handleGameFilter = (game) => {
    setGameFilter(game);
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#121212",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        color="white"
        sx={{ mb: 3, textAlign: "center" }}
      >
        Турниры по киберспорту
      </Typography>
      <Box
        sx={{
          width: "100%",
          overflow: "hidden",
          mb: 2,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Stack
          ref={chipContainerRef}
          direction="row"
          spacing={1}
          sx={{
            width: "max-content",
            userSelect: "none",
          }}
        >
          {/* Chip items go here */}
          <Chip
            label="Все"
            onClick={() => setGameFilter("all")}
            color={gameFilter === "all" ? "primary" : "default"}
            sx={{
              backgroundColor: gameFilter === "all" ? "#00AEEF" : "#2a2a30",
              color: "white",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#00AEEF" },
            }}
          />
          {games.map((g) => {
            const slug = slugify(g.name);
            const selected = slug === gameFilter;
            return (
              <Chip
                key={g.id}
                label={g.name}
                onClick={() => setGameFilter(slug)}
                onDelete={selected ? () => setGameFilter("all") : undefined}
                deleteIcon={
                  selected ? <CancelIcon sx={{ color: "white" }} /> : undefined
                }
                sx={{
                  backgroundColor: selected ? "#00AEEF" : "#2a2a30",
                  color: "white",
                  fontWeight: "bold",
                  "&:hover": { backgroundColor: "#00AEEF" },
                }}
              />
            );
          })}
        </Stack>
      </Box>
      <Tabs
        value={tab}
        onChange={handleTabChange}
        textColor="inherit"
        TabIndicatorProps={{ style: { backgroundColor: "#00AEEF" } }}
      >
        <Tab label="Ближайшие" sx={{ color: "white" }} />
        <Tab label="Прошедшие" sx={{ color: "white" }} />
      </Tabs>

      <Divider sx={{ borderColor: "#333", my: 2 }} />

      {filteredTournaments.map((t, index) => (
        <Box key={t.id} ref={addToRefs} sx={{ width: "90%" }}>
          <TournamentCard tournament={t} />
        </Box>
      ))}
    </Box>
  );
};

const slugify = (str) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/gi, "-")
    .replace(/(^-|-$)/g, "");

export default TournamentsList;
