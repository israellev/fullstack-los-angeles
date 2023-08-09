import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { TodoList } from "./components/TodoList";
import { AddTodo } from "./components/AddTodo";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import { AppBar, CssBaseline, Tab, Tabs } from "@mui/material";

function App() {
  const [tab, setTab] = useState(window.location.pathname === '/' ? 0 : 1);

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
        <Route path="/" Component={TodoList} />
        <Route path="/add" Component={AddTodo} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
