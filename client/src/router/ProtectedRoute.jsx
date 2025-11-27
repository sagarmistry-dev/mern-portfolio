import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

/**
 * Wrap admin pages with <ProtectedRoute>
 * If no token -> redirect to /login
 */
const ProtectedRoute = ({ children }) => {
  const { token } = useContext(AuthContext);
  if (!token) return <Navigate to="/login" replace />;
  return children;
};

export default ProtectedRoute;
