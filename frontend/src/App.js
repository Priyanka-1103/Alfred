import React from "react";
// Screens
import Landing from "./screens/Landing.jsx";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'  
import Login from './components/Login/Login.jsx'
import Payment from "./components/Payment/Payment.jsx";
import './App.css'
import HomeService from "./components/Service/HomeService/HomeService.jsx";
import Cleaning from "./components/Service/Cleaning/Cleaning.jsx";
import Repair from "./components/Service/Repair/Repair.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          <Route path='/' element={<Landing />} />
          <Route path='/login' element={<Login />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/homeService' element={<HomeService/>} />
          <Route path='/cleaning' element={<Cleaning/>} />
          <Route path='/repair' element={<Repair/>} />
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;