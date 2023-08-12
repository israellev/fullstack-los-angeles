import React, {useState} from 'react'
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo =>{
        if(!todo.text || /^\s*$/.test(todo.test)){//שורת קוד שמטרתה שגם אם יקלידו רווחים בלי כלום זה לא יופיע בטודו ליסט ואפ יקיךידו תו כלשהו ואז רווח ועוד תו זה ימחק את הרווחים  
            return;
        }
        const newTodos = [todo, ...todos]

        setTodos(newTodos)
    }

    const updateTodo = (todoId, newVlaue) => {
        if(!newVlaue.text || /^\s*$/.test(newVlaue.text)){//שורת קוד שמטרתה שגם כאשר מעדכנים טודו אם יקלידו רווחים בלי כלום זה לא יופיע בטודו ליסט ואפ יקיךידו תו כלשהו ואז רווח ועוד תו זה ימחק את הרווחים  
            return
        } 
        setTodos(prev => prev.map(item => (item.id === todoId ? newVlaue : item)));
        
    };

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo  => todo.id !== id);

        setTodos(removeArr);
    };

    const completeTodo = id => {
        let updateTodos = todos.map(todo => {
            if(todo.id === id){
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos (updateTodos);
    };

  return (
    <div>
        <h1>What's The Plan For Today?</h1>
        <TodoForm onSubmit={addTodo}/>
        <Todo todos={todos} 
        completeTodo={completeTodo} 
        removeTodo ={removeTodo} 
        updateTodo={updateTodo}/>
    </div>
  );
}

export default TodoList;