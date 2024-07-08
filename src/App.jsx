// src/App.jsx
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Overview from './pages/Overview';

const App = () => {
  return (
  <Router>
    <Routes>
      <Route path='/' element={<Overview/>} />
      
    </Routes>
  </Router>    
  )
}

export default App