import {type ReactNode } from "react";

type btnVariants = "primary" | "secondary" | "outline" | "ghost" | "link";

type ButtonProps = {
  children?: ReactNode;
  variant?: btnVariants;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
};

export function Button({
  children,
  variant = "primary",
  type = "button",
  disabled = false,
  className = "",
  onClick,
}: ButtonProps) {
  
  const variantClasses: Record<btnVariants, string> = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    outline: "btn-outline",
    ghost: "btn-ghost",
    link: "btn-link",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`btn ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
