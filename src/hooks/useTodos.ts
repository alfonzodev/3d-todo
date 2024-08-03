import { useState, useEffect } from "react";
import { Todo } from "../types/todo";

const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos") ?? "[]");
    return savedTodos;
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const completeTodo = (id: number, completed: boolean) => {
    setTodos((todos) => todos.map((todo) => (todo.id === id ? { ...todo, completed } : todo)));
  };

  const addTodo = (todo: Todo) => {
    setTodos((todos) => [todo, ...todos]);
  };

  const deleteTodo = (id: number) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  return { todos, completeTodo, addTodo, deleteTodo };
};

export default useTodos;
