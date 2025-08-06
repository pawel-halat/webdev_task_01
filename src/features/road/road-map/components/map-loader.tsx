import { type FC } from "react";

export const MapLoader: FC = () => (
  <div className="flex items-center justify-center min-h-[400px] rounded-lg">
    <div className="flex flex-col items-center space-y-4">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-primary mb-1">Loading Map</h3>
        <p className="text-tertiary flex items-center">
          Preparing roads data
          <span className="ml-1 flex">
            <span className="animate-bounce delay-0">.</span>
            <span className="animate-bounce delay-75">.</span>
            <span className="animate-bounce delay-150">.</span>
          </span>
        </p>
      </div>
    </div>
  </div>
);
