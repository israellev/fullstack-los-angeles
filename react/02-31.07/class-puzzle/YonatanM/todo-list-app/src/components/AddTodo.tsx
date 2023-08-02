import React from 'react';
import { TextField, Button } from '@mui/material';

const AddTodo: React.FC = () => {
  // Your AddTodo component code here
  return <div>Add Todo</div>;
};

// src/components/AddTodo.tsx

const AddTodo: React.FC = () => {
  // Your styled AddTodo component code here
  return (
    <div>
      <TextField label="Add Todo" />
      <Button variant="contained" color="primary">
        Add
      </Button>
    </div>
  );
};

export default AddTodo;
