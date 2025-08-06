import React from "react";

export interface TableColumn<T> {
  key: keyof T | string;
  header: string;
  sortable?: boolean;
  filterable?: boolean;
  width?: string;
  render?: (row: T, index: number) => React.ReactNode;
}

export enum SortDirection {
  ASC = "asc",
  DESC = "desc",
  NONE = "none",
}

export interface SortState {
  column: string;
  direction: SortDirection;
}
