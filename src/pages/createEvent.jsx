import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

export default function createEvent() {
const isAuthenticated = true;


  return (
    <div>
        {isAuthenticated ? <Outlet/> : <Navigate to="/" />}


    </div>
  )
}
