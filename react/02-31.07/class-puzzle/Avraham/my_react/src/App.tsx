import React from 'react';
import './App.css';
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import { AppBar, CssBaseline, Tab, Tabs } from "@mui/material";
import { AddTodo } from './component/AddTodo';
import { tab } from '@testing-library/user-event/dist/tab';
import { TodoList } from './component/TodoList';



function App() {
  return (
    <div className="">
    <BrowserRouter>
      <CssBaseline />
      
      <AppBar position="static" style={{ background: "#2196F3" }}>

        <Tabs centered value={tab} indicatorColor="secondary">

          <Tab label="Todo List" style={{ color: "white" }} component={Link} to="/" />
          <Tab label="Add Todo" style={{ color: "white" }} component={Link} to="/add"/>
        
        </Tabs>
      
      </AppBar>
      
      <Routes>

        <Route path="/" Component={() => <TodoList/>} />
        
        <Route path="/add" Component={() => <AddTodo/>} />
      
      </Routes>
    
    </BrowserRouter>
      </div>
  );
}

export default App;
