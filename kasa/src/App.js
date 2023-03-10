import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <p>Bonjour</p>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
