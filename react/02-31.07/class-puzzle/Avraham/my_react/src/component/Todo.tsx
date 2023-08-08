import { IconButton, ListItem, ListItemSecondaryAction, ListItemText } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Todo as ITodo, useTodos } from "../hook/useTodo";

interface Props {
    todo: ITodo,
}

export function Todo({todo}: Props) {
    const {removeTodo} = useTodos()

    return <ListItem>
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