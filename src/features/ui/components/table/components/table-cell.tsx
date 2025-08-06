import { getNestedValue } from "../helpers/table.helper";
import { type TableColumn } from "../types/table.types";

interface TableCellProps<T> {
  row: T;
  rowIndex: number;
  column: TableColumn<T>;
  colIndex: number;
}

export const TableCell = <T,>({
  row,
  rowIndex,
  column,
  colIndex,
}: TableCellProps<T>) => {
  const value = getNestedValue(row, column.key);

  return (
    <td
      key={`${column.key as string}-${rowIndex}-${colIndex}`}
      className="px-6 py-4 whitespace-nowrap text-sm text-primary"
    >
      {column.render ? column.render(row, rowIndex) : String(value || "")}
    </td>
  );
};
