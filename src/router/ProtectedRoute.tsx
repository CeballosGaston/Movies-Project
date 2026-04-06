import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface Props {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: Props) => {
  const user = localStorage.getItem("currentUser");

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};
