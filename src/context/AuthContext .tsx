// context/AuthContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(Boolean(localStorage.getItem("isLoggedIn")) || false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
