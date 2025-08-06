import { type FC } from "react";

interface GradeCellRendererProps {
  label?: string;
}

export const GradeCellRenderer: FC<GradeCellRendererProps> = ({ label }) => {
  const statusMap: Record<string, { label: string; className: string }> = {
    Abgeschlossen: {
      label: "Completed",
      className: "bg-success",
    },
    "In Planung": {
      label: "In Planning",
      className: "bg-info",
    },
    pending: {
      label: "Pending",
      className: "bg-warning",
    },
    inprogress: {
      label: "In Progress",
      className: "bg-info",
    },
    completed: {
      label: "Completed",
      className: "bg-success",
    },
  };

  const mappedStatus = statusMap[label as string] || {
    label: label,
    className: "bg-neutral-100 text-neutral-800",
  };

  return (
    <span
      className={`px-2 py-1 rounded-full text-xs font-medium text-white ${mappedStatus.className}`}
    >
      {mappedStatus.label}
    </span>
  );
};
