import type { FC, ReactNode } from "react";

interface GotoButtonProps {
  children: ReactNode;
  className?: string;
  variant?: "blue" | "green" | "white";
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  isDisabled?: boolean;
}

export const Button: FC<GotoButtonProps> = ({
  variant = "blue",
  children,
  className,
  type = "button",
  onClick,
  isDisabled = false,
}) => {
  const baseClasses =
    "inline-flex items-center justify-center px-4 py-2 rounded-lg transition-colors";

  const variantClasses = {
    blue: "bg-blue-600 hover:bg-blue-700 text-white",
    green: "bg-green-600 hover:bg-green-700 text-white",
    white: "bg-white text-black hover:bg-blue-50",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};
