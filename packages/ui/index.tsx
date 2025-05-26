import * as React from "react";

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

export function Button({ children, onClick, variant = "primary" }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: variant === "primary" ? "#0070f3" : "#ffffff",
        color: variant === "primary" ? "#ffffff" : "#000000",
        border: variant === "primary" ? "none" : "1px solid #000000",
        borderRadius: "4px",
        padding: "8px 16px",
        cursor: "pointer",
        fontWeight: "bold",
      }}
    >
      {children}
    </button>
  );
}
