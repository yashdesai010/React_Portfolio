import React from "react";
import "./styles.css";

import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter as Router

// PAGES
import About from "./components/About";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Aboutpage from "./components/Aboutpage";
import Rating from "./components/Rating";

import { DarkModeProvider } from "./components/DarkModeContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';

export default function App() {

  
  return (
    
    <div className="App">
      <toast/>
      <ToastContainer />
      
      <DarkModeProvider>
      <Router> {/* Use Router here */}
        <Navbar />
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/" element={<About />} />
          <Route path="/Aboutpage" element={<Aboutpage/>}/>
          <Route path="/Education And Experience" element={<Header />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Rating" element={<Rating />} />
          <Route path="/Projects" element={<Project />} />
       
        </Routes>
      </Router>

      </DarkModeProvider>
      
    </div>
    
    
  );
  
}
