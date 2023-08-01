// src/components/AddTodo.tsx
import React, { useState, useEffect } from "react";
import { TextField, Button, Box } from "@mui/material";

interface Todo {
  id: number;
  text: string;
}

export const AddTodo: React.FC = () => {
  const [newTodo, setNewTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>(JSON.parse(localStorage.getItem("todos") || "[]"));

  useEffect(() => {
    if (todos) localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    if (newTodo.trim() === "") return;
    const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
    const newTodoItem: Todo = { id: newId, text: newTodo.trim() };
    setTodos([...todos, newTodoItem]);
    setNewTodo("");
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", height: "100vh", m: 1 }}>
      <TextField
        label="Add Todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleAddTodo();
        }}
      />
    </Box>
  );
};
