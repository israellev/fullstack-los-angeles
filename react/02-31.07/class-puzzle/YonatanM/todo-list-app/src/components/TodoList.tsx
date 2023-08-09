import {
  Box,
IconButton,
List,
ListItem,
ListItemSecondaryAction,
ListItemText,
} from "@mui/material";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
export interface Todo {
id: number;
text: string;
}

export const TodoList = () => {
const [todos, setTodos] = useState<Todo[]>(JSON.parse(localStorage.getItem("todos") || '[]'));

const handleRemoveTodo = (id: number) => {
  const newTodos = todos.filter((todo) => todo.id !== id)
  setTodos(newTodos);
  localStorage.setItem('todos', JSON.stringify(newTodos))
};

return (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      // alignItems: "center",
      height: "100vh",
    }}
  >
    <List sx={{ maxWidth: "500px", minWidth: '300px', textAlign: "center" }}>
      {todos.map((todo) => (
        <ListItem key={todo.id}>
          <ListItemText primary={todo.text} />
          <ListItemSecondaryAction>
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => handleRemoveTodo(todo.id)}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  </Box>
);
};
