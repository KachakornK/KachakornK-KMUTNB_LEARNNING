import { useState } from 'react'
import {BrowserRouter,Route,Routes,Navigate} from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import About from './components/About'
import Notfound from './components/Notfound'
import Home from './components/Home'


export default  function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/*' element={<Notfound/>}></Route>
        <Route path='/home' element={<Navigate to={"/"}/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

