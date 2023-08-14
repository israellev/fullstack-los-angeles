import {Box, List,} from "@mui/material";
import { Todo } from "./Todo";
import { useTodos } from "../hook/useTodo";
 
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
        {todos.map((todo: any,i) => <Todo key = {i} todo={todo}/>)}
      </List>
    </Box>
  );
};
