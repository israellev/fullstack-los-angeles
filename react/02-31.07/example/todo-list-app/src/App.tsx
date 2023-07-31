import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { TodoList } from "./components/TodoList";
import { AddTodo } from "./components/AddTodo";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { AppBar, CssBaseline, Tab, Tabs } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
    <CssBaseline/>
      <AppBar position="static">
        <Tabs centered>
          <Tab label="Todo List" href="/" />
          <Tab label="Add Todo" href="/add" />
        </Tabs>
      </AppBar>
      <Routes>
        <Route path="/" Component={TodoList} />
        <Route path="/add" Component={AddTodo} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
