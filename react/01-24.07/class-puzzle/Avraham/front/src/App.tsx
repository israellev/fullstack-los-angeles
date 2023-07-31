import React from 'react';
import './App.css';
import Counter from './comps/counter';
import Isactivs from './comps/togglebtn';
import Smartbtn from './comps/smarttoggle';
import TodoList from './comps/todolist';


function App() {
  return (
    <div className='container'>
      <Counter start={0}/>
      <Isactivs/>
      <Smartbtn/>
      <TodoList start={[]}/>
      </div>
  );
}

export default App;
