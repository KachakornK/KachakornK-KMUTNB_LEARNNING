import React from 'react'
import { AppContext } from '../App'
import { useContext } from 'react'

function Counter() {
    const { count } = useContext(AppContext)
  return (
    <h2>Counter&nbsp;{count}</h2>
  )
}

export default Counter