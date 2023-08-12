import { useState } from "react";

export interface ITodo {
    id: string;
    text: string;
  }

export function useTodos() {
    const [todos, editTodos] = useState<ITodo[]>(getTodos());

    function getTodos() {
        const todosJson = localStorage.getItem("todos") || "[]"
        const todosArray = JSON.parse(todosJson)
        return todosArray
    }

    function setTodos(todos: ITodo[]) {
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

// why useTodos is not global 
// (if you change in one place, it's not auto change in the others)

// function getArray() {
//     return [];
// }

// const arr1: any = getArray()
// const arr2: any = getArray()

// arr1.push("1")
// console.log(arr1) // ["1"]
// console.log(arr2) // []
