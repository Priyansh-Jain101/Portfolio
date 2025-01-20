// import './App.css'
import React from 'react';
// import {createRoute} from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from "./Navbar";
import Hero from "./components/Home/Hero"
import ProjectPage from './components/Project/ProjectPage';
import AboutPage from './components/About/AboutPage';
import Footer from './Footer';
// import './style.css';
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Hero/>} />
        <Route path='/projects' element={<ProjectPage/>} />
        <Route path='/about' element={<AboutPage/>} />
      </Routes>
    <Footer/>
    </BrowserRouter>
    </>
)
    
  
}

export default App
