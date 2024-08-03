import { Todo } from "../types/todo";

interface TodoCountProps {
  todos: Todo[];
}

const TodoCount = ({ todos }: TodoCountProps) => {
  let completedCount = 0;
  todos.forEach((todo: Todo) => todo.completed && completedCount++);
  return (
    <span className="mt-7 block text-center font-medium text-xl">
      {completedCount}/{todos.length} todos completed
    </span>
  );
};

export default TodoCount;
