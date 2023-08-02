import {
    Box, List,
} from "@mui/material";
import { useTodos } from "../hooks/useTodos";
import { Todo } from "./Todo";

export const TodoList = () => {
  const {todos} = useTodos()

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
        {todos.map((todo) => <Todo todo={todo}/>)}
      </List>
    </Box>
  );
};
