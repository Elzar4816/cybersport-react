import React from "react";
import MainRoutes from "./routes/MainRoutes";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import { useLocation } from "react-router-dom";
import ScrollToTop from "./component/Navbar/ScrollToTop";

const App = () => {
  const location = useLocation();

  // Адреса, где не нужно показывать навбар и футер
  const hideLayout = ["/press-login"];

  const shouldHideLayout = hideLayout.includes(location.pathname);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      {!shouldHideLayout && <Navbar />}

      <ScrollToTop />
      <div style={{ flex: 1 }}>
        <MainRoutes />
      </div>

      {!shouldHideLayout && <Footer />}
    </div>
  );
};

export default App;
