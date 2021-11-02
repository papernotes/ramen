import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";

import Toolbar from './Toolbar';
import Faq from './Faq';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Toolbar/>
      <Routes>
        <Route path='*' element={<Home/>}/>
        <Route exact path="/ramen" element={<Home/>}/>
        <Route exact path="/ramen/faq" element={<Faq/>}/>
      </Routes>
    </div>
  );
}

export default App;
