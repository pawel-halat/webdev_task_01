import type { FC, ReactNode } from "react";

interface CardItemProps {
  title?: string | ReactNode;
  children: ReactNode | ReactNode[];
  className?: string;
}

export const CardItem: FC<CardItemProps> = ({
  title,
  children,
  className = "",
}) => (
  <div
    className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200 ${className}`}
  >
    {title && (
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
    )}
    <div className="mb-4">{children}</div>
  </div>
);
