import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HelloWorld } from './app/hello-world';
import { Counter } from './app/Counter';
import { Name } from './app/Name';
import { Clock } from './app/Clock';

function App() {
  return (
    <div>
      <HelloWorld/>
      <Clock/>
      {/* <Name initName="Gdi"/> */}
      {/* <Name initName="Riki"/> */}
      <Counter start={1}/>
      <Counter start={100}/>
      {/* <Counter start={1000} /> */}
      {/* <Counter start={10000}/> */}
    </div>
  );
}

export default App;
