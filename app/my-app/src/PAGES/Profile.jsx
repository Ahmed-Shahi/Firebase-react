import React from 'react'
import './Profile.css'
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
const auth = getAuth();

export default function Profile() {
  const navigate = useNavigate()
  const Logout = ()=>{
    signOut(auth).then(() => {
      alert('logout Successfull')
      navigate('/SignIn')
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div className='Main' >
    <div >
        This is your profile {localStorage.getItem('Email')}
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {/* <Link to={'/SignIn'}>  */}
                <button
                    className='rounded-pill'
                    onClick={Logout}
                    style={{ padding: '10px 20px', margin: '10px', borderRadius: '5px', border: 'none', background: '#007bff', color: '#fff', cursor: 'pointer' }}
                >
                    Logout
                </button>
                {/* </Link> */}
            </div>
    </div>
  )
}
