import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Toggle } from './App/Toggle';
import { Counter } from './App/Counter'


function App() {
  return (
    <div>
      <Toggle onOff="On"/>
      <Counter/>
    </div>
  );
}

export default App;
