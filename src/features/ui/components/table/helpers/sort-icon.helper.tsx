import { SortDirection, type SortState } from "../types/table.types";
import { SortUpIcon, SortDownIcon, SortBothIcon } from "../../../icons";

export const getSortIcon = (columnKey: string, sortState: SortState) => {
  const baseClasses = "w-4 h-4 inline-flex items-center justify-center";

  if (sortState.column !== columnKey) {
    return (
      <span className={`${baseClasses} text-muted`}>
        <SortBothIcon />
      </span>
    );
  }
  if (sortState.direction === SortDirection.ASC) {
    return (
      <span className={`${baseClasses} text-primary`}>
        <SortUpIcon />
      </span>
    );
  }
  if (sortState.direction === SortDirection.DESC) {
    return (
      <span className={`${baseClasses} text-primary`}>
        <SortDownIcon />
      </span>
    );
  }
  return (
    <span className={`${baseClasses} text-muted`}>
      <SortBothIcon />
    </span>
  );
};
