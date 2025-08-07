import type { TodoStatus } from "./todo-status.types";

export type AddTodoForm = {
  title: string;
  status: TodoStatus;
  author?: string;
  description?: string;
  roadFid?: string;
};
