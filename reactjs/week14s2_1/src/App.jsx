import { useState } from 'react'
import { BrowserRouter, Routes,Route} from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Logout from './components/Logout'
import Protected from './components/Protected'

function App() {
  const [count, setCount] = useState(0)
  function notify(){
    toast("Hello you click on me " + (count+1) + " times")
    setCount(count + 1)
  }

  return (
    <>
    <button onClick={notify}>Notify {count}</button>
    <ToastContainer theme='dark'/>
      <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path='/'></Route>
        <Route element={<Login/>} path='/login'></Route>
        <Route element={<Protected/>}>
        <Route element={<Page1/>} path='/page1'></Route>
        <Route element={<Page2/>} path='/page2'></Route>
        <Route element={<Logout/>} path='/logout'></Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
