import { gradeRanges } from "../../../shared/const/colors.const";
import { GradeType } from "../types/grade-types";

const createFeatureCollection = (
  features: GeoJSON.Feature[]
): GeoJSON.FeatureCollection => {
  return {
    type: "FeatureCollection",
    features,
  };
};

const isGradeInRange = (category: GradeType, grade?: number): boolean => {
  if (category === GradeType.NO_GRADE) {
    return !grade;
  }
  if (!grade) return false;

  const range = gradeRanges[category];

  return grade >= range.min && grade <= range.max;
};

export const filterRoadFeatures = (
  featureCollection: GeoJSON.FeatureCollection,
  grade: GradeType
): GeoJSON.FeatureCollection =>
  createFeatureCollection(
    featureCollection.features.filter((f) => {
      const g =
        f.properties?.eemi_grade?.gw ||
        f.properties?.eemi_grade?.twrio ||
        f.properties?.eemi_grade?.riss;

      return isGradeInRange(grade, g);
    })
  );
