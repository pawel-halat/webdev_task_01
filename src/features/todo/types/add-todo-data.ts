import type { TodoStatus } from "./todo-status.types";

export type AddTodoData = {
  title: string;
  description?: string;
  status?: TodoStatus;
  author?: string;
  road_fid?: number;
};
