import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/Header';
import { Products } from './components/Products';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Header />
      <Products />
      <Login />
    </Router>
  );
}

export default App;
