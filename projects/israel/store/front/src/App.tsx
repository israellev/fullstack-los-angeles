import React from "react";
import "./App.css";
import { Products } from "./components/Products";
import { Header } from "./components/Header";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <div>
      <UserProvider>
        <Header />
        <Products />
      </UserProvider>
    </div>
  );
}

export default App;
