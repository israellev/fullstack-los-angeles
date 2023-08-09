import {
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { ITodo, useTodos } from "../hooks/useTodos";

interface Props {
  todo: ITodo;
}

export function Todo(props: Props) {
  const { todo } = props;
  const { removeTodo } = useTodos();

  return (
    <ListItem>
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
  );
}
