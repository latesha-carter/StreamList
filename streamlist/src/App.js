// src/App.js
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import StreamList from './components/Home';
import About from './components/About';
import Cart from './components/Contact';
import './App.css';
import Cart from './Cart';
import Movies from './Movies';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/">StreamList</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/movies">Movies</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<StreamList />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </div>
  );
}

export default App;

export default App;
