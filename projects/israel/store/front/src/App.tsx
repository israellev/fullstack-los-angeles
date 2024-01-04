import React from "react";
import "./App.css";
import { Products } from "./components/Products";
import { Header } from "./components/Header";
import { UserProvider } from "./context/UserContext";
import { ProductProvider } from "./context/ProductsContext";

function App() {
  return (
    <div>
      <UserProvider>
        <ProductProvider>
          <Header />
          <Products />
        </ProductProvider>
      </UserProvider>
    </div>
  );
}

export default App;
