import type { FC } from "react";

interface ClipboardListIconProps {
  className?: string;
  isOpen?: boolean;
}

export const DropdownIcon: FC<ClipboardListIconProps> = ({
  className,
  isOpen,
}) => (
  <svg
    className={`w-4 h-4 transition-transform ${
      isOpen ? "rotate-180" : ""
    } ${className}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);
