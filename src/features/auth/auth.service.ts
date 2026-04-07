

import { User, AuthResponse } from "../auth/auth.types";

const USERS_KEY = "users";
const CURRENT_USER_KEY = "currentUser";


const getUsers = (): User[] => {
  return JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
};

const saveUsers = (users: User[]) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};


export const authService = {
  login(email: string, password: string): AuthResponse {
    if (!email || !password) {
      return {
        success: false,
        error: "Please enter your email and password",
      };
    }

    const users = getUsers();

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      return {
        success: false,
        error: "Email or password incorrect",
      };
    }

    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));

    return {
      success: true,
      user,
    };
  },

  register(name: string, email: string, password: string): AuthResponse {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !password || !emailRegex.test(email)) {
      return {
        success: false,
        error: "Please, enter a valid name, email and password",
      };
    }

    const users = getUsers();

    const userExists = users.some((u) => u.email === email);

    if (userExists) {
      return {
        success: false,
        error: "The user already exists",
      };
    }

    const newUser: User = { name, email, password };

    users.push(newUser);
    saveUsers(users);

    return {
      success: true,
      user: newUser,
    };
  },

  logout(): void {
    localStorage.removeItem(CURRENT_USER_KEY);
  },

  getCurrentUser(): User | null {
    const user = localStorage.getItem(CURRENT_USER_KEY);
    return user ? JSON.parse(user) : null;
  },

  isAuthenticated(): boolean {
    return !!this.getCurrentUser();
  },
};