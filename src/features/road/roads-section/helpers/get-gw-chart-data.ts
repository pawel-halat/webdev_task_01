import { countBy } from "lodash";

import { gradeRanges } from "../../../shared/const/colors.const";
import type { Road } from "../types/road.types";
import type { PieChartDataItem } from "../../../ui/components/charts/pie-chart/types/piechart-data-item";
import { GradeValueType } from "../../road-map/types/grade-value-types";

export const getGwChartData = (
  roadsData?: GeoJSON.FeatureCollection
): PieChartDataItem[] => {
  const getGradeCategory = (grade?: number): string => {
    if (!grade) return GradeValueType.NO_GRADE;

    for (const [key, range] of Object.entries(gradeRanges)) {
      if (grade >= range.min && grade <= range.max) {
        return key;
      }
    }
    return GradeValueType.NO_GRADE;
  };

  return roadsData?.features
    ? Object.entries(
        countBy(roadsData.features, (feature) => {
          const road = feature.properties as Road;
          return getGradeCategory(road.eemi_grade?.gw);
        })
      )
        .map(([gradeKey, count]) => ({
          name: gradeRanges[gradeKey as keyof typeof gradeRanges].label,
          value: count,
        }))
        .filter((item) => item.value > 0)
    : [];
};
