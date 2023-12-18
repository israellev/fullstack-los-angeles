import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/Header';
import { Products } from './components/Products';

function App() {
  return (
    <Router>
      <Header />
      <Products />
    </Router>
  );
}

export default App;
