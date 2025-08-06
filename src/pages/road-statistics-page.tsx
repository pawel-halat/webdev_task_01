import { type FC } from "react";

import { RoadsSection } from "../features/road";
import { RoadsAverageGrade } from "../features/road/roads-section/components/roads-average-grade/roads-average-grade";

const RoadStatisticsPage: FC = () => (
  <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold mb-6 text-primary">
      Roads Statistics Page
    </h1>
    <div className="flex flex-col space-y-[50px]">
      <RoadsAverageGrade />
      <RoadsSection />
    </div>
  </div>
);

export default RoadStatisticsPage;
