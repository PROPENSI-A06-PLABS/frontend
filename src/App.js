import logo from './logo-plabs-full.png';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from "react";

import Login from './pages/Login';
import SystemDesign from './pages/SystemDesign';

import PrivateRoute from './components/PrivateRoute';
import Sidebar from './components/Navbar';
import Dashboard from './pages/Dashboard';

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
              <Sidebar>
                <SystemDesign/>
              </Sidebar>
            </PrivateRoute>
          }/>
          <Route path="/design-clean" element={
            <PrivateRoute>
              <SystemDesign/>
            </PrivateRoute>
          }/>
           <Route path="/" element={
            <PrivateRoute>
              <Sidebar>
                <Dashboard/>
              </Sidebar>
            </PrivateRoute>
          }/>
      </Routes>
    </div>
  );
}

export default App;
