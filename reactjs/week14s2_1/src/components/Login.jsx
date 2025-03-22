import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    let navigate = useNavigate()

  return (
    <>
    <h3>Login</h3> <br />
    <button onClick={
        ()=>{
            localStorage.setItem("user", "Kachakorn")
            localStorage.setItem('stdID' ,6606021421349)
            return navigate("/")
        }
        }>Login</button>
    </>
    

  )
}
