import type { Road } from "../types/road.types";
import type { GroupPieChartDataItem } from "../../../ui/components/charts/bar-chart/types/group-piechart-data-item";
import { properties, propertyLabels } from "../const/road-chart.const";

export const getRestChartData = (
  roadsData?: GeoJSON.FeatureCollection
): GroupPieChartDataItem[] => {
  if (!roadsData?.features || roadsData.features.length === 0) {
    return [];
  }

  const result: GroupPieChartDataItem[] = [];

  properties.forEach((property) => {
    const values = roadsData.features
      .map((feature) => {
        const road = feature.properties as Road;
        return road.eemi_grade?.[property];
      })
      .filter(
        (value): value is number => typeof value === "number" && !isNaN(value)
      );

    if (values.length > 0) {
      const average =
        values.reduce((sum, value) => sum + value, 0) / values.length;
      result.push({
        name: propertyLabels[property],
        pv: Number(average.toFixed(2)),
      });
    }
  });

  return result;
};
