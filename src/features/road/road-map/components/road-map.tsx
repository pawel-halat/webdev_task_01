import { type FC, useEffect, useState } from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { useGetRoadsData } from "../../hooks/use-get-roads-data.query";
import { useTransformMapPopup } from "../hooks/use-feature-map.hook";
import { roadTypesSignature } from "../../../shared/const/colors.const";
import { filterRoadFeatures } from "../helpers/geojson.helper";
import { GradeType } from "../types/grade-types";
import { RoadMapLoading } from "./road-map-loading";
import { RoadMapLegend } from "./road-map-legend";
import { RoadMapError } from "./road-map-error";
import { MapTile } from "./map-tile";

interface RoadMapProps {
  center?: [number, number];
  zoom?: number;
  height?: string;
  selectedGrades?: GradeType[];
}

export const RoadMap: FC<RoadMapProps> = ({
  center,
  zoom,
  height,
  selectedGrades,
}: RoadMapProps) => {
  const {
    data: roadsData,
    isLoading: isDataLoading,
    error,
  } = useGetRoadsData();
  const { handleFeatureInteraction } = useTransformMapPopup();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (error) return <RoadMapError />;

  const filteredRoadTypes = roadTypesSignature.filter((roadType) =>
    selectedGrades ? selectedGrades.includes(roadType.grade) : true
  );

  const isLoading = isDataLoading || !isMounted;

  return (
    <div className={"relative"} style={{ height }}>
      {isLoading ? (
        <RoadMapLoading />
      ) : (
        <>
          <RoadMapLegend />
          <MapContainer
            center={center}
            zoom={zoom}
            className="h-full w-full rounded-lg"
          >
            <MapTile />
            {roadsData && (
              <>
                {filteredRoadTypes.map(({ grade, color, label }) => (
                  <GeoJSON
                    key={`${grade}-roads-${roadsData.features.length}`}
                    data={filterRoadFeatures(roadsData, grade)}
                    style={{
                      color,
                      weight: 4,
                      opacity: 0.8,
                    }}
                    onEachFeature={(feature, layer) => {
                      handleFeatureInteraction(
                        feature,
                        layer,
                        color,
                        grade,
                        label
                      );
                    }}
                  />
                ))}
              </>
            )}
          </MapContainer>
        </>
      )}
    </div>
  );
};
