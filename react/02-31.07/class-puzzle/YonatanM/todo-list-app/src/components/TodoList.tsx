
import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
const TodoList: React.FC = () => {
  // Your TodoList component code here
  return <div>Todo List</div>;
};

export default TodoList;

// src/components/TodoList.tsx

const TodoList: React.FC = () => {
  // Your styled TodoList component code here
  return (
    <List>
      <ListItem>
        <ListItemText primary="Todo 1" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Todo 2" />
      </ListItem>
    </List>
  );
};

export default TodoList;
