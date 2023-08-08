import { Box, List } from "@mui/material";
import { ITodo, useTodos } from "../hooks/useTodos";
import { Todo } from "./Todo";
import { useContext } from "react";
import { createContext } from "vm";

export const TodoList = (props: any) => {
  const { todos } = useTodos();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          // alignItems: "center",
          height: "100vh",
        }}
      >
        <List
          sx={{ maxWidth: "500px", minWidth: "300px", textAlign: "center" }}
        >
          {todos.map((todo: ITodo, i: number) => (
            <Todo key={i} todo={todo} />
          ))}
        </List>
      </Box>
    </>
  );
};



// context

