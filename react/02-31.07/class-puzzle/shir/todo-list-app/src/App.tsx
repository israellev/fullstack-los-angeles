import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ToDoList from './components/TodoList';
import AddToDo from './components/AddTodo';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ToDoList />} />
      <Route path="/add" element={<AddToDo />} />
    </Routes>
  </BrowserRouter>
  
  );
}

export default App;
