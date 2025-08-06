import type { TableColumn } from "../../ui/components/table";
import { TableColumnSize } from "../../ui/components/table/const/table-column-size";
import GradeCellRenderer from "./cell-renderers/grade-cell-rederer";
import type { RoadTableData } from "./types/road-table-data";

export const roadsTableColumns: TableColumn<RoadTableData>[] = [
  { key: "fid", header: "FID", sortable: true, width: TableColumnSize.M },
  { key: "name", header: "Name", sortable: true },
  {
    key: "evnk",
    header: "Start Node",
    sortable: true,
    width: TableColumnSize.L,
  },
  { key: "ennk", header: "End Node", sortable: true, width: TableColumnSize.L },
  {
    key: "len",
    header: "Length (m)",
    sortable: true,
    width: TableColumnSize.M,
    render: (row) => {
      const length = row.len;
      return `${length} m`;
    },
  },
  {
    key: "grade",
    header: "GW Grade",
    sortable: true,
    width: TableColumnSize.M,
    render: (row) => <GradeCellRenderer value={row.grade as number} />,
  },
  {
    key: "twrio",
    header: "TWRIO Grade",
    sortable: true,
    width: TableColumnSize.M,
    render: (row) => {
      const twrio = row.twrio;
      if (!twrio && twrio !== 0) return "-";
      return twrio.toFixed(1);
    },
  },
];
