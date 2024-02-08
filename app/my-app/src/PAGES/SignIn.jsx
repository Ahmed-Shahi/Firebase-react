import React from 'react'
import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { app } from '../FIREBASE-Config/Config'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Profile from './Profile';

const auth = getAuth(app);

export default function SignIn() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        
        const user = userCredential.user;
        alert('Successfully Login')
        setUsername('');
        setPassword('');
        navigate('/Profile')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(error.errorMessage)
        setUsername('');
        setPassword('');
      });

  }
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h2>SIGN IN</h2>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <input
          className='form-control'
          type="email"
          placeholder="Enter Email Here..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: '10px', margin: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '300px' }}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <input
          className='form-control'
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: '10px', margin: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '300px' }}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <button
          onClick={handleLogin}
          style={{ padding: '10px 20px', margin: '10px', borderRadius: '5px', border: 'none', background: '#007bff', color: '#fff', cursor: 'pointer' }}
        >
          SIGN IN
        </button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h1 style={{ fontSize: "20px" }}>Do not have an Account??
          <span
          ><Link to={'/'} style={{ textDecoration: 'none' }}> Sign UP</Link> </span>
        </h1>
      </div>
    </div>
  )
}
