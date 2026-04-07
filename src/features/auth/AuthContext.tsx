import { createContext, useContext, useEffect, useState } from "react";
import { authService } from "./auth.service";
import { User, AuthResponse } from "./auth.types";

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => AuthResponse;
  register: (name: string, email: string, password: string) => AuthResponse;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);


export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  
  useEffect(() => {
    const currentUser = authService.getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  const login = (email: string, password: string): AuthResponse => {
    const result = authService.login(email, password);

    if (result.success && result.user) {
      setUser(result.user);
    }

    return result;
  };

  const register = (
    name: string,
    email: string,
    password: string
  ): AuthResponse => {
    const result = authService.register(name, email, password);
    return result;
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;