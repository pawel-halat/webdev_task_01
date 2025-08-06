import { type FC } from "react";

export const RoadMapError: FC = () => (
  <div className="relative flex items-center justify-center bg-danger-50 border border-danger-200 rounded-lg">
    <div className="text-danger text-center">
      <div className="font-medium">Failed to load map data</div>
      <div className="text-sm mt-1">Please try refreshing the page</div>
    </div>
  </div>
);
