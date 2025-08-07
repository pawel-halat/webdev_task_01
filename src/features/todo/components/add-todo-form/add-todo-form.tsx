import { type FC } from "react";
import { useAddTodoForm } from "../../hooks/use-add-todo-from";
import { Button, Select, TextField } from "../../../ui/components";
import { Controller } from "react-hook-form";
import { TodoStatus } from "../../types/todo-status.types";
import type { AddTodoForm as AddTodoFormData } from "../../types/add-todo-form.types";
import { NumberField } from "../../../ui/components/number-field";

type Props = {
  isPending?: boolean;
  onSubmit: (data: AddTodoFormData) => void;
  onClose: () => void;
};

export const AddTodoForm: FC<Props> = ({ onSubmit, isPending }) => {
  const todoForm = useAddTodoForm();

  const { control } = todoForm;

  const todoStatusOptions = [
    { value: TodoStatus.CLOSED, label: TodoStatus.CLOSED },
    { value: TodoStatus.IN_PLANNING, label: TodoStatus.IN_PLANNING },
  ];

  const onClose = () => {
    todoForm.reset();
    onClose();
  };

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={todoForm.handleSubmit(onSubmit)}
    >
      <div className="flex flex-row gap-4">
        <Controller
          name="title"
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              label="Title"
              name="title"
              placeholder="Enter todo title"
              onChange={field.onChange}
              value={field.value}
              errorMessage={fieldState.error?.message}
              className="flex-1"
              required
            />
          )}
        />
        <Controller
          name="status"
          control={control}
          render={({ field, fieldState }) => (
            <Select
              label="Road fid"
              placeholder="Enter road feature ID"
              onChange={field.onChange}
              value={field.value}
              options={todoStatusOptions}
              errorMessage={fieldState.error?.message}
            />
          )}
        />
      </div>
      <div className="flex flex-row gap-4">
        <Controller
          name="author"
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              label="Author"
              name="author"
              placeholder="Enter author"
              onChange={field.onChange}
              className="flex-1"
              value={field.value}
              errorMessage={fieldState.error?.message}
            />
          )}
        />
        <Controller
          name="roadFid"
          control={control}
          render={({ field, fieldState }) => (
            <NumberField
              label="Road fid"
              placeholder="Enter road feature ID"
              onChange={field.onChange}
              value={field.value ?? ""}
              className="flex-1"
              errorMessage={fieldState.error?.message}
            />
          )}
        />
      </div>
      <Controller
        name="description"
        control={control}
        render={({ field, fieldState }) => (
          <TextField
            label="Description"
            placeholder="Enter todo description"
            name="description"
            onChange={field.onChange}
            value={field.value}
            errorMessage={fieldState.error?.message}
          />
        )}
      />
      <div className="flex flex-row gap-4 pt-2">
        <Button type="submit" isDisabled={isPending}>
          Add Todo
        </Button>
        <Button
          type="button"
          variant="white"
          onClick={onClose}
          isDisabled={isPending}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};
