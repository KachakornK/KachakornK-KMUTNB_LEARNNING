import React from 'react'
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <>
    <ul>
    <h1>Welcome</h1>
        <li><Link to="/productlist">ShowProduct</Link></li>
        <li><Link to="/Vertify">Vertify User</Link></li>
    </ul>
    </>
  )
}
