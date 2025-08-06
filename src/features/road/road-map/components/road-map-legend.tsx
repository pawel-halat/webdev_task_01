import { type FC } from "react";

import { legendItems } from "../../../shared/const/colors.const";

export const RoadMapLegend: FC = () => (
  <div className="absolute bottom-4 left-4 z-[1000] bg-white p-3 rounded-lg shadow-lg border-light text-sm">
    <div className="font-semibold mb-2 text-primary">EEMI Grade Legend</div>
    <div className="space-y-1">
      {legendItems.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <div className={`w-4 h-3 border border-light bg-${item.color}`}></div>
          <span className="text-secondary">
            {item.range} ({item.label})
          </span>
        </div>
      ))}
    </div>
  </div>
);
