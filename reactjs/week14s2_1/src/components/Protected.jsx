import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Slide, toast } from 'react-toastify'

function Protected() {
    const user = localStorage.getItem("user")
    useEffect(()=>{
        if(user!=='admin')
            //alert('You are not login')
            toast.error('You are not login', {autoClose:1000, transition:Slide})
    },[user])
  return (
    user === 'admin'? 
    <Outlet/>:
    <Navigate to ='/login'/>
  )
}

export default Protected