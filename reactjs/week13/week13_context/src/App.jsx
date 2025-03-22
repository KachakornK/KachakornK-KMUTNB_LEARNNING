import { createContext, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Mybutton from './components/Mybuttom'
import Counter from './components/Counter'
import Delete from './components/Delete'
import Clear from './components/Clear'
import Home from './components/Home'
import Productlist from './components/Productlist'
import VertifyUser from './components/VertifyUser'



export const AppContext = createContext(null)
export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/productlist' element={<Productlist/>}></Route>
        <Route path='/vertifyuser' element={<VertifyUser/>}></Route>
      </Routes>
      </BrowserRouter>      
      <AppContext.Provider value={{ count, setCount }}>
        { 
        /* <Mybutton />
        <Counter />
        <Delete />
        <Clear /> */}
      </AppContext.Provider>
    </>
  )
}

