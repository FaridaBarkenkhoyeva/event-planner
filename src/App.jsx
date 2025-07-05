import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import About from './pages/About'

function App() {


  return (
    <>
      <Routes> 
        <Route path= "/" element={<HomePage />} />
        <Route path= "/about" element= {<About/>} />
        
      </Routes>
      <nav> 
        <Link to="/"> home link </Link> <br />
        <Link to="/about"> about link</Link>
      </nav>
      
    </>
  )
}

export default App
