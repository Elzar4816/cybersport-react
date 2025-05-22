import React from "react";
import MainRoutes from "./routes/MainRoutes";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import { useLocation } from "react-router-dom";

const App = () => {
    const location = useLocation();

    // Адреса, где не нужно показывать навбар и футер
    const hideLayout = ["/press-login"];

    const shouldHideLayout = hideLayout.includes(location.pathname);

    return (
        <>
            {!shouldHideLayout && <Navbar />}
            <MainRoutes />
            {!shouldHideLayout && <Footer />}
        </>
    );
};

export default App;
