import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

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

export const useAddTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newTodo: Omit<Todo, "id">) => {
      const response = await apiClient.post<Todo>(
        API_CONFIG.endpoints.todos,
        newTodo
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
};
