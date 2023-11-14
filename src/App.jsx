import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavigationBar from './components/NavigationBar'
import Home from './views/Home'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Meetups from './views/Meetups'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import { Carousel } from './Carousel'
import { PenFooter } from './components/PenFooter'
import { UnderConstruction } from './views/UnderConstruction'

function App() {


  return (
    <>

      <NavigationBar />
      {/* <div className="navgap"></div> */}

      <Routes>
        <Route children path="/" element={<Home />} />
        <Route children path="/meetups" element={<Meetups />} />
        <Route children path="/register" element={<Register />} />
        <Route children path="/login" element={<Login />} />
        <Route children path="/under-construction" element={<UnderConstruction />} />
      </Routes>

      <Footer />


    </>
  )
}
export default App;
