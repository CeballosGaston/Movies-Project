import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const PublicRoute = ({ children }: Props) => {
  const user = localStorage.getItem("currentUser");

  if (user) {
    return <Navigate to="/" replace />;
  }

  return children;
};
