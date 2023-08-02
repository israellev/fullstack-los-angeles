import { Button, TextField } from "@mui/material"
import { useEffect, useState } from "react"


interface Todo {
    id: number
    text: string
}

const AddToDo= ()=> {

    const [newTodo, SetNewTodo]= useState<string> (``);
    const [todos, setTodos]= useState <Todo[]> ( []);

    useEffect(() => {
        const storedTodos = localStorage.getItem('todos');
        if (storedTodos) {
          setTodos(JSON.parse(storedTodos));
        }
      }, []);
    
      useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
      }, [todos]);

        const handelAddTodo= ()=> {
            if (newTodo.trim()===``) return;
            const newId= todos.length>0 ? todos[todos.length-1 ].id +1 :1 ;
            const newTodoItem: Todo= {id: newId,text:newTodo};
            setTodos([...todos, newTodoItem]);
            SetNewTodo(``);
        }
    



    return (
        <div>
            <TextField label="Add Todo"
            value={newTodo} 
            onChange={(e)=>SetNewTodo(e.target.value)}/>

            <Button variant="contained" color="primary" onClick={handelAddTodo}> Add </Button>
        </div>

    );
};

export default AddToDo