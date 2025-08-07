import type { TodoStatus } from "./todo-status.types";

export interface Todo {
  id?: number;
  title: string;
  description?: string;
  status: TodoStatus;
  author: string;
  road_fid: number;
}
