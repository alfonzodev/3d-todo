import TodoForm from "./components/TodoForm";
import TodoCount from "./components/TodoCount";
import TodoItem from "./components/TodoItem";

import useTodos from "./hooks/useTodos";

function TodoList() {
  const { todos, addTodo, deleteTodo, completeTodo } = useTodos();

  return (
    <main className="font-poppins w-screen h-screen bg-emerald-300 py-10 px-8 overflow-y-auto">
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo} />
      ))}
      {todos.length > 0 && <TodoCount todos={todos} />}
    </main>
  );
}

export default TodoList;
