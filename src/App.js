import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated import

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Membership from './Components/Membership';
import DietWorkout from './Components/DietWorkout';
import Login from './Components/Login';

function App() {
  return (
    <div>
      <Router> {/* Changed BrowserRouter to Router */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Updated Route usage */}
          <Route path="/membership" element={<Membership />} /> {/* Updated Route usage */}
          <Route path="/diet" element={<DietWorkout />} /> {/* Updated Route usage */}
          <Route path="/login" element={<Login />} /> {/* Updated Route usage */}
        </Routes>
      </Router> {/* Changed closing tag to Router */}
    </div>
  );
}

export default App;
