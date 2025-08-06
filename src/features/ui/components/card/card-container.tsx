import { type FC } from "react";

interface Props {
  children: React.ReactNode;
  direction?: "horizontal" | "vertical";
  cols?: number;
}

export const CardContainer: FC<Props> = ({
  children,
  direction = "horizontal",
}) => {
  const className =
    direction === "vertical" ? "flex flex-col gap-8" : `grid grid-cols-2 gap-8`;

  return <div className={className}>{children}</div>;
};
