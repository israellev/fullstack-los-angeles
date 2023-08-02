import { IconButton, ListItem, ListItemSecondaryAction, ListItemText } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Todo as ITodo, useTodos } from "../hooks/useTodos";

interface Props {
    todo: ITodo,
}

export function Todo({todo}: Props) {
    const {removeTodo} = useTodos()

    return <ListItem key={todo.id}>
    <ListItemText primary={todo.text} />
    <ListItemSecondaryAction>
      <IconButton
        edge="end"
        aria-label="delete"
        onClick={() => removeTodo(todo.id)}
      >
        <DeleteIcon />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
}