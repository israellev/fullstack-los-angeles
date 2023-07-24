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
      <Name/>
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
    </div>
  );
}

export default App;
