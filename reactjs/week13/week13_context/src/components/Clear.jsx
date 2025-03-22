import React from 'react'
import { AppContext } from '../App'
import { useContext } from 'react'

function Clear() {
    const { count } = useContext(AppContext)
  return (
    <></>
  )
}

export default Clear