import { useState, useMemo } from "react";

import { getNestedValue } from "../helpers/table.helper";
import { getSortIcon } from "../helpers/sort-icon.helper";
import { sortData } from "../helpers/table-sort.helper";
import {
  type TableColumn,
  SortDirection,
  type SortState,
} from "../types/table.types";
import { TableHeader } from "./table-header";
import { TableRow } from "./table-row";
import { TableNoData } from "./table-no-data";
import { TablePagination } from "./table-pagination";

interface TableProps<T> {
  data: T[];
  columns: TableColumn<T>[];
  enableSorting?: boolean;
  enableFiltering?: boolean;
  enablePagination?: boolean;
  pageSize?: number;
  className?: string;
  onRowClick?: (row: T, index: number) => void;
}

export const Table = <T,>({
  data,
  columns,
  enableSorting = true,
  enableFiltering = true,
  enablePagination = true,
  pageSize = 10,
  className = "",
  onRowClick,
}: TableProps<T>) => {
  const [sortState, setSortState] = useState<SortState>({
    column: "",
    direction: SortDirection.NONE,
  });
  const [globalFilter, setGlobalFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  const filteredData = useMemo(() => {
    let result = [...data];

    if (globalFilter) {
      result = result.filter((row) =>
        columns.some((col) => {
          const value = getNestedValue(row, col.key);

          return String(value)
            .toLowerCase()
            .includes(globalFilter.toLowerCase());
        })
      );
    }

    return result;
  }, [data, globalFilter, columns]);

  const sortedData = useMemo(() => {
    if (
      !enableSorting ||
      !sortState.column ||
      sortState.direction === SortDirection.NONE
    ) {
      return filteredData;
    }

    return sortData(filteredData, sortState, getNestedValue);
  }, [filteredData, sortState, enableSorting]);

  const paginatedData = useMemo(() => {
    if (!enablePagination) return sortedData;

    const startIndex = currentPage * pageSize;
    return sortedData.slice(startIndex, startIndex + pageSize);
  }, [sortedData, currentPage, pageSize, enablePagination]);

  const totalPages = Math.ceil(sortedData.length / pageSize);
  const startIndex = currentPage * pageSize + 1;
  const endIndex = Math.min((currentPage + 1) * pageSize, sortedData.length);

  const handleSort = (columnKey: string) => {
    if (!enableSorting) return;

    setSortState((prev) => {
      if (prev.column === columnKey) {
        const direction =
          prev.direction === SortDirection.ASC
            ? SortDirection.DESC
            : prev.direction === SortDirection.DESC
            ? SortDirection.NONE
            : SortDirection.ASC;
        return { column: columnKey, direction };
      }
      return { column: columnKey, direction: SortDirection.ASC };
    });
  };

  const getSortIconForColumn = (columnKey: string) => {
    return getSortIcon(columnKey, sortState);
  };

  return (
    <div className={`w-full ${className}`}>
      {enableFiltering && (
        <div className="mb-4">
          <input
            type="text"
            value={globalFilter}
            onChange={(e) => {
              setGlobalFilter(e.target.value);
              setCurrentPage(0);
            }}
            placeholder="Search all columns..."
            className="w-full max-w-sm px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      )}

      <div className="overflow-x-auto bg-white rounded-lg shadow border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <TableHeader
            columns={columns}
            enableSorting={enableSorting}
            handleSort={handleSort}
            getSortIcon={getSortIconForColumn}
          />
          <tbody className="bg-white divide-y divide-gray-200">
            {paginatedData.map((row, rowIndex) => (
              <TableRow
                key={rowIndex}
                row={row}
                rowIndex={rowIndex}
                columns={columns}
                onRowClick={onRowClick}
              />
            ))}
          </tbody>
        </table>
      </div>

      {paginatedData.length === 0 && (
        <TableNoData
          hasFilter={!!globalFilter}
          filteredDataLength={filteredData.length}
        />
      )}
      {enablePagination && sortedData.length > pageSize && (
        <TablePagination
          startIndex={startIndex}
          endIndex={endIndex}
          sortedData={sortedData}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
          pageSize={pageSize}
        />
      )}
    </div>
  );
};
