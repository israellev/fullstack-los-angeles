import React, { useState } from "react";
import "./App.css";
import { ToDoList } from "./components/TodoList";
import { AddTodo } from "./components/AddTodo";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import { AppBar, CssBaseline, Tab, Tabs } from "@mui/material";

function App() {
  const [tab, setTab] = useState(0);

  return (
    <BrowserRouter>
    <CssBaseline/>
    <AppBar position="static" style={{ background: "#2196F3" }}>
      <Tabs
        centered
        value={tab}
        onChange={(e, newValue) => setTab(newValue)}
        indicatorColor="secondary"
      >
        <Tab label="Todo List" to="/" style={{ color: "white" }} component={Link}/>
        <Tab label="Add Todo" to="/add" style={{ color: "white" }} component={Link}/>
      </Tabs>
    </AppBar>
      <Routes>
        <Route path="/" Component={ToDoList} />
        <Route path="/add" Component={AddTodo} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
