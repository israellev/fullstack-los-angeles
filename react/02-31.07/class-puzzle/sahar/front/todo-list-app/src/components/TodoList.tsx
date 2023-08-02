import React, { useState } from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

interface Todo {id: number, text: string}

function TodoList() {
    const [todos, setTodos] = useState([
        {id: 1, text: 'to do 1'} ,
        {id: 2, text: 'to do 2'}
    ]);

    const handleRemoveTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id))
}
    return (
        <List>
            {todos.map((todo) => (
            <ListItem key={todo.id} onClick={() => handleRemoveTodo(todo.id)}>
                <ListItemText primary= {todo.text} />
            </ListItem>
            ))}
        </List>
    );
};

export default TodoList