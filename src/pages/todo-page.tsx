import { type FC } from "react";

import { AddTodoSection, TodosSection } from "../features/todo";

const TodoPage: FC = () => (
  <div className="flex flex-col container mx-auto p-4">
    <h1 className="text-3xl font-bold mb-[50px] text-primary">Todo Table</h1>
    <div className="flex flex-col space-y-[50px]">
      <AddTodoSection />
      <TodosSection />
    </div>
  </div>
);

export default TodoPage;
