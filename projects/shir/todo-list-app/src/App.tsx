import React, { createContext, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { TodoList } from "./components/TodoList";
import { AddTodo } from "./components/AddTodo";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import { AppBar, CssBaseline, Tab, Tabs } from "@mui/material";
import { TodosProvider } from "./global-hooks/useGlobalTodos";

interface IUser {
  id: number;
  name: string;
}

export const UserContext = createContext<IUser | null>(null);

function App() {
  const [tab, setTab] = useState(window.location.pathname === "/" ? 0 : 1);
  const [user, setUser] = useState({ id: 1, name: "shir" });
  return (
    <BrowserRouter>
      <UserContext.Provider value={user}>
        <TodosProvider>
          <CssBaseline />
          <AppBar position="static" style={{ background: "#2196F3" }}>
            <Tabs
              centered
              value={tab}
              onChange={(e, newValue) => setTab(newValue)}
              indicatorColor="secondary"
            >
              {/* <Link to="/"></Link> */}
              <Tab
                label="Todo List"
                style={{ color: "white" }}
                component={Link}
                to="/"
              />
              <Tab
                label="Add Todo"
                style={{ color: "white" }}
                component={Link}
                to="/add"
              />
            </Tabs>
          </AppBar>
          <Routes>
            <Route path="/" Component={() => <TodoList />} />
            <Route path="/add" Component={() => <AddTodo />} />
          </Routes>
        </TodosProvider>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
