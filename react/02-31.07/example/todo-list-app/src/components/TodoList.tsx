import { IconButton, List, ListItem, ListItemSecondaryAction, ListItemText } from "@mui/material";
import { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
export interface Todo {
  id: number;
  text: string;
}

export const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Todo 1" },
    { id: 2, text: "Todo 2" },
  ]);

  const handleRemoveTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  
  return (
     <List>
      {todos.map((todo) => (
        <ListItem key={todo.id}>
          <ListItemText primary={todo.text} />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete" onClick={() => handleRemoveTodo(todo.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};
