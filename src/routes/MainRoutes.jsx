import React from "react";
import TournamentPage from "../pages/TournamentPage";
import HomePage from "../pages/HomePage";
import { Route, Routes } from "react-router-dom";
import NewsPage from "../pages/NewsPage";
import PressLoginPage from "../pages/PressLoginPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {link: "/", element: <HomePage />, id: 1,},
    {link: "/tournament", element: <TournamentPage />, id: 2,},
    {link: "/news", element: <NewsPage />, id: 3,},
    {link: "/press-login", element: <PressLoginPage />, id: 4,}

  ];
  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
