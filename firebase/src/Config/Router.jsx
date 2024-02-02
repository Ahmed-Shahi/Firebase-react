import React, { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import Profile from '../Pages/Profile'
import { auth, onAuthStateChanged } from './FirebaseConfig'
import { Spin } from 'antd';

export default function Router() {

  const [user, setUser] = useState(false)
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const uid = user.uid;
        console.log(uid)
        setUser(true)
        setLoader(false)
      } else {
        console.log('user not login')
        setUser(false)
      }
    });
  }, [])


  return (
    <>
    {
    loader ? 
    <Spin/>
    :
    <BrowserRouter>
      <Routes>
        <Route path='/' element={user ? <Navigate to={'/profile'}/> : <Login />} />
        <Route path='/signup' element={user ? <Navigate to={'/profile'}/> : <Signup />} />
        <Route path='/profile' element={user ? <Profile /> : <Navigate to={'/'}/>} />
      </Routes>
    </BrowserRouter>

    }
    </>
  )
}
