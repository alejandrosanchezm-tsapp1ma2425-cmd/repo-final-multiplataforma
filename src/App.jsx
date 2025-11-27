import { Route, Routes, useLocation } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Button from './components/button/button'
import Navbar from './components/navbar/Navbar'
import List from './views/list/List'
import Details from './views/details/Details'
import Profile from './views/profile/Profile'
import AboutUs from './views/aboutUs/AboutUs'
import Contact from './views/contact/Contact'


function App() {
  
  return (
    <>
      <Navbar/>
      <div className='fondonegro '>
        <Routes>
          <Route path="" element={<List />}/>
          <Route path="/details/:id" element={<Details />}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/aboutus' element={<AboutUs />}/>
        </Routes>
      </div>
    </>
  )
}

export default App
