import { GradeValueType } from "../../../types/grade-value-types";

export const getGradeColorClasses = (gradeType: GradeValueType) => {
  switch (gradeType) {
    case GradeValueType.EXCELLENT:
      return "bg-grade-excellent text-grade-excellent-text border-grade-excellent";
    case GradeValueType.GOOD:
      return "bg-grade-good text-grade-good-text border-grade-good";
    case GradeValueType.FAIR:
      return "bg-grade-fair text-grade-fair-text border-grade-fair";
    case GradeValueType.POOR:
      return "bg-grade-poor text-grade-poor-text border-grade-poor";
    case GradeValueType.VERY_POOR:
      return "bg-grade-very-poor text-grade-very-poor-text border-grade-very-poor";
    case GradeValueType.NO_GRADE:
    default:
      return "bg-neutral-100 text-neutral-800 border-neutral-200";
  }
};
