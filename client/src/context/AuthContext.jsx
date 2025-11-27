import { createContext, useState } from "react";
import { getToken, saveToken, removeToken } from "../services/tokenService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(getToken());

  const login = (newToken) => {
    saveToken(newToken);
    setToken(newToken);
  };

  const logout = () => {
    removeToken();
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
