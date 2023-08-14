import React, { useState ,useEffect } from 'react';

function TodoList({start} ) {
 
  const [todoText, setTodoText] = useState(start); // כאן נכניס את המטלות לביצוע 
  const [todos, setTodos] = useState(initItmes());// כאן ל=נאחסן אותם על ידי מערך / אובייקט
  const [id, setId] = useState(1); // כאן אנו נגדיר איזשהו איי די בכדי שייקל עלינו בהמשך למחיקה של המשימות שביצענו
  
  function initItmes() {
    const storedTodos = localStorage.getItem('todos')
    return storedTodos ? JSON.parse(storedTodos) : [];
  }

  useEffect(() => {
    // Save todos to local storage whenever todos state changes
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  // ניצור אובייקט שיאחסן את המשימות לביצוע עם תעודת זהות בכדי שנוכל למחוק אותו בעתיד 
  const addItem = () => {
    const newItem = {
      id: id,// ערך האיי די של אותו רשימה
      value: todoText, // אחסון של המשימה שצריך לבצע 
    };
    
    setTodos(oldList => [...oldList, newItem]);// הוספה משימה חדשה למערך/אובייקט
    setTodoText(start); // לאתחל מחדש את שדה האינפוט
    setId(prevId => prevId + 1); // הגדלת האיי די למשימה הבאה
    console.log(todos)
  };
  
  
  // תוספת שלי - בתוספת זאת הוספתי לחצן למחיקת המשימה שבוצעה מהרשימה כפי שלמדנו עם פונקציית פילטר
  const deleteFromList = itemId => {
    const updatedArray = todos.filter(item => item.id !== itemId);//כאן מבצעים את המימוש 
     setTodos(updatedArray);// כאן מעדכנים את הרשימה 
    
  };
  
  return (
    <div className="m-4 d-flex flex-column align-items-center border p-5 shadow">
      <h2 className='text-primary'>The bonus</h2>
      
      <div className="input-group mb-2 col-md-6 d-flex justify-content-center">
      <input onKeyDown={(e)=>{
        if(e.key == "Enter"){addItem()}
        }}
        type="text"
        className="d-flex justify-content-center text-center"
        placeholder="Add a new item"
        value={todoText} // הערך של המשימה נעדכן לפי המשתמש 
        onChange={(e) => setTodoText(e.target.value)} // כאן אנו מושכים את הערך לתוך האובייקט
      />
      <div className="input-group-append">
        <button className="btn btn-info" type="button" onClick={addItem}>
          Add To List
        </button>
      </div>
    </div>
    <h2>My List</h2>
    <ul className="list-group">
        {todos.map((item) => (
          <li
            key={item.id}
            className="list-group-item d-flex justify-content-between align-items-center border-info"
          >
            {item.value}
          
            <button
              className="btn btn-link text-info"
              onClick={() => deleteFromList(item.id)}
            >
              <i className="fa fa-window-close"></i>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
