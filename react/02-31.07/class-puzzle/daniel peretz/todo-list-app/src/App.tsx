import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={TodoList} />
        <Route path="/add" Component={AddTodo} />
      </Routes>
    </BrowserRouter>

  );
};

export default App;


