import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';

// pages
import Layout from '../Pages/Layout'

function App() {

  return (
    <div className="App">
      <Routes>
      <Route path={'/Home/'} element={<Layout />} />
        <Route path={'*'} element={<>Erreur 404</>} />
      </Routes>
    </div>
  )
}

export default App;

