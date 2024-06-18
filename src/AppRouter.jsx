// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Quote from './pages/Quote';
import Restaurant from './pages/Restaurant';
import Food from './pages/Food';
import Contact from './pages/Contact';
import './App.css'

function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/foods" element={<Food />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
