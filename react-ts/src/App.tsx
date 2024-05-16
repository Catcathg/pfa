import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';

// pages


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path={'*'} element={<>Erreur 404</>} />
      </Routes>
    </div>
  )
}

export default App;

