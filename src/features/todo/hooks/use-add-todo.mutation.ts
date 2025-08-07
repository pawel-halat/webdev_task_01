import { useMutation, useQueryClient } from "@tanstack/react-query";
import { API_CONFIG } from "../../../config/api";
import { apiClient } from "../../../config/axios";
import type { Todo } from "../types/todo.types";
import type { AddTodoData } from "../types/add-todo-data";

export const useAddTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newTodo: AddTodoData) => {
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
