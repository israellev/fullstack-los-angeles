import  React, { useState } from 'react'
import { TextField, Button } from '@mui/material';

interface Todo {
    id: number;
    text: string;
}

function AddTodo() {
const [newTodo, SetnewTodo] = useState('')
const [todos, setTodos] = useState([
    {id: 1, text: 'to do 1'} ,
    {id: 2, text: 'to do 2'}
]);

function handleAddTodo() {
    if (newTodo.trim() === '' ) return;
    const newId = todos.length > 0 ? todos[todos.length-1].id + 1 : 1; /*if and else in 1 line: ?=if :=else*/
    const newTodoItem = { id: newId, text: newTodo };
    setTodos([...todos, newTodoItem]);
    SetnewTodo('');
}
    return (
    <div>
        <TextField label="Add Todo" />
        <Button variant="contained" color="primary">
            Add
        </Button>
    </div>
    );
};

export default AddTodo