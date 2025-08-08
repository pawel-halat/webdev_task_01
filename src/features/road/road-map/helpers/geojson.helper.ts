import { gradeRanges } from "../../../shared/const/colors.const";
import type { GradeType } from "../types";
import { GradeValueType } from "../types/grade-value-types";

const createFeatureCollection = (
  features: GeoJSON.Feature[]
): GeoJSON.FeatureCollection => {
  return {
    type: "FeatureCollection",
    features,
  };
};

const isGradeInRange = (category: GradeValueType, grade?: number): boolean => {
  if (category === GradeValueType.NO_GRADE) {
    return !grade;
  }
  if (!grade) return false;

  const range = gradeRanges[category];

  return grade >= range.min && grade <= range.max;
};

export const filterRoadFeatures = (
  featureCollection: GeoJSON.FeatureCollection,
  grade: GradeValueType,
  gradeType: GradeType
): GeoJSON.FeatureCollection =>
  createFeatureCollection(
    featureCollection.features.filter((f) => {
      const g = f.properties?.eemi_grade?.[gradeType];
      return isGradeInRange(grade, g);
    })
  );
