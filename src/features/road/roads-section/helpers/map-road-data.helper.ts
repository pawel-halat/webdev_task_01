import type { RoadTableData } from "../types/road-table-data";

export const mapRoadData = (
  roadsData?: GeoJSON.FeatureCollection
): RoadTableData[] => {
  if (!roadsData || !roadsData.features) {
    return [];
  }

  return (
    roadsData?.features
      ?.map((feature: GeoJSON.Feature): RoadTableData | null => {
        const properties = feature.properties;
        if (!properties) return null;

        const flattenedData = {
          ...properties,
          gw: properties.eemi_grade?.gw,
          twgeb: properties.eemi_grade?.twgeb,
          twofs: properties.eemi_grade?.twofs,
          twrio: properties.eemi_grade?.twrio,
          twsub: properties.eemi_grade?.twsub,
          tweben: properties.eemi_grade?.tweben,
          grade: properties.eemi_grade?.gw,
        } as RoadTableData;

        return flattenedData;
      })
      .filter((item): item is RoadTableData => item !== null) || []
  );
};
