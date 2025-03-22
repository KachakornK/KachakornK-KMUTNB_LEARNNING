import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

export default  function NavBar() {
  return (
    <nav>
        <Link to ="/" className='logo'>
        <h3>Web React Router Dom</h3>
        </Link>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/notfound">Notfound</Link>
    </nav>
  )
}