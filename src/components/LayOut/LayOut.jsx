import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'

function LayOut() {
  return (
    <div>
      <NavBar/>
      <Outlet/>
    </div>
  )
}

export default LayOut
