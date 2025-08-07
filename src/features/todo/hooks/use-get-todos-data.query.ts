import { useQuery } from "@tanstack/react-query";

import { API_CONFIG } from "../../../config/api";
import apiClient from "../../../config/axios/axios";
import type { Todo } from "../types/todo.types";

export const useGetTodosData = () => {
  return useQuery<Todo[]>({
    queryKey: ["todos"],
    queryFn: async () => {
      const response = await apiClient.get<Todo[]>(API_CONFIG.endpoints.todos);
      return response.data;
    },
  });
};
