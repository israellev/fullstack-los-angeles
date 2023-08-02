import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

interface Todo {
  id: number;
  text: string;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    // Fetch todos from local storage on component mount
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    // Save todos to local storage whenever todos state changes
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleRemoveTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <List>
      {todos.map((todo) => (
        <ListItem key={todo.id} onClick={() => handleRemoveTodo(todo.id)}>
          <ListItemText primary={todo.text} />
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;