import React from "react";

import { type TableColumn } from "../types/table.types";

interface Props<T> {
  columns: TableColumn<T>[];
  enableSorting: boolean;
  handleSort: (columnKey: string) => void;
  getSortIcon: (columnKey: string) => React.ReactNode;
}

export const TableHeader = <T,>({
  columns,
  enableSorting,
  handleSort,
  getSortIcon,
}: Props<T>) => {
  return (
    <thead className="bg-neutral-50">
      <tr>
        {columns.map((column, index) => (
          <th
            key={`${column.key as string}-${index}`}
            className={`px-6 py-3 text-left text-xs font-medium text-secondary uppercase tracking-wider ${
              enableSorting && column.sortable !== false
                ? "cursor-pointer select-none hover:bg-neutral-100"
                : ""
            }`}
            style={column.width ? { width: column.width } : undefined}
            onClick={() =>
              column.sortable !== false && handleSort(column.key as string)
            }
          >
            <div className="flex items-center justify-between min-w-0">
              <span className="truncate">{column.header}</span>
              <div className="ml-2 flex-shrink-0 w-4 h-4 flex items-center justify-center">
                {enableSorting && column.sortable !== false ? (
                  getSortIcon(column.key as string)
                ) : (
                  <div className="w-4 h-4" />
                )}
              </div>
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
};
