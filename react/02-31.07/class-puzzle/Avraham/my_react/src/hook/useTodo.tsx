import { useState } from "react";

export interface Todo {
    id: string;
    text: string;
  }

export function useTodos() {
    const [todos, editTodos] = useState<Todo[]>(getTodos());

    function getTodos() {
        const todosJson = localStorage.getItem("todos") || "[]"
        const todosObject = JSON.parse(todosJson)
        return todosObject
    }

    function setTodos(todos: Todo[]) {
        editTodos(todos)
        const todosJson = JSON.stringify(todos)
        localStorage.setItem('todos', todosJson)
    }

    function removeTodo(todoId: string) {
        const newTodos = todos.filter((todo) => todo.id !== todoId)
        setTodos(newTodos);
    }

    return {todos, setTodos, removeTodo}
}
