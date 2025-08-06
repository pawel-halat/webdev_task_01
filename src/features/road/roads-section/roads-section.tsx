import { type FC } from "react";

import { useGetRoadsData } from "../hooks/use-get-roads-data.query";
import { Table } from "../../ui/components";
import { mapRoadData } from "./helpers/map-road-data.helper";
import { roadsTableColumns } from "./roads-table.config";

interface Props {
  pageSize?: number;
}

export const RoadsSection: FC<Props> = ({ pageSize = 5 }) => {
  const { data: roadsData, isLoading, error } = useGetRoadsData();

  const roads = mapRoadData(roadsData);

  if (isLoading) {
    return (
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-center py-12">
          <div className="text-lg text-secondary">Loading roads...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-center py-12">
          <div className="text-lg text-danger">
            Error loading roads: {error.message}
          </div>
        </div>
      </div>
    );
  }

  return (
    <Table
      enablePagination={true}
      enableSorting={true}
      enableFiltering={true}
      pageSize={pageSize}
      columns={roadsTableColumns}
      data={roads}
    />
  );
};
