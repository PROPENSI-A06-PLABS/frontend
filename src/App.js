import logo from './logo-plabs-full.png';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from "react";

import Login from './pages/Login';
import SystemDesign from './pages/SystemDesign';

import axios from 'axios';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(null);

  const getResponse = () => { //IMPLEMENT AXIOS
      axios.get('/validate').then((response) => {
          setisLoggedIn(true)
      }
      ).catch(error => setisLoggedIn(false))
  }

  useEffect(() => {
    getResponse()
  })

  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/design" element={
          // <PrivateRoute isLoggedIn={isLoggedIn}>
            <SystemDesign/>
          // {/* </PrivateRoute> */}
        }/>
      </Routes>
    </div>
  );
}

export default App;
