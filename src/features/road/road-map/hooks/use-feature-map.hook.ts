import React from "react";
import { renderToString } from "react-dom/server";
import { Layer } from "leaflet";

import { GradeValueType } from "../types/grade-value-types";
import { RoadPopup } from "../components/road-popup/road-popup";
import { RoadTooltip } from "../components/road-tooltip";

interface FeatureProperties {
  name?: string;
  eemi_grade?: {
    gw?: number;
  };
}

interface Feature {
  properties?: FeatureProperties;
}

export const useTransformMapPopup = () => {
  const handleFeatureInteraction = (
    feature: Feature,
    layer: Layer,
    color: string,
    grade: GradeValueType,
    label: string
  ) => {
    const { name, eemi_grade = {} } = feature.properties || {};
    const gw = eemi_grade?.gw;

    const originalStyle = {
      color,
      weight: 4,
      opacity: 0.8,
    };

    const highlightStyle = {
      color,
      weight: 8,
      opacity: 1,
    };

    layer.on({
      mouseover: (e) => {
        const layer = e.target;
        layer.setStyle(highlightStyle);
        layer.bringToFront();
      },
      mouseout: (e) => {
        const layer = e.target;
        layer.setStyle(originalStyle);
      },
    });

    const popupHTML = renderToString(
      React.createElement(RoadPopup, {
        name,
        grade: gw,
        gradeType: grade,
        label,
      })
    );
    layer.bindPopup(popupHTML);

    const tooltipHTML = renderToString(
      React.createElement(RoadTooltip, {
        name,
        grade: gw,
        gradeLabel: label,
        gradeColor: color,
        gradeType: grade,
      })
    );

    layer.bindTooltip(tooltipHTML, {
      permanent: false,
      direction: "top",
      offset: [0, -10],
      opacity: 0.95,
    });
  };

  return {
    handleFeatureInteraction,
  };
};
