import type { TableColumn } from "../../ui/components/table";
import type { Todo } from "../types/todo.types";
import { GradeCellRenderer } from "./cell-rederers/status-cell-renderer";

export const todosTableColumns: TableColumn<Todo>[] = [
  { key: "id", header: "ID", sortable: true },
  { key: "title", header: "Title", sortable: true },
  { key: "description", header: "Description", sortable: true },
  {
    key: "status",
    header: "Status",
    sortable: true,
    render: (row) => <GradeCellRenderer label={row.status} />,
  },
  { key: "author", header: "Author", sortable: true },
  { key: "road_fid", header: "Road FID", sortable: true },
];
