import { type FC } from "react";

import { TodosSection } from "../features/todo";

const TodoTablePage: FC = () => (
  <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold mb-6 text-primary">Todo Table</h1>
    <div className="flex flex-col space-y-[50px]">
      <TodosSection />
    </div>
  </div>
);

export default TodoTablePage;
