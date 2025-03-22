import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
     <div>Home</div>
     <h5>Hello {localStorage.user} {localStorage.stdID}</h5>
     <Link to ="/login">Login</Link> <br/>
     <Link to ="/page1">Page1</Link> <br/>
     <Link to ="/page2">Page2</Link> <br/>
     <Link to ="/logout">Logout</Link> <br/>
    </>
   
  )
}
