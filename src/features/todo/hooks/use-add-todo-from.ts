import { useForm } from "react-hook-form";
import type { AddTodoForm } from "../types/add-todo-form.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { addTodoSchema } from "../schema/add-todo-schema";
import { TodoStatus } from "../types/todo-status.types";

export const useAddTodoForm = () => {
  return useForm<AddTodoForm>({
    resolver: zodResolver(addTodoSchema),
    defaultValues: {
      title: "",
      author: "",
      description: "",
      status: TodoStatus.IN_PLANNING,
      roadFid: "",
    },
    mode: "onTouched",
  });
};
