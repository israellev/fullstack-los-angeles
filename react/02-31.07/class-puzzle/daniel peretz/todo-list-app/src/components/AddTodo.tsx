import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';

interface Todo {
  id: number;
  text: string;
}

const AddTodo: React.FC = () => {
  const [newTodo, setNewTodo] = useState<string>('');
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

  const handleAddTodo = () => {
    if (newTodo.trim() === '') return;
    const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
    const newTodoItem: Todo = { id: newId, text: newTodo };
    setTodos([...todos, newTodoItem]);
    setNewTodo('');
  };

  return (
    <div>
      <TextField
        label="Add Todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleAddTodo}>
        Add
      </Button>
    </div>
  );
};

export default AddTodo;