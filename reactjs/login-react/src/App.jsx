import { useState } from 'react'
// import './App.css'
import { Routes, Route } from "react-router-dom"
import Login from './Login'
import Profile from './Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <Routes>
        <Route path='/' element={<Login />} />
        <Route path="Login" element={<Login />} />
        <Route path="Profile" element={<Profile />} />
      </Routes>
    </>
  )
}

export default App
