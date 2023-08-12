import React, {useState, useEffect, useRef} from 'react'//ייבוא מודולים מריאקט 

function TodoForm(props) {//הצהרה על פונקציה טודו פורם שמקבלת פרופס
    const [input, setInput] = useState(props.edit ?  props.edit.value:'');//השורה הזו משתמשת בהוק יוז-סטייט כדי ליצור משתנה בשם אינפוט וסט אינפוט . הערך ההתחלתי של אינפוט נקבע עי הערך פרופס.אדיט.ואליו . 
    //אם פרופס.אדיט הוא אמת האינפוט נקבע לפרופס.אדיט.ואליו 
    //: אחרת הוא יקבע לסטרינג ריק 

    const inputRef = useRef(null);

    useEffect (()=> {
        inputRef.current.focus();
    });

    const handleChange = event =>{
        setInput(event.target.value)
    };

    const handleSubmit = event => {
        event.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
    };

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
        {props.edit ? (
            <>
        <input 
        type='text' 
        placeholder='Update your item' 
        value={input} 
        name='text'
        className='todo-input edit'
        onChange={handleChange}
        ref={inputRef}
        />
        <button onClick={handleSubmit} className="todo-button edit">Update</button> 
        </>
        ):(
            <>
        <input 
            type='text' 
            placeholder='Add A Todo' 
            value={input} 
            name='text'
            className='todo-input'
            onChange={handleChange}
            ref={inputRef}
            />
            <button onClick={handleSubmit} className="todo-button">Add Todo</button>
            </>
            )}
  
    </form>
  ); 
}

export default TodoForm;