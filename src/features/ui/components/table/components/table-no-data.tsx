import type { FC } from "react";

interface TableNoDataProps {
  hasFilter: boolean;
  filteredDataLength: number;
}

export const TableNoData: FC<TableNoDataProps> = ({
  hasFilter,
  filteredDataLength,
}) => {
  return (
    <div className="text-center py-12 text-tertiary bg-white border border-neutral-200 rounded-lg">
      {filteredDataLength === 0 && hasFilter
        ? "No data matches your search criteria"
        : "No data available"}
    </div>
  );
};
