import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HelloWorld } from './app/hello-world';
import { Counter } from './app/Counter';
import { Name } from './app/Name';

function App() {
  return (
    <div>
      <HelloWorld/>
      <Name initName="Sapir"/>
      <Name initName="Sarit"/>
      <Name initName="Shir"/>
      <Counter start={1}/>
      <Counter start={100}/>
      <Counter start={1000} />
      <Counter start={10000}/>
    </div>
  );
}

export default App;
