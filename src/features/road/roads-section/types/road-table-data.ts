import type { Road } from "./road.types";

export interface RoadTableData extends Omit<Road, "eemi_grade"> {
  gw?: number;
  twgeb?: number;
  twofs?: number;
  twrio?: number;
  twsub?: number;
  tweben?: number;
  grade?: number;
}
