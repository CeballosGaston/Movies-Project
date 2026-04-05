import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "icon";
}

export const Button = ({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) => {
  const base = "inline-flex items-center justify-center rounded-md transition";

  const variants = {
    primary: "bg-primary text-white px-4 py-2 hover:bg-primary/90",
    ghost: "hover:bg-gray-700 px-3 py-2",
    icon: "p-2 rounded-full hover:bg-gray-700",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    />
  );
};