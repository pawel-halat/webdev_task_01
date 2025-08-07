import { z } from "zod";
import { TodoStatus } from "../types/todo-status.types";

export const addTodoSchema = z.object({
  title: z.string().min(1, "Title is required"),
  author: z.string().optional(),
  status: z.enum(TodoStatus),
  description: z.string().optional(),
  roadFid: z.string().optional(),
});
