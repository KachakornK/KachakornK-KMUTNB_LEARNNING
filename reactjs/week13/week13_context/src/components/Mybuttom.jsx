import React ,{ useContext} from 'react'
import { AppContext } from '../App'

function Mybuttom() {
    const { count, setCount } = useContext(AppContext)
  return (
    <>
        <button onClick={()=>setCount(count+1)}>+</button>&nbsp;
        <button onClick={()=>setCount(count-1)}>-</button>&nbsp;
        <button onClick={()=>setCount(0)}>Clear</button>
    </>
  )
}

export default Mybuttom