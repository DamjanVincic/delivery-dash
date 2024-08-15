import { useState, createContext, useContext } from "react";
import api from "../utils/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    if (localStorage.getItem("token") === null) return null;
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  });
  const [error, setError] = useState(null);

  const login = async (username, password) => {
    try {
      setError(null);
      const response = await api.post("api-token-auth/", {
        username,
        password,
      });
      const { token, user } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
    } catch (error) {
      const { status, data } = error.response;
      if (status === 400) {
        setError(data.non_field_errors ? data.non_field_errors[0] : "");
      } else {
        console.log({ ...status, ...data });
      }
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, error, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
