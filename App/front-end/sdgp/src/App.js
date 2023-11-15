import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Prediction from "./pages/Prediction";
import ProgramDetails from "./pages/ProgramDetails";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prediction" element={<Prediction/>} />
          <Route path="/Profile" element={<Profile/>} />
          <Route path="/program-details" element={<ProgramDetails/>} />
          <Route path="/login" element= {<Login/>} />
          <Route path="/create-account" element= {<CreateAccount/>} />
          <Route path="/about-us" element= {<AboutUs/>} />

          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </BrowserRouter>
   
  );
}

export default App;
