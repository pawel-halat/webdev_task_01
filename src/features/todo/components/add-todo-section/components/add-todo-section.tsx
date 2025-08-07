import { useState, type FC } from "react";

import { Modal } from "../../../../ui/components";
import { Button } from "../../../../ui/components/buttons";
import { AddTodoForm } from "../../add-todo-form/add-todo-form";
import type { AddTodoForm as AddTodoFormData } from "../../../types/add-todo-form.types";
import { useAddTodo } from "../../../hooks/use-add-todo.mutation";

export const AddTodoSection: FC = () => {
  const [isTodoModalOpen, setIsTodoModalOpen] = useState(false);

  const { isPending, mutate } = useAddTodo();

  const onSubmit = (data: AddTodoFormData) => {
    mutate({
      title: data.title,
      status: data.status,
      description: data.description,
      author: data.author,
      road_fid: data.roadFid ? Number(data.roadFid) : undefined,
    });

    setIsTodoModalOpen(false);
  };

  return (
    <div className="flex flex-col items-start gap-4">
      <Button
        className="max-w-[150px]"
        onClick={() => setIsTodoModalOpen(true)}
      >
        Add Todo
      </Button>
      <Modal
        isOpen={isTodoModalOpen}
        title="Add Todo"
        onClose={() => setIsTodoModalOpen(false)}
        size="lg"
      >
        <AddTodoForm
          onSubmit={onSubmit}
          onClose={() => setIsTodoModalOpen(false)}
          isPending={isPending}
        />
      </Modal>
    </div>
  );
};
