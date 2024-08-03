import { useState } from "react";
import { Todo } from "../types/todo";

interface TodoFormProps {
  addTodo: (todo: Todo) => void;
}

const TodoForm = ({ addTodo }: TodoFormProps) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("hellooo");

    if (!input.trim()) {
      setError("Please provide a to-do.");
    } else {
      addTodo({ id: Date.now(), title: input, completed: false });
      setInput("");
      setError("");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="mb-10 relative">
      <div className="flex gap-x-4">
        <input
          type="text"
          placeholder="What's to be done?"
          className="grow text-xl rounded-md p-4 focus:outline-none border border-gray-400  focus-effect"
          value={input}
          onChange={(e) => {
            setError("");
            setInput(e.target.value);
          }}
        />
        <button
          type="submit"
          className="px-10 text-xl bg-gray-900 text-white rounded-md hover:bg-gray-800"
        >
          Add
        </button>
      </div>

      {error && <span className="absolute text-red-600 mt-1 ml-4">{error}</span>}
    </form>
  );
};

export default TodoForm;
