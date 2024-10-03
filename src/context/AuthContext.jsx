import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);

  const login = (user) => setUser(user);
  const logout = () => setUser(null);
  const register = (newUser) => {
    if (newUser.password.length < 6) {
      throw new Error("Password must be at least 6 characters long.");
    }
    setUser(newUser);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
