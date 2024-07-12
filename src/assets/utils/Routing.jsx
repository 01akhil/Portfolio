import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from '../../Components/Menu/Menu'
import Home from '../../Components/LandingPage/Home'
import LoadParent from '../../Components/Loading/LoadParent'
import { useState } from 'react';

function Routing() {
  const [menuOpen,setMenuOpen]= useState(false);
  return (
    <div>
      <LoadParent/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      
      <Routes>
      <Route path="/" element={<Home menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>} />
      <Route path="/menu" element={<Menu />} />
      </Routes>
      
    </div>
  )
}

export default Routing
