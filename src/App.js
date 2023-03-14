import logo from './logo-plabs-full.png';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from "react";

import { Login, UserManagement, SystemDesign } from './pages/index';

import PrivateRoute from './components/PrivateRoute';
import Sidebar from './components/Navbar';

function App() {
  useEffect(() => {
    // getResponse()
  })

  return (
    <div>
      <Routes>
          <Route path="/" element={
            <Sidebar>
              <UserManagement/>
            </Sidebar>}/>
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
      </Routes>
    </div>
  );
}

export default App;
