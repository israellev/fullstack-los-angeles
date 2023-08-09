// src/components/AddTodo.tsx
import React, { useEffect, useState } from "react";
import { TextField, Box } from "@mui/material";
import { ITodo, useTodos } from "../hooks/useTodos";
import { v4 as uuidv4 } from "uuid";
import { TodoList } from "./TodoList";
import { useContext } from "react";
import { UserContext } from "../App";
import { useGlobalTodos } from "../global-hooks/useGlobalTodos";

export const AddTodo = () => {
  const { todos, setTodos } = useGlobalTodos();
  const [newTodo, setNewTodo] = useState<string>("");

  const user = useContext(UserContext);
  console.log(user); // {id: 1, name: "shir"}

  const handleAddTodo = () => {
    if (newTodo.trim() === "") return;
    const newTodoItem: ITodo = { id: uuidv4(), text: newTodo.trim() };
    setTodos([...todos, newTodoItem]);
    setNewTodo("");
  };

  // // 1. didMount and didUpdate - run when init, and each any state change
  useEffect(() => {
    console.log("1 useEffect");
  }, []);

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", height: "100vh", m: 1 }}
    >
      <TextField
        label="Add Todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleAddTodo();
        }}
      />
      <TodoList />
    </Box>
  );
};

// Component lifecycle:

// // mount - see html on the screen
// 1. didMount - useEffect
// 2. didUpdate - useEffect without [], or useEffect that one of the array has updated
// 3. willUnmount - return of useEffect
// unmount

// // 1. didMount and didUpdate - run when init, and each any state change
// useEffect(() => {
//   console.log('1 useEffect');
// })

// // 2. didMount - run when init only
// useEffect(() => {
//   console.log('2 useEffect');
// }, [])

// // 3. didMount and didUpdate of list - run when init, and when 'todos' state is changed
// useEffect(() => {
//   console.log('3 useEffect');
// }, [todos])

// // 4. willUnmount and before didUpdate - the return function run on the init and before component closed
// useEffect(() => {
//   return () => {
//     console.log('4 return useEffect')
//   }
// }, [todos])
