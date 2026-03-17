import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "font-semibold rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap";

  const variantStyles = {
    primary:
      "bg-yellow-400 text-black hover:bg-yellow-300 border-2 border-yellow-400",
    secondary:
      "bg-white text-black hover:bg-gray-100 border-2 border-white",
    outline:
      "bg-transparent text-yellow-400 border-2 border-yellow-400 hover:bg-yellow-400 hover:text-black",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className} disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {children}
    </button>
  );
}
