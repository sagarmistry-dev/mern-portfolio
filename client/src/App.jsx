import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/layout/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Login from "./pages/Login";
import ProtectedRoute from "./router/ProtectedRoute";
import AdminDashboard from "./pages/AdminDashboard";
import PublicPortfolio from "./pages/public/PublicPortfolio";

function App() {
  return (
<AuthProvider>
  <BrowserRouter>
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<PublicPortfolio />} />
      </Routes>
    </div>
    <ToastContainer position="top-right" autoClose={2000} theme="dark" />
  </BrowserRouter>
</AuthProvider>

  );
}

export default App;
