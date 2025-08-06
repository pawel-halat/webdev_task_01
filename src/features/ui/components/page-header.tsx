import type { FC } from "react";

interface Props {
  title: string;
  description: string;
}

export const PageHeader: FC<Props> = ({ title, description }) => {
  return (
    <header className="text-center mb-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">{title}</h1>
      <div className="text-xl text-gray-600">{description}</div>
    </header>
  );
};
