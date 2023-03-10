import logo from './logo-plabs-full.png';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from "react";

import Login from './pages/Login';
import SystemDesign from './pages/SystemDesign';

import axios from 'axios';
import PrivateRoute from './components/PrivateRoute';

function App() {
  useEffect(() => {
    // getResponse()
  })

  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/design" element={
          <PrivateRoute>
            <SystemDesign/>
          </PrivateRoute>
        }/>
      </Routes>
    </div>
  );
}

export default App;
