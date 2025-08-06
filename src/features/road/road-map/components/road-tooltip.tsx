import { type FC } from "react";

import { GradeType } from "../types/grade-types";

interface Props {
  name?: string;
  grade?: number;
  gradeLabel: string;
  gradeColor: string;
  gradeType: GradeType;
}

export const RoadTooltip: FC<Props> = ({
  name,
  grade,
  gradeLabel,
  gradeColor,
  gradeType,
}) => (
  <div className="bg-white p-2 rounded shadow-md text-xs leading-relaxed max-w-[200px]">
    <div className="font-semibold text-secondary mb-1">
      {name || "Unnamed Road"}
    </div>

    <div className="text-tertiary mb-0.5">
      Grade:
      <span className="font-medium" style={{ color: gradeColor }}>
        {gradeLabel}
      </span>
    </div>

    {grade && gradeType !== GradeType.NO_GRADE && (
      <div className="text-tertiary">Score: {grade.toFixed(2)}</div>
    )}

    <div className="text-muted text-[10px] mt-1">Click for details</div>
  </div>
);
