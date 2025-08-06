import { type TableColumn } from "../types/table.types";
import { TableCell } from "./table-cell";

interface TableRowProps<T> {
  row: T;
  rowIndex: number;
  columns: TableColumn<T>[];
  onRowClick?: (row: T, index: number) => void;
}

export const TableRow = <T,>({
  row,
  rowIndex,
  columns,
  onRowClick,
}: TableRowProps<T>) => {
  return (
    <tr
      key={rowIndex}
      className={`hover:bg-neutral-50 ${onRowClick ? "cursor-pointer" : ""}`}
      onClick={() => onRowClick?.(row, rowIndex)}
    >
      {columns.map((column, colIndex) => (
        <TableCell
          key={`${column.key as string}-${rowIndex}-${colIndex}`}
          row={row}
          rowIndex={rowIndex}
          column={column}
          colIndex={colIndex}
        />
      ))}
    </tr>
  );
};
