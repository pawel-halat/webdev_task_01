import { GradeType } from "../../../types/grade-types";

export const getGradeColorClasses = (gradeType: GradeType) => {
  switch (gradeType) {
    case GradeType.EXCELLENT:
      return "bg-grade-excellent text-grade-excellent-text border-grade-excellent";
    case GradeType.GOOD:
      return "bg-grade-good text-grade-good-text border-grade-good";
    case GradeType.FAIR:
      return "bg-grade-fair text-grade-fair-text border-grade-fair";
    case GradeType.POOR:
      return "bg-grade-poor text-grade-poor-text border-grade-poor";
    case GradeType.VERY_POOR:
      return "bg-grade-very-poor text-grade-very-poor-text border-grade-very-poor";
    case GradeType.NO_GRADE:
    default:
      return "bg-neutral-100 text-neutral-800 border-neutral-200";
  }
};
