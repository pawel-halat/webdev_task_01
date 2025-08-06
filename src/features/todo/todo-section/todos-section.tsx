import { type FC } from "react";

import { useGetTodosData } from "../hooks/use-get-todos-data.query";
import { Table } from "../../ui/components";
import { todosTableColumns } from "./todos-table.config";

interface Props {
  pageSize?: number;
}

export const TodosSection: FC<Props> = ({ pageSize = 5 }) => {
  const { data: todos = [], isLoading, error } = useGetTodosData();

  if (isLoading) {
    return (
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-center py-12">
          <div className="text-lg text-secondary">Loading todos...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-center py-12">
          <div className="text-lg text-danger">
            Error loading todos: {error.message}
          </div>
        </div>
      </div>
    );
  }

  return (
    <Table
      data={todos}
      pageSize={pageSize}
      columns={todosTableColumns}
      enablePagination
      enableSorting
      enableFiltering
    />
  );
};
