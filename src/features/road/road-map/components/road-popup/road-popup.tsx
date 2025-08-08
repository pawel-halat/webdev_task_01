import { type FC } from "react";

import { GradeValueType } from "../../types/grade-value-types";
import { getGradeColorClasses } from "./helpers/get-grade-colors-classes";

interface Props {
  name?: string;
  grade?: number;
  gradeType: GradeValueType;
  label: string;
}

export const RoadPopup: FC<Props> = ({ name, grade, gradeType }) => {
  const gradeColorClasses = getGradeColorClasses(gradeType);

  return (
    <div className="p-4 min-w-56 max-w-72 bg-white text-primary rounded-lg font-sans">
      {name ? (
        <div className="mb-3">
          <div className="text-xs uppercase tracking-wider text-tertiary font-medium mb-1">
            Road Name
          </div>
          <div className="font-semibold text-primary text-base leading-tight">
            {name}
          </div>
        </div>
      ) : (
        <div className="mb-3">
          <div className="text-sm text-gray-500 italic">Unnamed Road</div>
        </div>
      )}

      <div className="border-t border-gray-100 pt-3">
        <div className="text-xs uppercase tracking-wider text-gray-500 font-medium mb-2">
          EEMI Evaluation
        </div>

        {gradeType !== GradeValueType.NO_GRADE ? (
          <div className="flex items-center gap-3">
            <span
              className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium border ${gradeColorClasses}`}
            >
              {grade}
            </span>
            <span className="text-sm text-gray-600 font-medium">
              {gradeType}
            </span>
          </div>
        ) : (
          <div className="inline-flex items-center px-3 py-1.5 rounded-md bg-neutral-50 border border-neutral-200">
            <span className="text-sm text-tertiary italic">
              No evaluation available
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
