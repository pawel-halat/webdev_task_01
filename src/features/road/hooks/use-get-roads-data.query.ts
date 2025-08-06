import { useQuery } from "@tanstack/react-query";

import { API_CONFIG } from "../../../config/api";
import apiClient from "../../../config/axios/axios";

export const useGetRoadsData = () => {
  return useQuery<GeoJSON.FeatureCollection>({
    queryKey: ["roads"],
    queryFn: async (): Promise<GeoJSON.FeatureCollection> => {
      const response = await apiClient.get<GeoJSON.FeatureCollection>(
        API_CONFIG.endpoints.roads
      );

      return response.data;
    },
  });
};
