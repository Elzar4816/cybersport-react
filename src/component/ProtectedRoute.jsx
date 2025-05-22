import React from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem("token");

    if (!token) {
        return <Navigate to="/" replace />;
    }

    try {
        const decoded = jwtDecode(token);
        const now = Date.now() / 1000;
        if (decoded.exp < now) {
            localStorage.removeItem("token");
            return <Navigate to="/" replace />;
        }
    } catch (err) {
        localStorage.removeItem("token");
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute;
