import React from 'react'
import './Profile.css'
export default function Profile() {
  return (
    <div className='Main' >
    <div >
        This is your profile {localStorage.getItem('Email')}
    </div>
    </div>
  )
}
