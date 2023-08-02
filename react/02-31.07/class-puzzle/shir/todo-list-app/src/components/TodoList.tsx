import { List, ListItem, ListItemText } from "@mui/material";
import { useEffect, useState } from "react";

interface Todo {
    id: number;
    text: string;
}

const ToDoList = () => {
    const [todos,setTodos]= useState <Todo[]> ([]);
  
    useEffect(() => {
        const storedTodos = localStorage.getItem('todos');
        if (storedTodos) {
          setTodos(JSON.parse(storedTodos));
        }
      }, []);

      useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
      }, [todos]);

    const handleRemoveTodo= (id:number)=>{
        setTodos(todos.filter((todo)=> todo.id !== id));
    };



    return ( 
        <List>
            {todos.map((todo)=>(
           <ListItem key= {todo.id} onClick={()=> handleRemoveTodo(todo.id)}>
           <ListItemText primary={todo.text}/>
           </ListItem>
           ))}
        </List>

    );
}

export default ToDoList;