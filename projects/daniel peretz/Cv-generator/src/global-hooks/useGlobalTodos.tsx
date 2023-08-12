import { createContext, useState, useContext } from "react";

export interface ITodo {
    id: string;
    text: string;
}

type ITodoContext = {
    todos: ITodo[],
    getTodos: () => ITodo[],
    removeTodo: (id: string) => void,
    setTodos: (todos: ITodo[]) => void,
}

const TodosContext = createContext<ITodoContext | null>(null)

export function TodosProvider(props: any) {
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

    return (
        <TodosContext.Provider value={{todos, setTodos, getTodos, removeTodo}}>
            {props.children}
        </TodosContext.Provider>
    );
}

export function useGlobalTodos() {
    return useContext(TodosContext) as ITodoContext
}
