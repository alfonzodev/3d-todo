import { Todo } from "../types/todo";

interface TodoCountProps {
  todos: Todo[];
}

const TodoCount = ({ todos }: TodoCountProps) => {
  let completedCount = 0;
  todos.forEach((todo: Todo) => todo.completed && completedCount++);
  return (
    <span className="mt-9 block text-center font-medium text-2xl">
      {completedCount} / {todos.length} todos completed
    </span>
  );
};

export default TodoCount;
