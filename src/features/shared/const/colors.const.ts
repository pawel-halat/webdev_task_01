import { GradeColorType } from "../../road/road-map/types/grade-color-type";
import { GradeType } from "../../road/road-map/types/grade-types";
import type { RoadTypeSignature } from "../../road/road-map/types/road-type-signature";

export const roadGradeColors = {
  excellent: "var(--color-grade-excellent)",
  good: "var(--color-grade-good)",
  fair: "var(--color-grade-fair)",
  poor: "var(--color-grade-poor)",
  veryPoor: "var(--color-grade-very-poor)",
  noGrade: "var(--color-no-grade)",
};

export const gradeRanges = {
  excellent: { min: 1.0, max: 1.49, label: "Excellent" },
  good: { min: 1.5, max: 2.49, label: "Good" },
  fair: { min: 2.5, max: 3.49, label: "Fair" },
  poor: { min: 3.5, max: 4.49, label: "Poor" },
  veryPoor: { min: 4.5, max: 5.0, label: "Very Poor" },
  noGrade: { min: 4.5, max: 5.0, label: "No Grade Available" },
};

export const legendItems = [
  {
    color: GradeColorType.EXCELLENT,
    range: "1.0-1.49",
    label: "Excellent",
    category: GradeType.EXCELLENT,
  },
  {
    color: GradeColorType.GOOD,
    range: "1.5-2.49",
    label: "Good",
    category: GradeType.GOOD,
  },
  {
    color: GradeColorType.FAIR,
    range: "2.5-3.49",
    label: "Fair",
    category: GradeType.FAIR,
  },
  {
    color: GradeColorType.POOR,
    range: "3.5-4.49",
    label: "Poor",
    category: GradeType.POOR,
  },
  {
    color: GradeColorType.VERY_POOR,
    range: "4.5-5.0",
    label: "Very Poor",
    category: GradeType.VERY_POOR,
  },
];

export const roadTypesSignature: Array<RoadTypeSignature> = [
  {
    grade: GradeType.EXCELLENT,
    color: roadGradeColors.excellent,
    label: gradeRanges.excellent.label,
  },
  {
    grade: GradeType.GOOD,
    color: roadGradeColors.good,
    label: gradeRanges.good.label,
  },
  {
    grade: GradeType.FAIR,
    color: roadGradeColors.fair,
    label: gradeRanges.fair.label,
  },
  {
    grade: GradeType.POOR,
    color: roadGradeColors.poor,
    label: gradeRanges.poor.label,
  },
  {
    grade: GradeType.VERY_POOR,
    color: roadGradeColors.veryPoor,
    label: gradeRanges.veryPoor.label,
  },
  {
    grade: GradeType.NO_GRADE,
    color: roadGradeColors.noGrade,
    label: gradeRanges.noGrade.label,
  },
];
