import { Todo } from "../types/todo";
import { RiDeleteBinLine } from "react-icons/ri";

interface TodoItemProps {
  todo: Todo;
  completeTodo: (id: number, completed: boolean) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem = ({ todo, completeTodo, deleteTodo }: TodoItemProps) => {
  return (
    <div className="flex mb-3">
      <label className="grow flex items-center gap-4 border rounded-md py-2 text-xl px-6 border-gray-400 bg-white hover:bg-slate-50 cursor-pointer">
        <input
          type="checkbox"
          className="scale-150"
          checked={todo.completed}
          onChange={(e) => completeTodo(todo.id, e.target.checked)}
        />
        <span className={todo.completed ? "line-through text-gray-500" : ""}>{todo.title}</span>
      </label>
      <button className="grow-0 p-5" onClick={() => deleteTodo(todo.id)}>
        <RiDeleteBinLine className="text-2xl hover:text-red-600" />
      </button>
    </div>
  );
};

export default TodoItem;
