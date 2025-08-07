import type { FC } from "react";
import { Link } from "react-router-dom";

import { ArrowRightIcon } from "../../icons";

interface GotoButtonProps {
  to: string;
  children: React.ReactNode;
  variant?: "blue" | "green" | "white";
  hideIcon?: boolean;
}

export const LinkButton: FC<GotoButtonProps> = ({
  to,
  children,
  variant = "blue",
  hideIcon = false,
}) => {
  const baseClasses =
    "inline-flex items-center px-4 py-2 rounded-lg transition-colors";

  const variantClasses = {
    blue: "bg-blue-600 hover:bg-blue-700 text-white",
    green: "bg-green-600 hover:bg-green-700 text-white",
    white: "bg-white text-black hover:bg-blue-50",
  };

  return (
    <Link to={to} className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
      {!hideIcon && <ArrowRightIcon className="ml-2 w-4 h-4" />}
    </Link>
  );
};
