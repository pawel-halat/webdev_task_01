import { type FC } from "react";

import { gradeRanges } from "../../../shared/const/colors.const";

interface GradeCellRendererProps {
  value?: number | null;
}

const GradeCellRenderer: FC<GradeCellRendererProps> = ({ value }) => {
  const grade = value;

  if (!grade && grade !== 0) return "-";

  const getGradeColor = (grade: number): string => {
    if (grade >= gradeRanges.excellent.min && grade < gradeRanges.excellent.max)
      return "bg-grade-excellent";
    if (grade >= gradeRanges.good.min && grade < gradeRanges.good.max)
      return "bg-grade-good";
    if (grade >= gradeRanges.fair.min && grade < gradeRanges.fair.max)
      return "bg-grade-fair";
    if (grade >= gradeRanges.poor.min && grade < gradeRanges.poor.max)
      return "bg-grade-poor ";
    if (grade >= gradeRanges.veryPoor.min && grade <= gradeRanges.veryPoor.max)
      return "bg-grade-very-poor";

    return "bg-gray-100 text-gray-800 border-gray-300";
  };

  const gradeColor = getGradeColor(grade);
  return (
    <span
      className={`px-2 py-1 rounded-full text-xs font-medium text-white ${gradeColor}`}
    >
      {grade.toFixed(1)}
    </span>
  );
};

export default GradeCellRenderer;
