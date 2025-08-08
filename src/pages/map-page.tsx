import { useEffect, useState } from "react";
import { useDeferredValue } from "react";

import { roadTypesSignature } from "../features/shared/const/colors.const";
import { CardItem, MultiSelect, Select } from "../features/ui/components";
import { GradeValueType } from "../features/road/road-map/types/grade-value-types";
import { CheckIcon } from "../features/ui/icons";
import { MapLoader } from "../features/road/road-map/components/map-loader";
import { RoadMap } from "../features/road/road-map/components/road-map";
import { GradeType } from "../features/road/road-map/types";

const MapPage = () => {
  const [mounted, setMounted] = useState(false);
  const [selectedGradeType, setSelectedGradeType] = useState<GradeType>(
    GradeType.GW
  );
  const deferredGradeType = useDeferredValue(selectedGradeType);

  useEffect(() => {
    setMounted(true);
  }, []);

  const grades = roadTypesSignature.filter(
    (item) => item.grade != GradeValueType.NO_GRADE
  );

  const [selectedGrades, setSelectedGrades] = useState<GradeValueType[]>(
    grades.map((item) => item.grade)
  );

  const roadTypeOptions = grades.map(({ grade, label }) => ({
    value: grade,
    label,
  }));

  const onMultiSelectChange = (values: GradeValueType[]) => {
    setSelectedGrades(values.length > 0 ? values.map((value) => value) : []);
  };

  if (!mounted) return <MapLoader />;

  const gradeTypeOptions = [
    {
      value: GradeType.GW,
      label: "GW",
    },
    {
      value: GradeType.TWRIO,
      label: "TWRIO",
    },
    {
      value: GradeType.RISS,
      label: "RISS",
    },
  ];

  const featuresList = [
    "GeoJSON data from /roads endpoint",
    "Color coding based on evaluation grades",
    "Dropdown for evaluation type selection",
    "Map legend with color indicators",
    "Interactive popups with road details",
  ];

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-primary">Roads Map</h1>
        <div className="bg-white rounded-lg flex flex-col gap-[40px]">
          <div>
            <h2 className="text-xl font-semibold text-secondary mb-2">
              Leaflet Map Integration
            </h2>
            <div className="text-tertiary">
              This map displays roads data from the JSON server with different
              colors based on evaluation grades. Use the filter above to control
              which road types are visible.
            </div>
          </div>
          <RoadMap
            height="700px"
            center={[50.055, 10.245]}
            zoom={15}
            selectedGrades={selectedGrades}
            gradeType={deferredGradeType}
          />
          <div className="flex flex-row gap-2">
            <div className="w-1/2">
              <MultiSelect
                label="Filter by road grades"
                values={selectedGrades}
                options={roadTypeOptions}
                onChange={(value) =>
                  onMultiSelectChange(value as GradeValueType[])
                }
              />
            </div>
            <Select
              options={gradeTypeOptions}
              onChange={(value) => setSelectedGradeType(value as GradeType)}
              value={selectedGradeType}
              label="Select grade type"
              placeholder="Select grade type"
              className="pt-1"
            />
          </div>
        </div>
        <CardItem>
          <h3 className="text-lg font-medium text-info mb-2">Features:</h3>
          <ul className="text-info-700 space-y-1">
            {featuresList.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <CheckIcon className="w-4 h-4 text-green-600" />
                {feature}
              </li>
            ))}
          </ul>
        </CardItem>
      </div>
    </>
  );
};
export default MapPage;
