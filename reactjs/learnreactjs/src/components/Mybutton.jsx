import React from 'react'

function Mybutton() {
  function handclick() {
    alert('You clicked me!');
  }
  return (
    <button onClick={handclick}>Click me</button>
  )
}

export default Mybutton