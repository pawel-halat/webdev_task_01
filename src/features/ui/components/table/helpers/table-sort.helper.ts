import { type SortState } from "../types/table.types";

export const sortData = <T, K>(
  data: T[],
  sortState: SortState,
  getNestedValueFn: (obj: T, path: string) => K | undefined
): T[] => {
  return [...data].sort((a, b) => {
    const aValue = getNestedValueFn(a, sortState.column);
    const bValue = getNestedValueFn(b, sortState.column);

    const aComparable = aValue == null ? "" : String(aValue);
    const bComparable = bValue == null ? "" : String(bValue);

    let comparison = 0;
    if (aComparable < bComparable) comparison = -1;
    if (aComparable > bComparable) comparison = 1;

    return sortState.direction === "desc" ? -comparison : comparison;
  });
};
