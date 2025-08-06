import { type FC } from "react";
import { TileLayer } from "react-leaflet";

export const MapTile: FC = () => (
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
);
