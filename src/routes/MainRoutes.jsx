import React from "react";
import TournamentPage from "../pages/TournamentPage";
import HomePage from "../pages/HomePage";
import { Route, Routes } from "react-router-dom";
import NewsPage from "../pages/NewsPage";
import PressLoginPage from "../pages/PressLoginPage";
import PressPanelPage from "../pages/PressPanelPage";
import ProtectedRoute from "../component/ProtectedRoute";
import PressNewsDetailPage from "../pages/PressNewsDetailPage";
import AboutUsPage from "../pages/AboutUsPage";
import ContactPage from "../pages/ContactPage";
import PressTournamentsPage from "../pages/PressTournamentsPage";
import TournamentDetailPage from "../pages/TournamentDetailPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { link: "/", element: <HomePage />, id: 1 },
    { link: "/tournaments", element: <TournamentPage />, id: 2 },
    { link: "/news", element: <NewsPage />, id: 3 },
    { link: "/press-login", element: <PressLoginPage />, id: 4 },
    {
      link: "/press-panel",
      element: (
        <ProtectedRoute>
          <PressPanelPage />
        </ProtectedRoute>
      ),
      id: 5,
    },
    { link: "/press/news/:id", element: <PressNewsDetailPage />, id: 6 },
    { link: "/about", element: <AboutUsPage />, id: 7 },
    { link: "/contact", element: <ContactPage />, id: 18 },
    {
      link: "/press/tournaments",
      element: (
        <ProtectedRoute>
          <PressTournamentsPage />
        </ProtectedRoute>
      ),
      id: 8,
    },
    { link: "/gov-games/", element: <TournamentDetailPage />, id: 29 },
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
