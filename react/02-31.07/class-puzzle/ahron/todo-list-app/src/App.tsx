import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Todolist from './component/TodoList';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" Component={Todolist} />
    <Route path="/add" Component={AddTodo} />
      </Routes>
      </BrowserRouter>
    );
}

export default App;
