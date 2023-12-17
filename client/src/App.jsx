import { React, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import Contact from './Components/Contact'


function App() {

  return (
<Router>
  <Header />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
</Router>
      
  )
}

export default App
