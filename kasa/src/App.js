import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Detail from './pages/Detail';
import Error from './pages/404';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/detail/:id" element={<Detail/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </Router>      
    </div>
  );
}

export default App;
