import { type FC } from "react";

import { useGetRoadsData } from "../../../hooks/use-get-roads-data.query";
import { BarChart, PieChart } from "../../../../ui/components/charts";
import { getGwChartData } from "../../helpers/get-gw-chart-data";
import { getRestChartData } from "../../helpers/get-rest-chart-data";

export const RoadsAverageGrade: FC = () => {
  const { data: roadsData } = useGetRoadsData();

  const gwChartData = getGwChartData(roadsData);
  const restChartData = getRestChartData(roadsData);

  if (!roadsData || roadsData.features.length === 0) {
    return (
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-center py-12">
          <div className="text-lg text-secondary">No road data available.</div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row items-center gap-8 w-full justify-center">
        <div className="flex-1 h-96">
          <h2 className="text-xl text-secondary font-semibold mb-4">
            GW Grade Distribution
          </h2>
          <PieChart data={gwChartData} description="Grades count:" />
        </div>
        <div className="flex-1 h-96">
          <div className="h-full max-w-[450px]">
            <h2 className="text-xl text-secondary font-semibold mb-4">
              Average Rest grades Distribution
            </h2>
            <BarChart data={restChartData} />
          </div>
        </div>
      </div>
    </div>
  );
};
