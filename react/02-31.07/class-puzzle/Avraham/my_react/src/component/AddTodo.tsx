// src/components/AddTodo.tsx
import React, { useState, useEffect } from "react";
import { TextField, Button, Box } from "@mui/material";
import { useTodos, Todo } from "../hook/useTodo"; // Correct import statement

import { v4 as uuidv4 } from 'uuid';

export const AddTodo = () => {
  const {todos, setTodos} = useTodos()
  const [newTodo, setNewTodo] = useState<string>("");

  const handleAddTodo = () => {
    if (newTodo.trim() === "") return;
    const newTodoItem: Todo = { id: uuidv4(), text: newTodo.trim() };
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


